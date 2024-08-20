import React from 'react';
import Image from 'next/image';
import Marquee from '../../../../components/magicui/marquee';

const TrustedLogos = () => {
  const logos = [{
    src: '/images/google.png',
    width: 171,
    height: 60,
    alt: 'Google',
    className: 'w-[68px] h-[24px] md:w-[171px] md:h-[60px]'
  }, {
    src: '/images/intuit.png',
    width: 206,
    height: 60,
    alt: 'Intuit',
    className: 'w-[116px] h-[24px] md:w-[206px] md:h-[60px]'
  }, {
    src: '/images/zalo-pay.png',
    width: 183,
    height: 60,
    alt: 'ZaloPay',
    className: 'w-[93px] h-[24px] md:w-[183px] md:h-[60px]'
  }, {
    src: '/images/indeed.png',
    width: 168,
    height: 60,
    alt: 'Indeed',
    className: 'w-[93px] h-[24px] md:w-[168px] md:h-[60px]'
  }, {
    src: '/images/one-mount.png',
    width: 168,
    height: 60,
    alt: 'One Mount',
    className: 'w-[93px] h-[24px] md:w-[168px] md:h-[60px]'
  }];

  const logosRow = logos.slice(0, logos.length / 2);

  return (<section className="py-[32px] px-[16px] md:py-[60px] bg-gray-100 font-inter">
    <div className="max-w-[1200px] mx-auto flex items-center space-x-6 md:space-x-32 overflow-hidden">
      <span className="text-base font-bold whitespace-nowrap">Trusted By</span>
      <div className="flex flex-nowrap items-center">
        <Marquee pauseOnHover className="[--duration:20s] [--gap:2.5rem]">
          {logos.map((image) => (<div key={image.src}>
            <Image src={image.src} width={image.width} height={image.height} alt={image.alt}
                   className={image.className} />
          </div>))}
        </Marquee>
      </div>
    </div>
  </section>);
};

export default TrustedLogos;
