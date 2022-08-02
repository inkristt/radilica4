import React from 'react';
import Head from 'next/head';
import Header from './Header';

const Lea = ({children}) => {
  return (
    <div>
        <Head>
            <title>Inkrist</title>
        </Head>
        <header>
            <Header />
        </header>
        <div className='main'>
            {children}
        </div>
        <footer>
            footer 
        </footer>
    </div>
  )
}

export default Lea