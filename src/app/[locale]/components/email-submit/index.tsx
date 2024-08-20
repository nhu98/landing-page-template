import React from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import ArrowRightUp from '../icons/arrow-right-up';
import { Button } from '../../../../components/ui/button';

const EmailSubmit = () => {
  const t = useTranslations('HomePage');

  return (<section className=" relative h-[359px] md:h-[518px] font-inter">
    <Image priority src="/images/email-submit-bg.png" fill alt={'email submit'} className="object-cover" />
    <div className="absolute inset-0 flex flex-col items-center text-center justify-center">
      <div className="flex flex-col w-[343px] md:w-[779px]">
        <h2 className=" font-bold text-white mx-auto text-xl mb-6 md:text-5xl md:mb-8">
          {t('investment')}
        </h2>
        <p className="text-[rgba(247,247,247,1)] text-base font-normal mb-[32px]">
          {t('welcomeInvestment')}
        </p>
        <div>
          <Button
            className="text-base font-semibold bg-[rgba(7,103,273,1)] text-white px-[16px] py-[14px] rounded-lg hover:bg-blue-700 transition duration-300"
            onClick={() => document.getElementById('address')?.scrollIntoView({ behavior: 'smooth' })}>{t('contactUs')}
            <ArrowRightUp stroke="#FFFFFF" className="ml-1" /></Button>
        </div>

      </div>
    </div>
  </section>);
};

export default EmailSubmit;
