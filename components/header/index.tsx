'use client';

import {
  useParams,
  useRouter,
  useSelectedLayoutSegments,
} from 'next/navigation';
import Link from 'next/link';
import ChangeLocale from '../changeLocale';
import * as s from './HeaderStyled';
import { useState } from 'react';
import { LocaleTypes } from '../../utils/localization/settings';
import { useTranslation } from '../../utils/localization/client';

export default function Header() {
  const locale = useParams()?.locale as LocaleTypes;
  const urlSegments = useSelectedLayoutSegments();
  const router = useRouter();
  const [open, setOpen] = useState<boolean>(false);
  const { t } = useTranslation(locale, 'common');

  const menuList = [
    {
      title: t('Sneak peek at Instagram stories'),
      url: `/${urlSegments[0]}/story-view`,
    },
    {
      title: t('Download Instagram Story'),
      url: `/${urlSegments[0]}/story-download`,
    },
    {
      title: t('Download Instagram Reels'),
      url: `/${urlSegments[0]}/reels-download`,
    },
    {
      title: t('Download Instagram Profile Photo HD'),
      url: `/${urlSegments[0]}/profile-photo-download`,
    },
    {
      title: t('Download Instagram Photos'),
      url: `/${urlSegments[0]}/photo-download`,
    },
    {
      title: t('Instagram video download'),
      url: `/${urlSegments[0]}/video-download`,
    },
  ];

  return (
    <div style={{ display: 'flex', gap: '20px' }}>
      <Link href={`/${urlSegments[0]}`}>
        {/* <Link href={`/`}> */}
        <img
          src={'/logo.png'}
          alt="인스타 스토리 뷰 로고"
          width={161}
          height={41}
        />
      </Link>
      <ChangeLocale />
    </div>
  );
}
