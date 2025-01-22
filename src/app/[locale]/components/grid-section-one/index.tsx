import React from 'react';
import Image from 'next/image';
import {useTranslations} from 'next-intl';

const GridSectionOne = () => {
  const t = useTranslations('HomePage');

  return (
    <section
      id="grid-section-one"
      className="flex flex-col items-center justify-between pt-8 px-6 bg-white font-inter mx-auto scroll-mt-[calc(50px)] md:flex-row">
      <div
        data-aos="fade-right"
        className="w-full mb-8 text-center md:w-2/5 md:text-left md:mb-0 md:mr-24">
        {/* Text Section */}
        <div className="flex-1 space-y-4">
          <div className="flex items-center">
            <div className="w-24 h-px bg-gray-300"></div>
            {/* Đường kẻ bên trái */}
            <span className="mx-4 text-2xl font-bold uppercase tracking-wide text-center">
              ANOTHER
            </span>
            <div className="w-24 h-px bg-gray-300"></div>
            {/* Đường kẻ bên phải */}
          </div>
          <p className="text-justify">
            Lấy cảm hứng từ sự khởi đầu và hy vọng, từng bộ trang phục mang
            trong mình thông điệp sâu sắc về sự tái sinh và vươn xa. Những gam
            màu mới lạ, hoa 3D, lông vũ, cùng form dáng đa dạng từ ball gown
            lộng lẫy, mermaid dress quyến rũ đến afterparty hiện đại, tất cả đều
            hòa quyện để tạo nên bản giao hưởng của sáng tạo và nghệ thuật.
          </p>
        </div>
      </div>

      <div
        data-aos="fade-left"
        className="w-full flex items-center justify-center">
        {/* Images Section */}
        <div className="flex-1 grid gap-4 md:grid-cols-4">
          <div className="md:row-span-2 md:col-span-2">
            <Image
              src="/images/field-one.png"
              alt="Image 1"
              width={100}
              height={100}
              className="object-cover w-full h-full"
            />
          </div>

          <div className="md:col-span-2">
            <Image
              src="/images/field-two.png"
              alt="Image 2"
              width={100}
              height={100}
              className="object-cover w-full h-full"
            />
          </div>

          <div>
            <Image
              src="/images/field-three.png"
              alt="Image 3"
              width={100}
              height={100}
              className="object-cover w-full h-full"
            />
          </div>
          <div>
            <Image
              src="/images/field-four.png"
              alt="Image 4"
              width={100}
              height={100}
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default GridSectionOne;
