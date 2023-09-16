import Image from "next/image";
import React from "react";
import Logo from "/public/Images/IMG4.png";
export const Header = () => {
  return (
    <div>
      <div className="flex flex-row bg-ablue w-full h-52 gap-x-10">
        <div className="basis-1/4 pt-16 pl-20">
          <Image src={Logo} alt="logo" width={273} height={79} />
        </div>
        <div className="basis-3/4 pt-20 ">
          <div className="flex flex-row">
            <button className="basis-1/12 text-white text-lg">Home</button>
            <button className="basis-1/12 text-white text-lg">Clean-ups</button>
            <button className="basis-1/12 text-white text-lg">Mints</button>
            <button className="basis-1/12 text-white text-lg">Gallery </button>
            <button className="basis-1/12 text-white text-lg">Team</button>
            <button className="w-24 h-12 basis-1/12 bg-white rounded-md text-ablue font-bold text-lg">
              Donate
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
