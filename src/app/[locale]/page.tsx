'use client';
import styles from '../page.module.scss';
import Banner from './components/banner';
import AboutUs from './components/about-us';
import IntroduceAI from './components/introduce-ai';
import UsCombineAi from './components/us-combine-ai';
import Fields from './components/fields';
import EmailSubmit from './components/email-submit';
import AOS from 'aos';
import 'aos/dist/aos.css';
import {useEffect, useState} from 'react';
import ArrowTopUp from './components/icons/arrow-top';
import ZaloIcon from './components/icons/zalo';
import CallMeIcon from './components/icons/call-me';
import {useTranslations} from 'next-intl';
import {PulsatingButton} from '../../components/magicui/pulsating-btn';

export default function Index() {
  const t = useTranslations('HomePage');
  const [showScrollToTop, setShowScrollToTop] = useState(false);

  useEffect(() => {
    AOS.init({});
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollToTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({top: 0, behavior: 'smooth'});
  };

  return (
    <div className={styles.page}>
      <div className="wrapper overflow-x-hidden">
        <Banner />
        <AboutUs />
        {/*<TrustedLogos />*/}
        <IntroduceAI />
        <UsCombineAi />
        <Fields />
        <EmailSubmit />
        {/*<Address />*/}
      </div>
      {showScrollToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-4 left-4 p-3 bg-white rounded-full shadow-lg hover:bg-blue-600 transition"
          aria-label="Scroll to Top">
          <ArrowTopUp />
        </button>
      )}

      <div className="fixed bottom-10 right-28">
        <a
          href="tel:+84911910210"
          className="rounded-full bg-black opacity-50 text-white p-3 hover:bg-blue-600  transition">
          <span>{t('phone')}</span>
        </a>
      </div>

      <div className="fixed bottom-4 right-4 flex flex-col space-y-2 items-center">
        <PulsatingButton>
          <a
            href="https://zalo.me/0911910210"
            className="w-20 h-20 flex items-center justify content-center rounded-full bg-white p-3 hover:bg-blue-600  transition">
            <ZaloIcon />
          </a>
        </PulsatingButton>

        <PulsatingButton>
          <a
            href="tel:+84911910210"
            className="w-20 h-20 flex items-center justify content-center rounded-full bg-white p-3 hover:bg-blue-600  transition">
            <CallMeIcon />
          </a>
        </PulsatingButton>
      </div>
    </div>
  );
}
