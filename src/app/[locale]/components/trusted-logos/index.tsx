import React from 'react';
import Image from 'next/image';

const TrustedLogos = () => {
  return (<section className="py-[56px] px-[16px] md:py-[60px] md:px-[120px] bg-gray-100 font-inter">
    <div className="max-w-6xl mx-auto flex items-center space-x-6 overflow-hidden">
      <span className="text-base font-bold whitespace-nowrap">Trusted By</span>
      <div className="flex flex-nowrap items-center space-x-6">
        <Image src="/images/google.png" width={171} height={60} alt="Google"
               className="w-[68px] h-[24px] md:w-[171px] md:h-[60px]" />
        <Image src="/images/intuit.png" width={206} height={60} alt="Intuit"
               className="w-[116px] h-[24px] md:w-[206px] md:h-[60px]" />
        <Image src="/images/zalo-pay.png" width={183} height={60} alt="ZaloPay"
               className="w-[93px] h-[24px] md:w-[183px] md:h-[60px]" />
        <Image src="/images/indeed.png" width={168} height={60} alt="Indeed"
               className="w-[93px] h-[24px] md:w-[168px] md:h-[60px]" />
        <Image src="/images/one-mount.png" width={168} height={60} alt="One Mount"
               className="w-[93px] h-[24px] md:w-[168px] md:h-[60px]" />
      </div>
    </div>
  </section>);
};

export default TrustedLogos;
