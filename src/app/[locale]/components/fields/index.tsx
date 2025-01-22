'use client';
import React, {useEffect, useState} from 'react';
import Image from 'next/image';
import BlurFade from '../../../../components/magicui/blur-fade';
import {useTranslations} from 'next-intl';
import ArrowRightUp from '../icons/arrow-right-up';
import {Button} from '../../../../components/ui/button';

const Fields = () => {
  const t = useTranslations('HomePage');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [imageLoaded, setImageLoaded] = useState(false);

  const items = [
    {title: t('dataAnalyst'), image: '/images/field-one.png'},
    {title: t('management'), image: '/images/field-two.png'},
    {title: t('banking'), image: '/images/field-three.png'},
    {title: t('integration'), image: '/images/field-four.png'},
    {title: t('webThree'), image: '/images/field-five.png'},
    {title: t('biometrics'), image: '/images/field-six.png'},
    {title: t('ecommerce'), image: '/images/field-seven.png'},
    {title: t('locationTracking'), image: '/images/field-eight.png'},
    {title: t('booking'), image: '/images/field-nine.png'},
  ];

  useEffect(() => {
    // Reset imageLoaded về false mỗi khi selectedImage thay đổi
    setImageLoaded(false);
  }, [selectedImage]);

  return (
    <section
      id="fields"
      className="py-[32px] px-[16px] bg-white font-inter max-w-[1200px] mx-auto scroll-mt-[calc(80px)] md:py-[80px]">
      <div className="flex flex-col md:flex-row max-w-7xl mx-auto p-4 gap-8"></div>

      <div className="text-center mb-6 md:mb-8">
        <h2 className="text-xl font-bold mb-6 md:text-3xl md:mb-8">
          {t('someOfOurStrengthsTitle')}
        </h2>
        <p className="text-base font-normal text-[rgba(54,54,54,1)]">
          {t('someOfOurStrengthsDescription')}
        </p>
        <p className="text-base font-normal text-[rgba(54,54,54,1)]">
          {t('needSecurity')}
        </p>
        <Button
          className="text-base font-semibold bg-[rgba(7,103,273,1)] text-white px-[16px] py-[14px] rounded-lg hover:bg-blue-700 transition duration-300 mt-6 md:mt-8"
          onClick={() =>
            document
              .getElementById('address')
              ?.scrollIntoView({behavior: 'smooth'})
          }>
          {t('contactUs')}
          <ArrowRightUp stroke="#FFFFFF" className="ml-1" />
        </Button>
      </div>

      <div className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-8">
        {items.map((item, index) => (
          <div
            key={index}
            onClick={() => setSelectedImage(item.image)}
            className="relative rounded-lg group cursor-pointer">
            <BlurFade key={item.image} delay={0.25 + index * 0.05} inView>
              <Image
                src={item.image}
                alt={item.title}
                width={378}
                height={269}
                className="w-auto h-auto md:w-96 md:h-64 transition-transform duration-500 transform group-hover:scale-110 cursor-pointer"
              />
              <div className="absolute inset-0 flex justify-center items-end">
                <h3 className="text-white text-base font-bold text-center cursor-pointer">
                  {item.title}
                </h3>
              </div>
            </BlurFade>
          </div>
        ))}
      </div>

      {/* Modal hiển thị ảnh phóng to */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
          onClick={() => setSelectedImage(null)}>
          <div
            className="relative bg-white rounded-lg p-4"
            onClick={e => e.stopPropagation()}>
            {!imageLoaded && ( // Show loading indicator if image is NOT loaded
              <div className="absolute inset-0 flex justify-center items-center bg-gray-100 animate-pulse">
                {/* Added background for better visibility */}
                <svg
                  className="animate-spin h-6 w-6 text-blue-500"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24">
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
              </div>
            )}
            <Image
              src={selectedImage}
              alt="Selected"
              width={800}
              height={600}
              className={`w-auto h-auto rounded-lg`}
              onLoad={() => setImageLoaded(true)}
            />
            {imageLoaded && (
              <button
                className="absolute top-4 right-4 text-white p-2 rounded-full"
                onClick={() => setSelectedImage(null)}>
                ✕
              </button>
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default Fields;
