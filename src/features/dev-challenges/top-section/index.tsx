'use client';

import React from 'react';

export function TopSection() {
  return (
    <div className='flex flex-col pt-[31px] pb-[23px] mt-[112px] relative w-full min-h-[200px] overflow-hidden rounded-2xl md:pt-[39px] md:pb-[25px] md:pl-[41px]'>
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="https://res.cloudinary.com/dlinprg6k/image/upload/v1728435557/image_7_yrxgwt.png"
          alt="Background"
          className="w-full h-full object-cover"
        />
        {/* Overlay gradient or darkening layer */}
        <div className="absolute inset-0 bg-[radial-gradient(50%_50%_at_50%_50%,rgba(20,18,24,0)_20%,#141218_100%)]" />
      </div>

        <div className='flex relative z-4 md:items-start md:justify-start items-center justify-center flex-col gap-2'>
          <div className='flex text-center md:text-left text-white font-roboto md:text-[35px] text-[28px] font-bold md:w-[50%] w-full'>
            Test your technical skills as a developer or a designer
          </div>
          <div className='flex text-[#C7C7CC] font-[400] text-[14px] md:text-[16px]'>
            Let’s get into it today and earn more incentives...
          </div>
        </div>
              
    </div>
    
  );
}
