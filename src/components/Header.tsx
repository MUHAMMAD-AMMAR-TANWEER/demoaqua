import Image from "next/image";
import React from "react";
import Logo from "/public/Images/IMG4.png";
export const Header = () => {
  return (
      <div className="flex justify-between items-center bg-ablue w-full h-28 px-16 ">
        <div className="">
          <Image src={Logo} alt="logo" width={273} height={79} />
        </div>
        <div className="">
          <div className="flex gap-x-10">
            <button className="hover:text text-white font-semibold text-lg">Home</button>
            <button className="hover:text-slate-300 font-semibold text-white text-lg">Clean-ups</button>
            <button className="hover:text-slate-300 font-semibold text-white text-lg">Mints</button>
            <button className="hover:text-slate-300 font-semibold text-white text-lg">Gallery </button>
            <button className="hover:text-slate-300 font-semibold text-white text-lg">Team</button>
            <button className="py-1 px-4 ml-8 bg-white rounded-md text-ablue font-bold text-lg">
              Donate
            </button>
          </div>
        </div>
      </div>
  );
};
