import React, {useRef, useState} from 'react';
import Image from 'next/image';

export interface Image {
  title: string;
  image: string;
}

export interface SliderProps {
  images: Image[];
}

const Slider = ({images}: SliderProps) => {
  const [currentIndex, setCurrentIndex] = useState(0); // Vị trí hiện tại của slider
  const sliderRef = useRef<HTMLDivElement>(null);
  const [touchStart, setTouchStart] = useState(0); // Lưu tọa độ khi bắt đầu vuốt

  // Số lượng hình trong một nhóm (mặc định: 3 hình ở màn nhỏ, 2 hình ở màn md:)
  const slidesPerGroup =
    typeof window !== 'undefined' && window.innerWidth >= 768 ? 2 : 3;

  const scrollToIndex = (index: number) => {
    if (sliderRef.current) {
      const sliderWidth = sliderRef.current.offsetWidth / slidesPerGroup; // Kích thước nhóm
      sliderRef.current.scrollTo({
        left: sliderWidth * index,
        behavior: 'smooth',
      });
      setCurrentIndex(index);
    }
  };

  const handleNext = () => {
    if (currentIndex < Math.ceil(images.length / slidesPerGroup) - 1) {
      scrollToIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      scrollToIndex(currentIndex - 1);
    }
  };

  // Vuốt sang trái/phải
  const handleTouchStart = (e: any) => {
    setTouchStart(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: any) => {
    const touchEnd = e.changedTouches[0].clientX;
    if (touchStart - touchEnd > 50) {
      handleNext(); // Vuốt sang trái
    } else if (touchEnd - touchStart > 50) {
      handlePrev(); // Vuốt sang phải
    }
  };

  return (
    <div
      className="relative"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}>
      {/* Slider */}
      <div
        ref={sliderRef}
        className="flex overflow-x-auto snap-x snap-mandatory gap-4 scrollbar-hide">
        {images.map((image, index) => (
          <div
            key={index}
            className={`flex-none w-1/${slidesPerGroup} snap-center`}>
            <div className="relative w-full h-64">
              {/* Sử dụng Image từ next/image */}
              <Image
                src={image.image}
                alt={`Slide ${index}`}
                fill
                className="object-cover rounded-lg"
                sizes={`(max-width: 768px) 33vw, 50vw`}
                priority={index < slidesPerGroup} // Ưu tiên tải hình đầu tiên
              />
            </div>
          </div>
        ))}
      </div>

      {/* Nút điều hướng */}
      <button
        onClick={handlePrev}
        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75"
        disabled={currentIndex === 0}>
        ❮
      </button>
      <button
        onClick={handleNext}
        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75"
        disabled={
          currentIndex === Math.ceil(images.length / slidesPerGroup) - 1
        }>
        ❯
      </button>
    </div>
  );
};

export default Slider;
