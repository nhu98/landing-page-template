'use client';
import React, { useEffect, useState } from 'react';
import { Button } from 'src/components/ui/button';
import ViFlag from '../icons/vi-flag';
import ArrowRightUp from '../icons/arrow-right-up';
import { useLocale, useTranslations } from 'next-intl';
import UsFlag from '../icons/us-flag';
import { useRouter } from 'next/navigation';
import Menu from '../icons/menu';
import Image from 'next/image';


const Header = () => {
  const t = useTranslations('HomePage');
  const locale = useLocale();
  const router = useRouter();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const sections = document.querySelectorAll('section');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, { threshold: 0.5 });

    sections.forEach(section => {
      observer.observe(section);
    });

    return () => {
      sections.forEach(section => {
        observer.unobserve(section);
      });
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleChangeLanguage = () => {
    if (locale === 'vi') {
      router.replace('en');
    } else {
      router.replace('vi');
    }
  };

  return (<header
    className="max-w-[1440px] mx-auto px-[16px] py-[8px] md:px-[40px] md:py-[16px] flex justify-between items-center font-inter sticky top-0 left-0 right-0 bg-white z-50">
    {/* Logo Section */}
    <div className="flex items-center gap-[10px]">
      <Image priority src="/images/logo.png" width={48} height={48} className="w-12 h-12"
             alt={'logo'} />
    </div>

    {/* Mobile Menu Icon */}
    <div className="md:hidden flex items-center">
      <Button variant="ghost" onClick={toggleMenu}>
        <Menu className="w-8 h-8" />
      </Button>
    </div>

    {/* Navigation Section - Hidden on mobile */}
    <div className="hidden md:flex items-center gap-[16px] w-auto h-[52px]">
      <Button variant="ghost"
              className={activeSection === 'about-us' ? `relative h-full text-[16px] p-[16px] rounded-lg font-medium text-black bg-gradient-to-b from-transparent to-[rgba(100,141,255,0.1)]
  after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:bottom-0 after:w-[40%] after:h-[4px] after:bg-[#5F87FF] after:rounded-full after:rounded-b-none` : 'h-full text-[16px] p-[16px] rounded-lg'}
              onClick={() => document.getElementById('about-us')?.scrollIntoView({ behavior: 'smooth' })}>{t('aboutUs')}</Button>
      <Button variant="ghost" className={activeSection === 'mission' ? `relative h-full text-[16px] p-[16px] rounded-lg font-medium text-black bg-gradient-to-b from-transparent to-[rgba(100,141,255,0.1)]
  after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:bottom-0 after:w-[40%] after:h-[4px] after:bg-[#5F87FF] after:rounded-full after:rounded-b-none` : 'h-full text-[16px] p-[16px] rounded-lg'}
              onClick={() => document.getElementById('mission')?.scrollIntoView({ behavior: 'smooth' })}>{t('mission')}</Button>
      <Button variant="ghost" className={activeSection === 'fields' ? `relative h-full text-[16px] p-[16px] rounded-lg font-medium text-black bg-gradient-to-b from-transparent to-[rgba(100,141,255,0.1)]
  after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:bottom-0 after:w-[40%] after:h-[4px] after:bg-[#5F87FF] after:rounded-full after:rounded-b-none` : 'h-full text-[16px] p-[16px] rounded-lg'}
              onClick={() => document.getElementById('fields')?.scrollIntoView({ behavior: 'smooth' })}>{t('field')}</Button>
      <Button variant="ghost" className="h-full text-[16px] p-[16px] rounded-lg"
              onClick={handleChangeLanguage}>{locale === 'vi' ? <ViFlag className="mr-0.5" /> :
        <UsFlag className="mr-0.5" />}{t('language')}</Button>
      <Button variant="outline" className="h-full p-[14px] rounded-lg border-[rgba(17,129,247,1)]"
              onClick={() => document.getElementById('address')?.scrollIntoView({ behavior: 'smooth' })}>{t('contactUs')}
        <ArrowRightUp className="ml-1" /></Button>
    </div>

    {/* Mobile Navigation Section - Hidden by default */}
    {isMenuOpen && (<div
      className="absolute top-[60px] left-0 w-full bg-white flex flex-col items-center gap-[16px] py-[16px] z-10 md:hidden">
      <Button variant="ghost" className="h-full text-[14px] p-[14px] rounded-lg"
              onClick={() => {
                toggleMenu();
                document.getElementById('about-us')?.scrollIntoView({ behavior: 'smooth' });
              }}>{t('aboutUs')}</Button>
      <Button variant="ghost" className="h-full text-[14px] p-[14px] rounded-lg"
              onClick={() => {
                toggleMenu();
                document.getElementById('mission')?.scrollIntoView({ behavior: 'smooth' });
              }}>{t('mission')}</Button>
      <Button variant="ghost" className="h-full text-[14px] p-[14px] rounded-lg"
              onClick={() => {
                toggleMenu();
                document.getElementById('fields')?.scrollIntoView({ behavior: 'smooth' });
              }}>{t('field')}</Button>
      <Button variant="ghost" className="h-full text-[14px] p-[14px] rounded-lg"
              onClick={handleChangeLanguage}>{locale === 'vi' ? <ViFlag className="mr-0.5" /> :
        <UsFlag className="mr-0.5" />}{t('language')}</Button>
      <Button variant="outline" className="h-full p-[12px] text-[14px] rounded-lg border-[rgba(17,129,247,1)]"
              onClick={() => {
                toggleMenu();
                document.getElementById('address')?.scrollIntoView({ behavior: 'smooth' });
              }}>{t('contactUs')}<ArrowRightUp className="ml-1" /></Button>
    </div>)}
  </header>);
};

export default Header;

