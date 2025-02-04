'use client';

import { FEEDBACK_FORM_URL } from '@/lib/constants/common';
import { useTypedSelector } from '@/lib/hooks/store';
import { generateMetadataBasic } from '@/lib/utils/generateMetadataBase';
import { getImageSizes } from '@/lib/utils/imageSizes';
import illustrationPerson4Peach from '@/public/illustration_person4_peach.svg';
import { columnStyle } from '@/styles/common';
import { Box, Container, Link, Typography } from '@mui/material';
import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';
import Image from 'next/image';
import { ReactNode } from 'react';

const containerStyle = {
  ...columnStyle,
  height: '100vh',
} as const;

const imageContainerStyle = {
  position: 'relative',
  width: { xs: 150, md: 210 },
  height: { xs: 150, md: 210 },
  marginBottom: 4,
} as const;

type Params = Promise<{ locale: string }>;

export async function generateMetadata({ params }: { params: Params }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Admin.accessGuard' });

  return generateMetadataBasic({ title: t('title') });
}

export function SuperAdminGuard({ children }: { children: ReactNode }) {
  const userIsSuperAdmin = useTypedSelector((state) => state.user.isSuperAdmin);
  const t = useTranslations('Admin.accessGuard');
  const tS = useTranslations('Shared');

  if (!userIsSuperAdmin) {
    return (
      <Container sx={containerStyle}>
        <Box sx={imageContainerStyle}>
          <Image
            alt={tS('alt.personTea')}
            src={illustrationPerson4Peach}
            fill
            sizes={getImageSizes(imageContainerStyle.width)}
            style={{
              objectFit: 'contain',
            }}
          />
        </Box>
        <Typography variant="h2" component="h2" mb={2}>
          {t('title')}
        </Typography>
        <Typography mb={2}>
          {t.rich('introduction', {
            contactLink: (children) => (
              <Link target="_blank" href={FEEDBACK_FORM_URL}>
                {children}
              </Link>
            ),
          })}
        </Typography>
      </Container>
    );
  }

  return <>{children}</>;
}
