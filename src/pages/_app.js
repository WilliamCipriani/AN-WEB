import '@/styles/globals.css'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import {useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Head from 'next/head';

export default function App({ Component, pageProps }) {

  useEffect(() => {
    AOS.init({
      duration: 2000,
      once: true,
    });
  }, []);

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        
        <link rel="icon" href="/image/index/an-servicios-tecnologicos-logo-head.png" sizes="16x16"/>
        
      </Head>
      <Component {...pageProps} />
    </>
  )
  
}
