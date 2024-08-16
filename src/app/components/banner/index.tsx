import React from 'react';
import Image from 'next/image';
import { Button } from '../../../components/ui/button';


const Banner = () => {
  return (<section className=" relative h-[809px]">
    <Image src="/images/banner.png" fill alt={'banner'} className="object-cover" />
    <div className="absolute inset-0 flex flex-col items-center  text-center justify-between pt-[120px]">
      <div className="mb-4 flex flex-col">
        <div className="flex-grow text-left">
          <Button
            className="font-medium bg-[rgba(7,103,273,1)] text-white text-[16px] px-[16px] py-[4px] rounded-lg hover:bg-blue-700 transition duration-300">Artificial
            People
            Intelligence</Button>
        </div>
        <h1 className="text-7xl font-bold text-blue-600 mx-auto my-2">
          API SOFTWARE
        </h1>
        <p className="text-[16px] flex-grow text-right">
          Building solutions and projects for your business
        </p>
      </div>
      <div className="flex justify-center">
        <Image src="/images/robot-person.png" width={719} height={479} alt="AI and Human"
               className="max-w-full h-auto" />
      </div>
    </div>
  </section>);
};

export default Banner;
