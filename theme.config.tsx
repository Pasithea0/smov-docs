import {
  defineTheme,
  directory,
  group,
  link,
  social,
} from '@neato/guider/theme';
import { Logo } from './components/Logo';
import { NextSeo } from 'next-seo';
import coverUrl from './public/cover.png';
import faviconUrl from './public/favicon.ico';

const starLinks = [
  link('GitHub', 'https://github.com/p-stream/p-stream', {
    style: 'star',
    newTab: true,
    icon: 'akar-icons:github-fill',
  }),
  link('Discord', '/links/discord', {
    style: 'star',
    newTab: true,
    icon: 'fa6-brands:discord',
  }),
];

export default defineTheme({
  github: 'p-stream/p-stream',
  navigation: [
    link('Discord', '/links/discord', {
      style: 'star',
      newTab: true,
      icon: 'mdi:discord',
    }),
    link('Check it out', '/instances', {
      style: 'star',
      newTab: true,
    }),
  ],
  contentFooter: {
    text: 'Made with :3 (sillyness)',
    editRepositoryBase:
      'https://github.com/p-stream/docs/blob/master',
    socials: [
      social.github('https://github.com/p-stream'),
      social.discord('/links/discord'),
    ],
  },
  meta: (pageMeta) => (
    <NextSeo
      {...{
        title: `${pageMeta.title ?? "Watch your favorite shows and movies for free with no ads ever! (っ'ヮ'c)"} | P-Stream`,
        description:
          pageMeta.description ??
          'P-Stream is a free and open source streaming site, no ads, no tracking, no nonsense.',
        openGraph: {
          images: [
            {
              url: coverUrl.src,
            },
          ],
          title: `${pageMeta.title ?? "Watch your favorite shows and movies for free with no ads ever! (っ'ヮ'c)"} | P-Stream`,
          description:
            pageMeta.description ??
            'P-Stream is a free and open source streaming site, no ads, no tracking, no nonsense.',
        },
        twitter: {
          cardType: 'summary_large_image',
        },
        additionalLinkTags: [
          {
            href: faviconUrl.src,
            rel: 'icon',
            type: 'image/x-icon',
          },
        ],
      }}
    />
  ),
  settings: {
    logo: () => <Logo />,
    backgroundPattern: 'flare',
    colors: {
      primary: '#8288FE',
      primaryLighter: '#B7ADDE',
      primaryDarker: '#656BD4',
      background: '#0C0B13',
      backgroundLighter: '#12131FFF',
      backgroundLightest: '#1A1B29FF',
      backgroundDarker: '#000000',
      line: '#34334CFF',
      text: '#8C899A',
      textLighter: '#A6A4AE',
      textHighlight: '#FFF',
    },
  },
  directories: [
    directory('main', {
      sidebar: [
        ...starLinks,
        group('Global', [
          link('Instances', '/instances', { icon: 'mdi:web' }),
          link('Browser Extension', '/extension', { icon: 'mdi:extension' }),
          link('Support', '/support', { icon: 'mdi:help' }),
        ]),
        group('Self-Hosting', [
          link('Start self-hosting', '/self-hosting/hosting-intro'),
          link('Configure backend', '/self-hosting/use-backend'),
          link('PWA vs no-PWA', '/self-hosting/about-pwa'),
          link('Troubleshooting', '/self-hosting/troubleshooting'),
        ]),
        group('Proxy', [
          link('Introduction', '/proxy/introduction'),
          link('Deploy', '/proxy/deploy'),
          link('Configuration', '/proxy/configuration'),
          // link('Changelog', '/proxy/changelog'),
        ]),
        group('Client', [
          link('Introduction', '/client/introduction'),
          link('Deploy', '/client/deploy'),
          link('TMDB API Key', '/client/tmdb'),
          link('Configuration', '/client/configuration'),
          // link('Changelog', '/client/changelog'),
          link('Update guide', '/client/upgrade'),
        ]),
        group('Backend', [
          link('Introduction', '/backend/introduction'),
          link('Deploy', '/backend/deploy'),
          link('Configuration', '/backend/configuration'),
          // link('Changelog', '/backend/changelog'),
          link('Update guide', '/backend/upgrade'),
        ]),
        group('Extra', [
          link('Streaming', '/extra/streaming'),
          link('Selfhost', '/extra/selfhost'),
        ]),
      ],
    }),
  ],
});
