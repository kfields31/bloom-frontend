import { CacheProvider, EmotionCache } from '@emotion/react';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
// Import the functions you need from the SDKs you need
import { NextIntlProvider } from 'next-intl';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { hotjar } from 'react-hotjar';
import { wrapper } from '../app/store';
import { setUserLoading, setUserToken } from '../app/userSlice';
import Footer from '../components/layout/Footer';
import LeaveSiteButton from '../components/layout/LeaveSiteButton';
import TopBar from '../components/layout/TopBar';
import createEmotionCache from '../config/emotionCache';
import { auth } from '../config/firebase';
import { AuthGuard } from '../guards/authGuard';
import { PartnerAdminGuard } from '../guards/partnerAdminGuard';
import { TherapyAccessGuard } from '../guards/therapyAccessGuard';
import { useAppDispatch } from '../hooks/store';
import '../styles/globals.css';
import theme from '../styles/theme';

// For SSG compatibility with MUI
// Client-side emotion cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

function MyApp(props: MyAppProps) {
  const {
    Component,
    emotionCache = clientSideEmotionCache,
    pageProps,
  }: {
    Component: any;
    emotionCache?: EmotionCache;
    pageProps: any;
  } = props;

  const dispatch: any = useAppDispatch();
  const router = useRouter();
  const pathname = router.pathname.split('/')[1]; // e.g. courses | therapy | partner-admin

  useEffect(() => {
    if (process.env.NEXT_PUBLIC_ENV === 'staging') {
      hotjar.initialize(Number(process.env.NEXT_PUBLIC_HOTJAR_ID), 6);
    }

    // Add listener for new firebase auth token, updating it in state to be used in request headers
    // Required for restoring user state following app reload or revisiting site
    auth.onIdTokenChanged(async function (user) {
      const token = await user?.getIdToken();

      if (token) {
        await dispatch(setUserToken(token));
      }
      dispatch(setUserLoading(false));
    });
  }, [dispatch]);

  // Adds required permissions guard to pages, redirecting where required permissions are missing
  // New pages will default to requiring authenticated and public pages must be added to the array below
  const ComponentWithGuard = () => {
    const publicPaths = ['', 'welcome', 'auth', 'action-handler', '404', '500'];
    const component = <Component {...pageProps} />;
    let children = null;

    if (publicPaths.includes(pathname)) {
      return component;
    }
    if (pathname === 'therapy') {
      children = <TherapyAccessGuard>{component}</TherapyAccessGuard>;
    }
    if (pathname === 'partner-admin') {
      children = <PartnerAdminGuard>{component}</PartnerAdminGuard>;
    }

    return <AuthGuard>{children || component}</AuthGuard>;
  };

  return (
    <NextIntlProvider messages={pageProps.messages}>
      <CacheProvider value={emotionCache}>
        <Head>
          <title>Bloom</title>
          <meta name="viewport" content="initial-scale=1, width=device-width" />
        </Head>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <TopBar />
          {pathname !== 'partner-admin' && <LeaveSiteButton />}
          <ComponentWithGuard />
          <Footer />
        </ThemeProvider>
      </CacheProvider>
    </NextIntlProvider>
  );
}

export default wrapper.withRedux(MyApp);
