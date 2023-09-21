import React from "react";
import Image from "next/image";
import Image2 from "/public/Images/IMG2.png";
import Image3 from "/public/Images/IMG3.png";

export const Hero2 = () => {
  return (
    <div>
      {/* First */}
      <div className="grid grid-cols-2">
        <div>
          <Image src={Image2} alt="image" className="w-auto h-full" />
        </div>
        <div className="flex flex-col gap-y-6 py-20 px-20 items-start justify-center bg-blue-200">
          <h1 className="text-[64px] font-bold tracking-[-2.88px] leading-[70px]">Our Mission</h1>
          <p className="text-[28px] leading-[33px] tracking-[-0.28px]">Combat Ocean pollution by incentivizing positive action and providing a platform for community-driven solutions</p>
          <p className="text-[#0E6FFF] underline text-[21px]">Learn more</p>
        </div>
      </div>
      {/* Second */}
      <div className="grid grid-cols-2">
        
        <div className="flex flex-col gap-y-6 py-20 px-20 items-start justify-center bg-blue-200">
          <h1 className="text-[64px] font-bold tracking-[-2.88px] leading-[70px]">Our Vision</h1>
          <p className="text-[28px] leading-[33px] tracking-[-0.28px]">We aim to create a sustainable solution that encourages individuals to take action towards a cleaner ocean, while also providing benefits and rewards for their efforts.</p>
          <p className="text-[#0E6FFF] underline text-[21px]">Learn more</p>
        </div>
        <div>
          <Image src={Image3} alt="image" className="w-auto h-full" />
        </div>
      </div>
    </div>
  );
};
