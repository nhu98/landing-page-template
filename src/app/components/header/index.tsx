import React from 'react';
import { Button } from 'src/components/ui/button';
import Image from 'next/image';
import arrow from 'src/app/assets/icons/arrow-up-right.png';
import flagVi from 'src/app/assets/icons/flag-vn.png';


const Header = () => {
  return (<header className="px-[40px] py-[16px] flex justify-between items-center">
    {/* Logo Section */}
    <div className="flex items-center gap-[10px] w-auto h-auto">
      <div className="text-[29px]">API Software</div>
    </div>

    {/* Navigation Section*/}
    <div className="flex items-center gap-[16px] w-auto h-[52px]">
      <Button variant="ghost" className="h-full text-[16px] p-[16px] rounded-lg">Về Chúng Tôi</Button>
      <Button variant="ghost" className="h-full text-[16px] p-[16px] rounded-lg">Sứ Mệnh</Button>
      <Button variant="ghost" className="h-full text-[16px] p-[16px] rounded-lg">Lĩnh Vực</Button>
      <Button variant="ghost" className="h-full text-[16px] p-[16px] rounded-lg"><Image
        className="mr-1"
        width={16} height={16}
        src={flagVi} alt="arrow-right" />VIE</Button>
      <Button variant="outline" className="h-full p-[14px] rounded-lg border-[rgba(17,129,247,1)]">CONTACT US <Image
        width={24} height={24}
        src={arrow} alt="arrow-right" /></Button>
    </div>
  </header>);
};

export default Header;

