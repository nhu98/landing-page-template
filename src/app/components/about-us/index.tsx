import React from 'react';
import Image from 'next/image';
import { AspectRatio } from '../../../components/ui/aspect-ratio';
import ArrowRightUp from '../icons/arrow-right-up';
import { Button } from '../../../components/ui/button';

const AboutUs = () => {
  return (<section className="bg-white p-[120px]">
    <div className="max-w-6xl mx-auto text-center">
      <h2 className="text-5xl font-bold text-gray-900 mb-8">Về chúng tôi</h2>
      <p className="text-gray-600 mb-8">
        Chúng tôi tập hợp những thành viên giỏi, có nhiều kinh nghiệm trong việc xây dựng các giải pháp, dự án cho doanh
        nghiệp với sự kết hợp hiệu quả giữa AI và Con Người, chúng tôi luôn tìm cách cải tiến quy trình làm việc để bắt
        kịp xu hướng của thời đại mới
      </p>
      <Button
        className="font-medium bg-[rgba(7,103,273,1)] text-white text-[16px] px-[16px] py-[14px] rounded-lg hover:bg-blue-700 transition duration-300">CONTACT
        US
        <ArrowRightUp stroke="#FFFFFF" className="ml-1" /></Button>

    </div>
    <div className="max-w-6xl mx-auto mt-8">
      <AspectRatio ratio={16 / 9} className="bg-muted">
        <Image src="/images/about-us.jpeg" fill alt="Team Image"
               className="rounded-lg shadow-lg w-full h-auto object-cover" />
      </AspectRatio>
    </div>
  </section>);
};

export default AboutUs;
