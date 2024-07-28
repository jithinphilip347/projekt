import { MdKeyboardDoubleArrowDown } from "react-icons/md";

const Hero = () => {
  return (
    <div className="h-[464px] p-8 md:p-16">
      <div className="flex flex-col md:flex-row">
        <h1 className="flex flex-col w-full md:w-1/2 px-4 md:px-28 text-white text-[8vw] md:text-[5.4vw] leading-tight font-bold">
          <span>Science in</span>
          <span>structural</span>
          <span>design.</span>
        </h1>
        <p className="text-white rotate-90 relative left-[0px] md:left-[340px] mt-4 md:mt-0">Salesforce Transit Center - <strong>It inspires us!</strong> </p>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-between p-4 relative top-14">
        <div className="max-w-full md:max-w-[480px]">
          <p className="text-[14px] md:text-[16px] text-white/75 leading-snug">
            Great understanding of construction processes leads us to the 
            highest level of BiM engineering services in structures.
          </p>
        </div>
        <div className="flex gap-2 text-white/75 mt-4 md:mt-0">
          <p>Scroll Down</p>
          <MdKeyboardDoubleArrowDown className="animate-bounce w-5 h-5 relative top-1"/>
        </div>
      </div>
    </div>
  );
}

export default Hero;
