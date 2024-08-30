import React from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

const IntroduceAI = () => {
  const t = useTranslations('HomePage');

  return (<section id="mission"
                   className="flex flex-col items-center justify-between pt-[32px] px-[16px] md:flex-row bg-white font-inter max-w-[1200px] mx-auto scroll-mt-[calc(50px)]">
    <div data-aos="fade-right" className="md:w-1/2 mb-8 text-center md:text-left md:mb-0 md:mr-[100px]">
      <h2 className="text-xl font-bold mb-6 md:text-3xl md:mb-8">
        {t('aiAndHumanTitle')}
      </h2>
      <p className="text-base font-normal text-[rgba(54,54,54,1)] mb-6 md:mb-8">
        {t('aiAndHumanDescription')}
      </p>
    </div>

    <div data-aos="fade-left" className="md:w-1/2 flex items-center justify-center">
      <Image priority src="/images/introduce-ai.png" width={585} height={788} alt={'introduce-ai'} />
    </div>
  </section>);
};

export default IntroduceAI;
