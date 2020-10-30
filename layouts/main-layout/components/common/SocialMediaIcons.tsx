import React, { FunctionComponent } from 'react';
import Image from 'next/image';

import styles from './SocialMediaIcons.module.scss';

const LINK_PROPS = {
  target: '_blank',
  rel: 'noreferrer noopener',
};

const SOCIAL_MEDIA = [
  {
    name: 'tw',
    icon: '/images/social/tw.svg',
    url: 'https://twitter.com/AdrienHarnay',
    openInNewTab: true,
  },
  {
    name: 'gh',
    icon: '/images/social/gh.svg',
    url: 'https://github.com/adrienharnay',
    openInNewTab: true,
  },
  {
    name: 'li',
    icon: '/images/social/li.svg',
    url: 'https://www.linkedin.com/in/adrien-harnay/',
    openInNewTab: true,
  },
  {
    name: 'ma',
    icon: '/images/social/ma.svg',
    url: 'mailto:adrien@harnay.me',
    openInNewTab: false,
  },
];

const SocialMediaIcons: FunctionComponent = () => {
  const Icons = SOCIAL_MEDIA.map(({ name, icon, url, openInNewTab }) => (
    <a
      key={url}
      className={styles.socialMediumLink}
      href={url}
      {...(openInNewTab ? LINK_PROPS : {})}
    >
      <Image
        src={icon}
        alt={name}
        className={styles.icon}
        width={24}
        height={24}
      />
    </a>
  ));

  return <div>{Icons}</div>;
};

export default SocialMediaIcons;
