import React, { useState, useEffect, useRef } from 'react';
import Head from 'next/head';
import Header from './Header';
import Footer from './Footer';


const Lea = ({ children }) => {
    const [bgblack, setbgblack] = useState(false)
    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                setbgblack(true);
            } else {
                setbgblack(false);
            }
        });
    }, [])

    return (
        <div>
            <main >
                <Head>
                    <title>Inkrist</title>
                </Head>
                <header className={bgblack ? "head bgblack" : 'head'}>
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