import React from 'react';
import Image from 'next/image';
import { AspectRatio } from '../../../components/ui/aspect-ratio';

const Address = () => {
  return (<section className="bg-white p-[120px]">
    <div className="max-w-6xl mx-auto mt-8">
      <AspectRatio ratio={16 / 9}>
        <Image src="/images/address-bg.png" fill alt="Address background Image"
               className="w-full h-auto object-cover" />
      </AspectRatio>
    </div>
  </section>);
};

export default Address;
