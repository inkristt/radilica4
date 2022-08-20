import React, { useState, useEffect, useRef } from 'react';
import Head from 'next/head';
import Header from './Header';
import Footer from './Footer';


const Lea = ({ children }) => {


    return (
        <div>
            <main >
                <Head>
                    <title>Inkrist</title>
                </Head>
                <header className='head'>
                    <Header />
                </header>
                <div className='main'>
                    {children}
                </div>
            </main>

        </div>
    )
}

export default Lea