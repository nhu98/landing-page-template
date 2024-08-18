import React from 'react';

const Footer = () => {
  return (<footer className="bg-gray-100">
    <div
      className="flex flex-col items-center justify-between px-[16px] py-[24px] md:flex-row md:px-[100px] md:py-[100px] font-inter">
      {/* Left Section: Text */}
      <div className="text-3xl md:text-6xl font-black text-blue-600 mb-10 md:mb-0">
        <p>LET'S WORK</p>
        <p>TOGETHER!!!</p>
      </div>

      {/* Right Section: Contact Info */}
      <div className="text-gray-800 flex flex-col gap-6 text-base">
        <div>
          <p className="font-bold">Address</p>
          <p className="font-medium text-[rgba(152,152,152,1)]">297 Cong Hoa, Ward 13, Tan Binh District, HCMC</p>
        </div>

        <div className="flex flex-col gap-6 md:flex-row md:gap-5">
          <div className="">
            <p className="font-bold">Phone</p>
            <p className="font-medium text-[rgba(152,152,152,1)]">08 4310 4510</p>
          </div>
          <div className="">
            <p className="font-bold">Email</p>
            <p className="font-medium text-[rgba(152,152,152,1)]">info@apisoftware.net</p>
          </div>

          <div className="">
            <p className="font-bold">Website</p>
            <a href="https://apisoftware.net" className="font-medium text-[rgba(0,122,255,1)] underline">
              apisoftware.net
            </a>
          </div>
        </div>
      </div>
    </div>

    {/* Footer Bottom */}
    <div
      className="text-center border-t border-[rgba(230, 230, 230, 1)] w-full px-[24px] py-[10px] bg-white text-[rgba(152,152,152,1)] font-normal text-base">
      © 2024 apisoftware. , All rights reserved
    </div>
  </footer>);
};

export default Footer;

