'use client';
import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { TextGenerateEffect } from '../../../../components/ui/text-generate-effect';

const Address = () => {
  const t = useTranslations('HomePage');

  const [isVisible, setIsVisible] = useState(false);
  const h2Ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.unobserve(entry.target);
      }
    }, { threshold: 0.1 });

    if (h2Ref.current) {
      observer.observe(h2Ref.current);
    }

    return () => {
      if (h2Ref.current) {
        observer.unobserve(h2Ref.current);
      }
    };
  }, []);


  return (<section id="address"
                   className="relative py-[32px] px-[16px] md:px-[60px] bg-white font-inter max-w-[1200px] mx-auto">

    <Image
      priority
      src="/images/address-bg.png"
      alt="Address Background"
      width={1200}
      height={447}
      className="object-fill h-[596px] md:h-[447px] md:object-contain"
    />

    <div
      className="absolute inset-0 left-[16px] right-[16px] flex flex-col md:flex-row items-center justify-between py-[100px] px-[30px] md:py-[100px] md:px-[120px]">
      <div ref={h2Ref}>
        {/*<h2 ref={h2Ref} className="text-2xl font-bold text-white mb-2">*/}
        {isVisible && (<>
          <TextGenerateEffect className="text-2xl font-bold" marginClass=" mb-2" words={`{${t('apiSoftware')}}`} />
          <TextGenerateEffect
            className="text-base font-medium dark:text-[rgba(255,255,255,1)] text-[rgba(255,255,255,1)]"
            marginClass=" mb-4"
            duration={2}
            words={t('titleDescription')} />
          <TextGenerateEffect className="text-base font-medium dark:text-[rgba(26,255,91,1)] text-[rgba(26,255,91,1)]"
                              duration={3}
                              words={`${t('addressTitle')}: ${t('address')}`} />
          <TextGenerateEffect className="text-base font-medium dark:text-[rgba(26,255,91,1)] text-[rgba(26,255,91,1)]"
                              duration={4}
                              words={`${t('phoneTitle')}: ${t('phone')}`} />
          <TextGenerateEffect className="text-base font-medium dark:text-[rgba(26,255,91,1)] text-[rgba(26,255,91,1)]"
                              duration={5}
                              words={`${t('emailTitle')}: ${t('email')}`} />
          <TextGenerateEffect className="text-base font-medium dark:text-[rgba(26,255,91,1)] text-[rgba(26,255,91,1)]"
                              duration={6}
                              words={`${t('websiteTitle')}: ${t('website')}`} />


        </>)}
        {/*</h2>*/}
      </div>
      <div>
        <Image
          priority
          src="/images/infor-right.png"
          alt="information"
          width={327}
          height={327}
          className="object-contain w-72 h-72 md:w-80 md:h-80"
        />
      </div>
    </div>

  </section>);
};

export default Address;
