import React from 'react';
import Image from 'next/image';
import ArrowRightUp from '../icons/arrow-right-up';
import { Button } from '../../../components/ui/button';

const IntroduceAI = () => {
  return (<section className="flex flex-col md:flex-row items-center justify-between py-[100px] px-[120px] bg-white">
    <div className="md:w-1/2 mb-8 md:mb-0 mr-[100px]">
      <h2 className="text-3xl font-bold text-gray-900 mb-4">
        Sự kết hợp hiệu quả giữa AI và Con Người
      </h2>
      <p className="text-gray-600 mb-8">
        Có thể nói gần đây AI đã tác động không ít đến công nghiệp phần mềm, chúng tôi nghĩ rằng AI và con người nên
        hợp
        tác hiệu quả thay vì loại trừ lẫn nhau và đó cũng là phương châm của API Software.
      </p>
      <Button
        className="font-medium bg-[rgba(7,103,273,1)] text-white text-[16px] px-[16px] py-[14px] rounded-lg hover:bg-blue-700 transition duration-300">CONTACT
        US
        <ArrowRightUp stroke="#FFFFFF" className="ml-1" /></Button>
    </div>

    <div className="md:w-1/2 flex items-center justify-center">
      <Image src="/images/introduce-ai.png" width={585} height={788} alt={'introduce-ai'} />
    </div>
  </section>);
};

export default IntroduceAI;
