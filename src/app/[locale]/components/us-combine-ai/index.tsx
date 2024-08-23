import React from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

const UsCombineAi = () => {
  const t = useTranslations('HomePage');

  return (<section id="howToDo"
    className="flex flex-col-reverse px-[16px] md:flex-row items-center justify-between bg-white font-inter max-w-[1200px] mx-auto">
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
    </div>
  </section>);
};

export default UsCombineAi;
