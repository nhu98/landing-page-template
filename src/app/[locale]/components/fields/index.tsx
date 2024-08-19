import React from 'react';
import Image from 'next/image';
import BlurFade from '../../../../components/magicui/blur-fade';
import { useTranslations } from 'next-intl';

const Fields = () => {
  const t = useTranslations('HomePage');

  const items = [{ title: t('dataAnalyst'), image: '/images/field-one.png' }, {
    title: t('management'), image: '/images/field-two.png'
  }, {
    title: t('banking'), image: '/images/field-three.png'
  }, {
    title: t('integration'), image: '/images/field-four.png'
  }, { title: t('webThree'), image: '/images/field-five.png' }, {
    title: t('biometrics'), image: '/images/field-six.png'
  }, {
    title: t('ecommerce'), image: '/images/field-seven.png'
  }, {
    title: t('locationTracking'), image: '/images/field-eight.png'
  }, { title: t('booking'), image: '/images/field-nine.png' }];

  return (<section id="fields" className="py-[65px] px-[16px] md:py-[100px] md:px-[120px] bg-white font-inter">
    <div className="text-center mb-6 md:mb-8">
      <h2 className="text-xl font-bold mb-6 md:text-3xl md:mb-8">
        {t('someOfOurStrengthsTitle')}
      </h2>
      <p className="text-base font-normal text-[rgba(54,54,54,1)]">
        {t('someOfOurStrengthsDescription')}
      </p>
    </div>

    <div className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-8">
      {items.map((item, index) => (<div key={index} className="relative overflow-hidden rounded-lg group">
        <BlurFade key={item.image} delay={0.25 + index * 0.05} inView>
          <Image src={item.image} alt={item.title} width={378} height={269}
                 className="w-40 h-52 md:w-96 md:h-64 transition-transform duration-500 transform group-hover:scale-110 cursor-pointer" />
          <div
            className="absolute inset-0 flex justify-center items-end">
            <h3 className="text-white text-base font-bold text-center">{item.title}</h3>
          </div>
        </BlurFade>
      </div>))}
    </div>
  </section>);
};

export default Fields;
