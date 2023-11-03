import '@/styles/globals.css'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import {useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function App({ Component, pageProps }) {

  useEffect(() => {
    AOS.init({
      duration: 2000,
      once: true,
    });
  }, []);

  return <Component {...pageProps} />
}
