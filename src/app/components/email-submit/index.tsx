import React from 'react';
import Image from 'next/image';
import { Button } from '../../../components/ui/button';

const EmailSubmit = () => {
  return (<section className=" relative h-[518px]">
    <Image src="/images/email-submit-bg.png" fill alt={'banner'} className="object-cover" />
    <div className="absolute inset-0 flex flex-col items-center  text-center justify-center">
      <div className="flex flex-col">
        <h2 className="text-7xl font-bold text-white mx-auto mb-[32px]">
          Chúng tôi rất hoan nghênh sự đầu tư của bạn
        </h2>
        <p className="text-[16px] text-white mb-[32px]">
          Chúng tôi rất hoan nghênh sự đầu tư của bạn. Hãy thành công cùng nhau.
        </p>
        <div>
          <Button
            className="font-medium bg-[rgba(7,103,273,1)] text-white text-[16px] px-[16px] py-[4px] rounded-lg hover:bg-blue-700 transition duration-300">Artificial
            People
            Intelligence</Button>
        </div>
      </div>
    </div>
  </section>);
};

export default EmailSubmit;
