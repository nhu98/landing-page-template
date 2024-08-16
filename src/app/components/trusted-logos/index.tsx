import React from 'react';
import Image from 'next/image';

const TrustedLogos = () => {
  return (<section className="bg-gray-100 py-[60px] px-[120px]">
    <div className="max-w-6xl mx-auto flex items-center space-x-6 overflow-hidden">
      <span className="text-lg font-semibold whitespace-nowrap">Trusted By</span>
      <div className="flex flex-nowrap items-center space-x-6">
        <Image src="/images/google.png" width={171} height={60} alt="Google" />
        <Image src="/images/intuit.png" width={206} height={60} alt="Intuit" />
        <Image src="/images/zalo-pay.png" width={183} height={60} alt="ZaloPay" />
        <Image src="/images/indeed.png" width={168} height={60} alt="Indeed" />
        <Image src="/images/one-mount.png" width={168} height={60} alt="One Mount" />
      </div>
    </div>
  </section>);
};

export default TrustedLogos;
