'use client';

import Header from '@components/header';
import ToastMsg from '@components/toastMsg';
import React from 'react';
import { CookiesProvider } from 'react-cookie';
import 'react-toastify/dist/ReactToastify.css';

const Router = (props: { children: React.ReactNode }) => {
  console.log(props);

  return (
    <>
      <CookiesProvider>
        <div
          style={{
            width: '100%',
            backgroundColor: '#282828',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
          }}
        >
          <Header />
          {props.children}
        </div>
        <ToastMsg />
      </CookiesProvider>
    </>
  );
};

export default Router;
