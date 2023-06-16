import { FC, ReactNode } from 'react';
import Head from 'next/head';

import { NavBar } from '@/components/ui';

interface Props {
  title?: string;
  children: ReactNode;
}

const origin = (typeof window !== 'undefined' && window.location.origin) || '';

export const Layout: FC<Props> = ({ children, title }) => {
  console.log('origin', { origin });

  return (
    <>
      <Head>
        <title>{title ?? 'Pokemon App'}</title>
        <meta name='authot' content='Edgar Lazaro' />
        <meta
          name='description'
          content={`Informacion sobre el pokemon ${title}`}
        />
        <meta name='keywords' content={`${title}, pokemon, pokedex`} />
        <meta property='og:title' content={`Información sobre ${title}`} />
        <meta
          property='og:description'
          content={`Esta ka página sobre ${title}`}
        />
        <meta property='og:image' content={`${origin}/img/banner.png`} />
      </Head>
      <NavBar />
      <main style={{ padding: '0px 20px' }}>{children}</main>
    </>
  );
};
