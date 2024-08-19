import React from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

const Address = () => {
  const t = useTranslations('HomePage');


  return (<section id="address"
                   className="relative bg-white h-[708px] py-[56px] px-[16px] md:py-[100px] md:px-[120px] font-inter">
    <Image
      priority
      src="/images/address-bg.png"
      alt="Address Background"
      fill
      className="object-fill md:object-contain"
    />
    <div
      className="absolute inset-0 flex flex-col md:flex-row items-center justify-between py-[100px] px-[30px] md:py-[100px] md:px-[120px]">
      <div>
        <h2 className="text-2xl font-bold text-white mb-2">{`{${t('apiSoftware')}}`}</h2>
        <p className="text-base font-medium text-[rgba(255,255,255,1)] mb-4">{t('titleDescription')}</p>
        <p className="text-base font-medium text-[rgba(26,255,91,1)]">
          {`*/${t('addressTitle')}: ${t('address')}/*`}
        </p>
        <p className="text-base font-medium text-[rgba(26,255,91,1)]">
          {`*/${t('emailTitle')}: ${t('email')} | ${t('phoneTitle')}: +848 4310 4510/*`}
        </p>
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
