import React from 'react';

const Banner = () => {
  return (<section className="relative h-[809px] bg-cover bg-center"
                   style={{ backgroundImage: 'url(src/app/assets/images/banner.png)' }}>
    <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white">
      <div className="mb-4">
        <span className="block text-sm font-medium text-blue-400">Artificial People Intelligence</span>
        <h1 className="text-4xl font-bold">API SOFTWARE</h1>
        <p className="mt-2 text-lg">Building solutions and projects for your business</p>
      </div>
      <div className="flex justify-center">
        <img src="/images/your-image.png" alt="AI and Human" className="max-w-full h-auto" />
      </div>
    </div>
  </section>);
};

export default Banner;
