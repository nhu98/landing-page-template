import React from 'react';
import Image from 'next/image';
import banner from 'src/app/assets/images/banner.png';
import robot from 'src/app/assets/images/robot-person.png';


const Banner = () => {
  return (<section className=" relative h-[809px]">
    <Image src={banner} fill alt={'banner'} className="object-cover" />
    <div className="absolute inset-0 flex flex-col items-center  text-center justify-between pt-[120px]">
      <div className="mb-4 flex flex-col">
          <span className="text-sm font-medium text-blue-400 flex-grow text-left">
            Artificial People Intelligence
          </span>
        <h1 className="text-7xl font-bold text-blue-600 mx-auto">
          API SOFTWARE
        </h1>
        <p className="text-[16px] flex-grow text-right">
          Building solutions and projects for your business
        </p>
      </div>
      <div className="flex justify-center">
        <Image src={robot} alt="AI and Human" className="max-w-full h-auto" />
      </div>
    </div>
  </section>);
};

export default Banner;
