import React from "react";
import Image from "next/image";
import Image2 from "/public/Images/IMG2.png";
import Image3 from "/public/Images/IMG3.png";

export const Hero2 = () => {
  return (
    <div>
      <div className="flex flex-row">
        <div className="flex flex-col basis-1/2 ">
          <Image src={Image2} alt="Image 2" width={960} height={540} />
        </div>
        <div className="flex flex-col basis-1/2 bg-blue-300">
          <h1 className="pt-40 pl-20 font-bold text-3xl">Our Mission</h1>
          <p className=" pl-20 pt-4 pr-10">
            Combat Ocean pollution by incentivizing positive action and
            providing a platform for community-driven solutions.
          </p>
          <p className="text-[#0E6FFF] underline underline-offset-1 pl-20 pt-6">
            Learn More
          </p>
        </div>
      </div>
      <div className="flex flex-row">
        <div className="flex flex-col basis-1/2 bg-blue-300">
          <h1 className="pt-40 pl-20 font-bold text-3xl">Our Vision</h1>
          <p className=" pl-20 pt-4 pr-10">
            We aim to create a sustainable solution that encourages individuals
            to take action towards a cleaner ocean, while also providing
            benefits and rewards for their efforts.
          </p>
          <p className="text-[#0E6FFF] underline underline-offset-1 pl-20 pt-6">
            Learn More
          </p>
        </div>
        <div className="flex flex-col basis-1/2 ">
          <Image src={Image3} alt="Image 3" width={960} height={540} />
        </div>
      </div>
    </div>
  );
};
