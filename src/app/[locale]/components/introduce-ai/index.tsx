import React from 'react';
import Image from 'next/image';
import ArrowRightUp from '../icons/arrow-right-up';
import { Button } from '../../../../components/ui/button';

const IntroduceAI = () => {
  return (<section id="mission"
                   className="flex flex-col items-center justify-between py-[65px] px-[16px] md:flex-row md:py-[100px] md:px-[120px] bg-white font-inter">
    <div className="md:w-1/2 mb-8 text-center md:text-left md:mb-0 md:mr-[100px]">
      <h2 className="text-xl font-bold mb-6 md:text-3xl md:mb-8">
        Sự kết hợp hiệu quả giữa AI và Con Người
      </h2>
      <p className="text-base font-normal text-[rgba(54,54,54,1)] mb-6 md:mb-8">
        Có thể nói gần đây AI đã tác động không ít đến công nghiệp phần mềm, chúng tôi nghĩ rằng AI và con người nên
        hợp
        tác hiệu quả thay vì loại trừ lẫn nhau và đó cũng là phương châm của API Software.
      </p>
      <Button
        className="text-base font-semibold bg-[rgba(7,103,273,1)] text-white px-[16px] py-[14px] rounded-lg hover:bg-blue-700 transition duration-300">CONTACT
        US
        <ArrowRightUp stroke="#FFFFFF" className="ml-1" /></Button>
    </div>

    <div className="md:w-1/2 flex items-center justify-center">
      <Image src="/images/introduce-ai.png" width={585} height={788} alt={'introduce-ai'} />
    </div>
  </section>);
};

export default IntroduceAI;
