import React from 'react';

const Footer = () => {
  return (<footer className="bg-gray-100">
    <div className="flex justify-between items-center px-[120px] py-[100px]">
      {/* Left Section: Text */}
      <div className="text-6xl font-bold text-blue-600">
        <p>LET'S WORK</p>
        <p>TOGETHER!!!</p>
      </div>

      {/* Right Section: Contact Info */}
      <div className="text-gray-800 flex flex-col gap-6 text-[16px]">
        <div>
          <p className="font-semibold">Address</p>
          <p className="text-gray-500">297 Cong Hoa, Ward 13, Tan Binh District, HCMC</p>
        </div>

        <div className="flex gap-5">
          <div className="">
            <p className="font-semibold">Phone</p>
            <p className=" text-gray-500">08 4310 4510</p>
          </div>
          <div className="">
            <p className="font-semibold">Email</p>
            <p className=" text-gray-500">info@apisoftware.net</p>
          </div>

          <div className="">
            <p className="font-semibold">Website</p>
            <a href="https://apisoftware.net" className="text-blue-600">
              apisoftware.net
            </a>
          </div>
        </div>
      </div>
    </div>

    {/* Footer Bottom */}
    <div
      className="text-center border-t border-[rgba(230, 230, 230, 1)] w-full px-[24px] py-[10px] bg-white text-gray-500 text-[16px]">
      © 2024 apisoftware. , All rights reserved
    </div>
  </footer>);
};

export default Footer;

