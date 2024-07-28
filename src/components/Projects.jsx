import { assets } from "../assets/assets"

const Projects = () => {
  return (
    <div>
        <div className=""> 
            <div className="flex items-center justify-between pt-32 px-10 mx-10 underline  underline-offset-8 text-lg font-medium ">
                <p>Nr.1</p>
                <p>Our projects</p>
                <p>BIM</p>
            </div>
            <div className="pt-36 px-10 mx-8" >
                <h1 className="text-[40px] w-[750px] font-bold">From residential buildings to public buildings, offices and warehouses.</h1>
            </div> 
            <div className="flex gap-28 mx-8 pt-36">
                <div className=" flex flex-col gap-28 px-20 pt-20 ">
                    <div className="w-[460px] h-[500px] overflow-hidden">
                        <img src={assets.project1} alt="" className="w-full h-full object-cover"/>
                        <div className=" justify-start p-4 relative bottom-24 text-black bg-white w-[285px] h-[100px] px-10 ">
                        <h1 className="text-2xl font-bold">Agnes</h1>
                        <div className="flex gap-4 text-black/45 font-semibold text-sm relative top-1">
                            <p>Sweden</p>
                            <p>2019</p>
                            <p>4000 m2</p>
                        </div>
                    </div>
                    <div className="flex items-center relative bottom-[178px] left-[310px]  gap-4 bg-white w-32  h-14 justify-center rounded-full">
                <button className=" text-black">
                   Discover
                </button>
                <img src={assets.right2} alt="" className="w-5 h-5"/>
            </div>
                    </div>    
                    <div className="w-[460px] h-[500px] overflow-hidden">
                        <img src={assets.project3} alt="" className="w-full h-full object-cover"/>
                        <div className=" justify-start p-4 relative bottom-24 text-black bg-white w-[285px] h-[100px] px-10 ">
                        <h1 className="text-2xl font-bold">Kungsbäck</h1>
                        <div className="flex gap-4 text-black/45 font-semibold text-sm relative top-1">
                            <p>Sweden</p>
                            <p>2019</p>
                            <p>2000 m2</p>
                        </div>
                    </div>
                    </div>                
                </div>

             <div className=" flex flex-col gap-36 pt-36">
                <div className="w-[460px] h-[500px] overflow-hidden">
                    <img src={assets.project2} alt="" className="w-full h-full object-cover"/>
                    <div className=" justify-start p-4 relative bottom-24 text-black bg-white w-[285px] h-[100px] px-10 ">
                        <h1 className="text-2xl font-bold">Kv Klockbojen</h1>
                        <div className="flex gap-4 text-black/45 font-semibold text-sm relative top-1">
                            <p>Sweden</p>
                            <p>2017</p>
                            <p>6000 m2</p>
                        </div>
                    </div>
                </div>
               
                <div className="w-[460px] h-[500px] overflow-hidden">
                    <img src={assets.project4} alt="" className="w-full h-full object-cover"/>
                    <div className=" justify-start p-4 relative bottom-24 text-black bg-white w-[285px] h-[100px] px-10 ">
                        <h1 className="text-2xl font-bold">79 & Park</h1>
                        <div className="flex gap-4 text-black/45 font-semibold text-sm relative top-1">
                            <p>Sweden</p>
                            <p>2018</p>
                            <p>25 00 m2</p>
                        </div>
                        
                    </div>
                </div>

                </div>
            </div>
            <div className="flex items-center gap-4 bg-black w-64 mx-[520px] mt-28 h-14 justify-center rounded-full">
                <button className=" text-white">
                    See more projects
                </button>
                <img src={assets.right} alt="" className="w-5 h-5"/>
            </div>
        </div>
    </div>
  )
}

export default Projects