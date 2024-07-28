import { MdKeyboardDoubleArrowDown } from "react-icons/md";


const Hero = () => {
  return (
    <div className="h-[464px] p-16">
      <div className=" flex">
      <h1 className="  flex flex-col w-1/2 px-28   text-white text-[5.4vw] leading-1.15 font-bold">
      <span>Science in</span>
        <span>structural</span>
        <span>design.</span>
      </h1>
      <p className="text-white rotate-90 relative left-[340px]">Salesforce Transit Center - <strong>It inspires us!</strong> </p>
      </div>
      <div className="flex items-center justify-between  p-4  relative  top-14">
        <div className=" max-w-[480px] ">
            <p className="text-[16px] text-white/75 leading-1.15">
                Great understanding of construction processes leads us to the 
                highest level of BiM engineering services in structures.
                 </p>
        </div>
        <div className="flex gap-2  text-white/75">
            <p > Scroll Down </p>
            <MdKeyboardDoubleArrowDown className="animate-bounce w-5 h-5 relative top-1"/>
        </div>
      </div>
    </div>
  )
}

export default Hero