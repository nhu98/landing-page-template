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

  return (<section className="py-[100px] px-[120px] bg-white">
    <div className="text-center mb-12">
      <h2 className="text-3xl font-bold text-gray-900 mb-4">
        Một số lĩnh vực thế mạnh của chúng tôi
      </h2>
      <p className="text-gray-600">
        Và còn hơn thế nữa, những dự án của bạn và chúng tôi, chỉ cần liên hệ với chúng tôi.<br />
        Hoặc bạn cần sự bảo mật và tiện lợi, nhân viên của chúng tôi sẽ làm việc tại công ty của các bạn.
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {items.map((item, index) => (<div key={index} className="relative overflow-hidden rounded-lg shadow-md group">
        <Image src={item.image} alt={item.title} layout="responsive" width={378} height={269} />
        <div
          className="absolute inset-0 flex justify-center items-end">
          <h3 className="text-white text-[16px] font-bold text-center">{item.title}</h3>
        </div>
      </div>))}
    </div>
  </section>);
};

export default Fields;
