import React from 'react';
import { Button } from 'src/components/ui/button';
import ViFlag from '../icons/vi-flag';
import ArrowRightUp from '../icons/arrow-right-up';


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
      <Button variant="ghost" className="h-full text-[16px] p-[16px] rounded-lg"><ViFlag
        className="mr-0.5" />VIE</Button>
      <Button variant="outline" className="h-full p-[14px] rounded-lg border-[rgba(17,129,247,1)]">CONTACT
        US <ArrowRightUp className="ml-1" /></Button>
    </div>
  </header>);
};

export default Header;

