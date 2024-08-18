import React from 'react';
import { Button } from '../../../../components/ui/button';
import ArrowRightUp from '../icons/arrow-right-up';
import Image from 'next/image';

const UsCombineAi = () => {
  return (<section
    className="flex flex-col-reverse py-[56px] px-[16px] md:flex-row md:py-[100px] md:px-[120px] items-center justify-between bg-white font-inter">
    <div className="flex justify-center items-center mb-8 md:w-1/2 md:mb-0 md:mr-[100px]">
      <Image src="/images/combine-ai.png" width={587} height={750} alt={'introduce-ai'} />
    </div>

    <div className="text-center mb-8 md:mb-0 md:text-left md:w-1/2">
      <h2 className="text-xl font-bold mb-6 md:text-3xl md:mb-8">
        Chúng tôi kết hợp như thế nào
      </h2>
      <p className="text-base font-normal text-[rgba(54,54,54,1)] mb-6 md:mb-8">
        Chúng tôi không tương tác với AI theo cách những người dùng phổ thông thường làm, chúng tôi làm việc với các nhà
        cung cấp AI để tích hợp AI vào các công cụ phát triển của chúng tôi, qua quá trình làm việc với Developer thường
        xuyên, AI sẽ nắm bắt được style của Developer, style của các loại dự án, style của công ty để đưa ra sự hỗ trợ
        chính xác, hiệu quả và tối ưu.
      </p>
      <Button
        className="text-base font-semibold bg-[rgba(7,103,273,1)] text-white px-[16px] py-[14px] rounded-lg hover:bg-blue-700 transition duration-300">CONTACT
        US
        <ArrowRightUp stroke="#FFFFFF" className="ml-1" /></Button>
    </div>
  </section>);
};

export default UsCombineAi;
