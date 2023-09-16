import React from "react";
import Image from "next/image";
import Image1 from "/public/images/IMG1.png";

export const Hero1 = () => {
  return (
    <div>
      <div className="flex flex-row ">
        <div className="flex flex-col basis-1/2 pt-44">
          <div className=" pl-24 text-4xl font-bold pr-20">
            Cleaner and Sustainable Future For Oceans and the Planet
          </div>
          <div className=" pl-24 pr-20 pt-2 font-light text-lg">
            We use blockchain to promote ocean conservation, incentivize
            positive actions, and reward contributions. Our diverse team
            develops innovative solutions through data collection, cleanup
            events, and an in-app store, aimed at a cleaner future.
          </div>
          <div className="pl-24 pt-8">
            <button className="bg-[#0E6FFF] text-white w-40   h-12 rounded-md">
              View Whitepaper{" "}
            </button>
          </div>
        </div>
        <div className="basis-1/2">
          <Image src={Image1} width={960} height={300} alt="" />
        </div>
      </div>
    </div>
  );
};
