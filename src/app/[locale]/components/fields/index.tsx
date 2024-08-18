import React from 'react';
import Image from 'next/image';

const Fields = () => {
  const items = [{ title: 'Data Analyst', image: '/images/field-one.png' }, {
    title: 'Management: CRM, HRM, ERP', image: '/images/field-two.png'
  }, {
    title: 'Banking / Finance', image: '/images/field-three.png'
  }, {
    title: 'Integration: Call Center, Video Call, Chatbot', image: '/images/field-four.png'
  }, { title: 'Web3: Mini Game, Trading', image: '/images/field-five.png' }, {
    title: 'Biometrics: Face, Voice, Finger', image: '/images/field-six.png'
  }, {
    title: 'Ecommerce: B2B, B2C', image: '/images/field-seven.png'
  }, {
    title: 'Location Tracking: Logistics, Car Booking', image: '/images/field-eight.png'
  }, { title: 'Booking: Home, Car, Plane, Travel, Service', image: '/images/field-nine.png' }];

  return (<section id="fields" className="py-[65px] px-[16px] md:py-[100px] md:px-[120px] bg-white font-inter">
    <div className="text-center mb-6 md:mb-8">
      <h2 className="text-xl font-bold mb-6 md:text-3xl md:mb-8">
        Một số lĩnh vực thế mạnh của chúng tôi
      </h2>
      <p className="text-base font-normal text-[rgba(54,54,54,1)]">
        Và còn hơn thế nữa, những dự án của bạn và chúng tôi, chỉ cần liên hệ với chúng tôi.<br />
        Hoặc bạn cần sự bảo mật và tiện lợi, nhân viên của chúng tôi sẽ làm việc tại công ty của các bạn.
      </p>
    </div>

    <div className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-8">
      {items.map((item, index) => (<div key={index} className="relative overflow-hidden rounded-lg shadow-md group">
        <Image src={item.image} alt={item.title} width={378} height={269}
               className="w-[165px] h-[214px] md:w-[378px] md:h-[269px]" />
        <div
          className="absolute inset-0 flex justify-center items-end">
          <h3 className="text-white text-base font-bold text-center">{item.title}</h3>
        </div>
      </div>))}
    </div>
  </section>);
};

export default Fields;
