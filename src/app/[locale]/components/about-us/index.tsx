import React from 'react';
import Image from 'next/image';
import { AspectRatio } from '../../../../components/ui/aspect-ratio';
import ArrowRightUp from '../icons/arrow-right-up';
import { Button } from '../../../../components/ui/button';
import BlurFade from '../../../../components/magicui/blur-fade';
import { useTranslations } from 'next-intl';

const AboutUs = () => {
  const t = useTranslations('HomePage');

  return (<section id="about-us" className="bg-white px-[16px] py-[65px] md:p-[120px] font-inter">
    <div className="max-w-6xl mx-auto text-center">
      <BlurFade delay={0.25} inView>
        <h2 className="text-xl mb-8 md:text-5xl md:mb-8 font-bold text-gray-900">{t('aboutUsTitle')}</h2>
      </BlurFade>
      <BlurFade delay={0.25 * 2} inView>
        <p className="text-base font-normal text-[rgba(54,54,54,1)] mb-6 md:mb-8">
          {t('aboutUsDescription')}
        </p>
      </BlurFade>
      <BlurFade delay={0.25 * 3} inView>
        <Button
          className="text-base font-semibold bg-[rgba(7,103,273,1)] text-white px-[16px] py-[14px] rounded-lg hover:bg-blue-700 transition duration-300"
          onClick={() => document.getElementById('address')?.scrollIntoView({ behavior: 'smooth' })}>{t('contactUs')}
          <ArrowRightUp stroke="#FFFFFF" className="ml-1" /></Button>
      </BlurFade>

    </div>

    <BlurFade delay={0.25 * 4} inView>
      <div className="max-w-6xl mx-auto mt-6 md:mt-8">
        <AspectRatio ratio={16 / 9} className="bg-muted"
        >
          <Image priority src="/images/about-us.jpeg" fill sizes={'(max-width: 768px) 100vw, 50vw'} alt="Team Image"
                 className="rounded-lg shadow-custom w-full h-auto object-cover" />
        </AspectRatio>
      </div>
    </BlurFade>
  </section>);
};

export default AboutUs;
