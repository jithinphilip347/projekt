import  { useState } from 'react';
import { service } from "../assets/assets";

const Services = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div>
    <div>
      <div className="relative top-40 w-full h-screen  flex flex-col  text-white overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center object-cover"
          style={{ backgroundImage: "url('/services1.jpg')" }}
        />
        <div className="absolute inset-0 bg-black opacity-35" />
        
        <div className="absolute inset-x-0 top-24 flex items-center justify-between px-24 py-4 text-lg font-medium underline  underline-offset-8">
          <p>Nr.2</p>
          <p>Our projects</p>
          <p>BIM</p>
        </div> 
        <div className="relative top-80 px-32">
          <h1 className="text-4xl font-bold">
            Together with our clients and partners,<br />
            we shape the cities of our future.
          </h1>
        </div>
      </div>
      
        
        <div className="flex mt-40">
          {service.map((item, index) => (
            <div
              key={index}
              className="relative w-[340px] h-[700px] bg-black border-r-[1px]"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {hoveredIndex === index ? (
                <video
                  src={item.video}
                  className="absolute inset-0 w-full h-full object-cover"
                  autoPlay
                  muted
                />
              ) : (
                <div className="absolute inset-0 flex flex-col  bg-black bg-opacity-50 px-10 py-10">
                  <p className="text-white  underline font-bold">{item.num}</p>
                  <h1 className="relative top-60 text-white font-bold text-2xl">{item.title}</h1>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Services;
