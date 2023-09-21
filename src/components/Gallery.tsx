import Image from "next/image";
import image1 from "/public/Images/bg.png"
import {AiOutlineArrowRight, AiOutlineArrowLeft} from "react-icons/ai"

const Gallery = () => {
  return (
    <div className="flex flex-col items-center mt-16 max-w max-w-screen-xl mx-auto">
      <div className="flex flex-col items-center w-3/5">
        <h1 className="text-[64px] font-bold mb-10">Gallery</h1>
        <p className="text-[24px] text-center leading-[31px] tracking-[-0.48px] ">
          Lorem ipsum dolor sit amet, consectetur adipiscing Ac aliquam ac
          volutpat, viverra magna risus aliquam massa. Ac aliquam ac volutpat,
          viverra magna risus.{" "}
        </p>
        <div className="mt-20">
            <Image src={image1} alt="image" className="w-full h-full object-cover" />
        </div>
        <div className="flex items-center justify-center mt-2 mb-20 gap-x-4">
            <AiOutlineArrowLeft size={25} color="#0E6FFF" />
            <div className="w-[200px] h-[110px] ">
                <Image src={image1} alt="image" />
                <div className="border border-b-4 border-blue-500 mt-2"></div>
            </div>

            <div className="w-[200px] h-[110px]">
                <Image src={image1} alt="image" />
            </div>
            <div className="w-[200px] h-[110px]">
                <Image src={image1} alt="image" />
            </div>
            <div className="w-[200px] h-[110px]">
                <Image src={image1} alt="image" />
            </div>
            <AiOutlineArrowRight size={25} color="#0E6FFF" />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
