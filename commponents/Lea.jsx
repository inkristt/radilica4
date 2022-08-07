import React,{useState,useEffect} from 'react';
import Head from 'next/head';
import Header from './Header';

const Lea = ({children}) => {
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
        <Head>
            <title>Inkrist</title>
        </Head>
        <header className={bgblack ? "head bgblack":'head'}>
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