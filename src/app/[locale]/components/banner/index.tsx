import React from 'react';
import Image from 'next/image';
import BlurFade from '../../../../components/magicui/blur-fade';
import {useTranslations} from 'next-intl';
import Fireworks from '../framer-motion';

const Banner = () => {
  const t = useTranslations('HomePage');
  return (
    <BlurFade delay={0} duration={2} inView>
      <section
        id="banner"
        className={`relative h-[485px] md:h-[720px] font-inter`}>
        <Image
          priority
          src="/images/banner.png"
          fill
          sizes={'(max-width: 768px) 100vw, 50vw'}
          alt={'banner'}
          className="object-cover"
        />
        <div className="absolute inset-0 flex flex-col items-center  text-center justify-between pt-[40px] md:pt-[80px]">
          <div className="mb-4 flex flex-col px-6">
            <div className="flex-grow text-left">
              {/*<Button*/}
              {/*  className="font-semibold bg-[rgba(7,103,273,1)] text-white text-[14px] px-[16px] py-[4px] md:text-[16px] rounded-lg pointer-events-none cursor-default transition duration-300">*/}
              {/*  {t('titleDescription')}*/}
              {/*</Button>*/}
            </div>
            <h1 className="text-4xl  md:text-7xl font-extrabold text-blue-600 mx-auto my-2">
              {t('titleMain')}
            </h1>
            <div className="flex-grow text-right">
              <p className="text-[14px] w-[228px] md:text-[16px] md:w-[400px] font-semibold ml-auto">
                {`${t('titleSub')} 🎆`}
              </p>
            </div>
          </div>
          <div className="flex justify-center">
            <Image
              src="/images/robot-person.png"
              priority
              width={719}
              height={479}
              alt="AI and Human"
              className="w-[632px] h-[241px] md:w-[719px] md:h-[479px]"
            />
          </div>
        </div>
        <Fireworks />
      </section>
    </BlurFade>
  );
};

export default Banner;
