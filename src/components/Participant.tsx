import Card from "@/app/views/Card"
import {AiOutlineArrowRight, AiOutlineArrowLeft} from "react-icons/ai"

const Participant = () => {
  return (
    <div className='flex flex-col items-center mt-8 max-w-screen-xl mx-auto'>
        <h1 className='text-[64px] font-bold leading-[70px] tracking-[-2.88px]'>Participant Stories</h1>
        <div className="flex gap-x-4 mt-16 mb-7">
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
        <div className="flex self-start ml-6 gap-x-4">
          <AiOutlineArrowLeft size={25} />
          <AiOutlineArrowRight size={25} color="#0E6FFF" />
        </div>
    </div>
  )
}

export default Participant