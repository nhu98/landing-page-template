import React from 'react';
import { Button } from '../../../components/ui/button';
import ArrowRightUp from '../icons/arrow-right-up';
import Image from 'next/image';

const UsCombineAi = () => {
  return (<section className="flex flex-col md:flex-row items-center justify-between py-[100px] px-[120px] bg-white">
    <div className="md:w-1/2 flex items-center justify-center mb-8 md:mb-0 mr-[100px]">
      <Image src="/images/combine-ai.png" width={587} height={750} alt={'introduce-ai'} />
    </div>

    <div className="md:w-1/2">
      <h2 className="text-3xl font-bold text-gray-900 mb-4">
        Chúng tôi kết hợp như thế nào
      </h2>
      <p className="text-gray-600 mb-8">
        Chúng tôi không tương tác với AI theo cách những người dùng phổ thông thường làm, chúng tôi làm việc với các nhà
        cung cấp AI để tích hợp AI vào các công cụ phát triển của chúng tôi, qua quá trình làm việc với Developer thường
        xuyên, AI sẽ nắm bắt được style của Developer, style của các loại dự án, style của công ty để đưa ra sự hỗ trợ
        chính xác, hiệu quả và tối ưu.
      </p>
      <Button
        className="font-medium bg-[rgba(7,103,273,1)] text-white text-[16px] px-[16px] py-[14px] rounded-lg hover:bg-blue-700 transition duration-300">CONTACT
        US
        <ArrowRightUp stroke="#FFFFFF" className="ml-1" /></Button>
    </div>
  </section>);
};

export default UsCombineAi;
