import React from 'react';
import Image from 'next/image';

const EmailSubmit = () => {
  return (<section className=" relative h-[359px] md:h-[518px] font-inter">
    <Image src="/images/email-submit-bg.png" fill alt={'banner'} className="object-cover" />
    <div className="absolute inset-0 flex flex-col items-center text-center justify-center">
      <div className="flex flex-col w-[343px] md:w-[779px]">
        <h2 className=" font-bold text-white mx-auto text-xl mb-6 md:text-5xl md:mb-8">
          Chúng tôi rất hoan nghênh sự đầu tư của bạn
        </h2>
        <p className="text-[rgba(247,247,247,1)] text-base font-normal mb-[32px]">
          Chúng tôi rất hoan nghênh sự đầu tư của bạn. Hãy thành công cùng nhau.
        </p>
      </div>
    </div>
  </section>);
};

export default EmailSubmit;
