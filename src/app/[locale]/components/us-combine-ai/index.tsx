import React from 'react';
import { Button } from '../../../../components/ui/button';
import ArrowRightUp from '../icons/arrow-right-up';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

const UsCombineAi = () => {
  const t = useTranslations('HomePage');

  return (<section
    className="flex flex-col-reverse py-[56px] px-[16px] md:flex-row md:py-[100px] md:px-[120px] items-center justify-between bg-white font-inter">
    <div data-aos="fade-right" className="flex justify-center items-center mb-8 md:w-1/2 md:mb-0 md:mr-[100px]">
      <Image priority src="/images/combine-ai.png" width={587} height={750} alt={'introduce-ai'} />
    </div>

    <div data-aos="fade-left" className="text-center mb-8 md:mb-0 md:text-left md:w-1/2">
      <h2 className="text-xl font-bold mb-6 md:text-3xl md:mb-8">
        {t('howToCombine')}
      </h2>
      <p className="text-base font-normal text-[rgba(54,54,54,1)] mb-6 md:mb-8">
        {t('howToCombineDescription')}
      </p>
      <Button
        className="text-base font-semibold bg-[rgba(7,103,273,1)] text-white px-[16px] py-[14px] rounded-lg hover:bg-blue-700 transition duration-300"
        onClick={() => document.getElementById('address')?.scrollIntoView({ behavior: 'smooth' })}>{t('contactUs')}
        <ArrowRightUp stroke="#FFFFFF" className="ml-1" /></Button>
    </div>
  </section>);
};

export default UsCombineAi;
