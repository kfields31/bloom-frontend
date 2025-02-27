'use client';

import Header from '@/components/layout/Header';
import { Link as i18nLink } from '@/i18n/routing';
import { PROGRESS_STATUS } from '@/lib/constants/enums';
import { getDefaultFullSlug } from '@/lib/utils/getDefaultFullSlug';
import illustrationPerson4Peach from '@/public/illustration_person4_peach.svg';
import { breadcrumbButtonStyle } from '@/styles/common';
import theme from '@/styles/theme';
import CircleIcon from '@mui/icons-material/Circle';
import { Button, Typography, useMediaQuery } from '@mui/material';
import { ISbRichtext, ISbStoryData } from '@storyblok/react/rsc';
import { useLocale, useTranslations } from 'next-intl';
import { useEffect, useState } from 'react';

const sessionSubtitleStyle = {
  marginTop: '0.75rem !important',
} as const;
const dotStyle = {
  width: { xs: 8, md: 10 },
  height: { xs: 8, md: 10 },
} as const;

interface SessionHeaderProps {
  description: string | ISbRichtext;
  name: string;
  sessionProgress: PROGRESS_STATUS;
  course: ISbStoryData;
  subtitle?: string;
  storyUuid: string;
  storyPosition?: number;
}

export const SessionHeader = (props: SessionHeaderProps) => {
  const { description, name, sessionProgress, course, subtitle, storyUuid, storyPosition } = props;

  const t = useTranslations('Courses');
  const locale = useLocale();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const [weekString, setWeekString] = useState<string>('');

  const headerProps = {
    title: name,
    introduction: description,
    imageSrc: illustrationPerson4Peach,
    imageAlt: 'alt.personTea',
  };

  useEffect(() => {
    course.content.weeks.map((week: any) => {
      week.sessions.map((session: any) => {
        if (session === storyUuid) {
          setWeekString(week.name);
        }
      });
    });
  }, [storyUuid, course.content.weeks]);

  const courseNameEllipses =
    isSmallScreen && course.content.name.length > 35
      ? `${course.content.name.substring(0, 35)}...`
      : course.content.name;
  return (
    <Header
      title={headerProps.title}
      introduction={headerProps.introduction}
      imageSrc={headerProps.imageSrc}
      imageAlt={headerProps.imageAlt}
      progressStatus={sessionProgress}
    >
      <Button variant="contained" href="/courses" sx={breadcrumbButtonStyle} size="small">
        {t('courses')}
      </Button>

      <CircleIcon color="error" sx={{ ...dotStyle, marginX: 1 }} />

      <Button
        variant="contained"
        sx={breadcrumbButtonStyle}
        href={getDefaultFullSlug(course.full_slug, locale)}
        component={i18nLink}
        size="small"
      >
        {courseNameEllipses}
      </Button>
      <Typography sx={sessionSubtitleStyle} variant="body2">
        {weekString} -{' '}
        {storyPosition !== undefined ? `${t('session')} ${storyPosition / 10 - 1}` : subtitle}
      </Typography>
    </Header>
  );
};
