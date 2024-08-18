import React from 'react';
import Image from 'next/image';

const Address = () => {
  return (<section
    className="relative bg-white h-[708px] py-[56px] px-[16px] md:py-[100px] md:px-[120px] font-inter">
    <Image
      src="/images/address-bg.png"
      alt="Background"
      fill
      className="object-fill md:object-contain"
    />
    <div
      className="absolute inset-0 flex flex-col md:flex-row items-center justify-between py-[100px] px-[30px] md:py-[100px] md:px-[120px]">
      <div>
        <h2 className="text-2xl font-bold text-white mb-2">{`{API SOFTWARE}`}</h2>
        <p className="text-base font-medium text-[rgba(255,255,255,1)] mb-4">Artificial People Intelligence</p>
        <p className="text-base font-medium text-[rgba(26,255,91,1)]">
          */Address: 197 Cong Hoa, Ward 13, Tan Binh District?/*
        </p>
        <p className="text-base font-medium text-[rgba(26,255,91,1)]">
          */Email: info@apisoftware.net | Phone: +848 4310 4510/*
        </p>
      </div>
      <div>
        <Image
          src="/images/infor-right.png"
          alt="Background"
          width={327}
          height={327}
          className="object-contain w-[300px] h-[300px] md:w-[327px] md:h-[327px]"
        />
      </div>
    </div>
  </section>);
};

export default Address;
