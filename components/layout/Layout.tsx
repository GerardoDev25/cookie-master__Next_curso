import React, { FC, ReactNode } from 'react';
import Head from 'next/head';
import { Navbar } from 'components/ui';

interface Props {
  children: ReactNode;
}

export const Layout: FC<Props> = ({ children }) => {
  return (
    <>
      <Head>Layout</Head>
      <nav>
        <Navbar />
      </nav>
      <main style={{ padding: '20px 50px' }}>{children}</main>
    </>
  );
};
