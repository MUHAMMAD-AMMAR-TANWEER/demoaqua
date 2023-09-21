import React from "react";
import Image from "next/image";
import Image1 from "/public/images/IMG1.png";

export const Hero1 = () => {
  return (
    <div>
      <div className="grid grid-cols-2">
        <div className="flex flex-col gap-y-6 py-20 px-20 items-start justify-start">
          <h1 className="text-[64px] font-bold tracking-[-2.88px] leading-[70px]">Cleaner and Sustainable Future For Oceans and the Planet</h1>
          <p className="text-[28px] leading-[33px] tracking-[-0.28px]">We use blockchain to promote ocean conservation, incentivize positive actions, and reward contributions. Our diverse team develops innovative solutions through data collection, cleanup events, and an in-app store, aimed at a cleaner future.</p>
          <button className="px-8 py-4 mt-4 bg-[#0E6FFF] text-white font-bold text-xls rounded-xl outline-none">View Whitepaper</button>
        </div>
        <div>
          <Image src={Image1} alt="image" className="w-full h-full object-cover" />
        </div>
      </div>
    </div>
  );
};
