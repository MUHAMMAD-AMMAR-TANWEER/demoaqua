import Image from "next/image";
import React from "react";
import image1 from "/public/Images/team1.png";

const TeamCard = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="w-[260px] h-[320px] mb-3 rounded-xl">
        <Image src={image1} alt="image" className="w-full h-full rounded-xl object-cover"/>
      </div>
      <p className="font-bold text-[18px]">John Doe</p>
      <p className="font-medium text-[18px]">Executive Director</p>
    </div>
  );
};

export default TeamCard;
