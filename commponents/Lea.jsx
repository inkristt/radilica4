import React from 'react';
import Head from 'next/head';


const Lea = ({children}) => {
  return (
    <div>
        <Head>
            <title>Inkrist</title>
        </Head>
        <header>
            header
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