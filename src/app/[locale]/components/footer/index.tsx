import React from 'react';
import { useTranslations } from 'next-intl';

const Footer = () => {
  const t = useTranslations('HomePage');

  return (<footer className="bg-gray-100">
    <div
      className="flex flex-col items-center justify-between px-[16px] py-[24px] md:flex-row md:px-[100px] md:py-[100px] font-inter">
      {/* Left Section: Text */}
      <div className="text-3xl md:text-6xl font-black text-blue-600 mb-10 md:mb-0">
        <p>{t('letsGetStarted')}</p>
        <p>{t('together')}</p>
      </div>

      {/* Right Section: Contact Info */}
      <div className="text-gray-800 flex flex-col gap-6 text-base">
        <div>
          <p className="font-bold">{t('addressTitle')}</p>
          <p className="font-medium text-[rgba(152,152,152,1)]">{t('address')}</p>
        </div>

        <div className="flex flex-col gap-6 md:flex-row md:gap-5">
          <div className="">
            <p className="font-bold">{t('phoneTitle')}</p>
            <p className="font-medium text-[rgba(152,152,152,1)]">{t('phone')}</p>
          </div>
          <div className="">
            <p className="font-bold">{t('emailTitle')}</p>
            <p className="font-medium text-[rgba(152,152,152,1)]">{t('email')}</p>
          </div>

          <div className="">
            <p className="font-bold">{t('websiteTitle')}</p>
            <a href="https://apisoftware.net" className="font-medium text-[rgba(0,122,255,1)] underline">
              {t('website')}
            </a>
          </div>
        </div>
      </div>
    </div>

    {/* Footer Bottom */}
    <div
      className="text-center border-t border-[rgba(230, 230, 230, 1)] w-full px-[24px] py-[10px] bg-white text-[rgba(152,152,152,1)] font-normal text-base">
      {t('copyright')}
    </div>
  </footer>);
};

export default Footer;

