import React from 'react';
import Image from 'next/image';
import { Button } from '../../../../components/ui/button';


const Banner = () => {
  return (<section
    className={`relative h-[450px] md:h-[820px] font-inter`}>
    <Image src="/images/banner.png" fill sizes={'(max-width: 768px) 100vw, 50vw'} alt={'banner'}
           className="object-cover" />
    <div className="absolute inset-0 flex flex-col items-center  text-center justify-between pt-[40px] md:pt-[80px]">
      <div className="mb-4 flex flex-col">
        <div className="flex-grow text-left">
          <Button
            className="font-semibold bg-[rgba(7,103,273,1)] text-white text-[14px] md:text-[16px] px-[16px] py-[4px] rounded-lg hover:bg-blue-700 transition duration-300">Artificial
            People
            Intelligence</Button>
        </div>
        <h1 className="text-4xl  md:text-7xl font-extrabold text-blue-600 mx-auto my-2">
          API SOFTWARE
        </h1>
        <div className="flex-grow text-right">
          <p className="text-[14px] w-[228px] md:text-[16px] md:w-[400px] font-semibold ml-auto">
            Building solutions and projects for your business
          </p>
        </div>
      </div>
      <div className="flex justify-center">
        <Image src="/images/robot-person.png" priority width={719} height={479} alt="AI and Human"
               className="max-w-full h-auto" />
      </div>
    </div>
  </section>);
};

export default Banner;
