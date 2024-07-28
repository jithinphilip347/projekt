import { assets } from "../assets/assets";

const About = () => {
  return (
    <div>
      <div>
        <div className="flex items-center justify-between pt-32 px-10 mx-10 underline  underline-offset-8 text-lg font-medium ">
          <p>Nr.3</p>
          <p>our strong point</p>
          <p>BIM</p>
        </div>
        <div className="relative top-56 mx-32">
          <h1 className="w-[960px] text-4xl font-bold">
            Bringing together our structural engineering experience and
            understanding of the building process allows us to provide customers
            with high quality structural design and construction services.
          </h1>
        </div>
        <div className="flex items-center justify-between relative top-96 mx-32 space-x-8">
          <div className="w-[463px] h-[447px] overflow-hidden">
            <div
              className="w-full h-full bg-cover bg-center"
              style={{ backgroundImage: "url('/about1.jpg')" }}
            />
          </div>
          <div className="flex-1 space-y-4 pl-40  ">
            <p>
              We put a major emphasis on continual improvement of our
              <br /> processes and customer satisfaction.
            </p>
            <p className=" relative top-6">
              Our professionals constantly face the many challenges of <br />
              modern architecture and overcome these by blending <br /> together
              knowledge, technology, and innovation.
            </p>
            <div className="flex flex-col gap-16 relative top-16 ">
              <h1 className="flex items-center gap-4 text-2xl font-medium group ">
                <span className="relative ">
                   More about Teca Projekt
                  <span className="absolute  left-0 right-[-36px] bottom-[-8px] h-[2px] bg-black"></span>
                </span>
                <img
                  src={assets.right2}
                  alt=""
                  className="w-5 h-5 text-black group-hover:translate-x-2 transition-transform duration-300 ease-in-out "
                />
              </h1>
              <h1 className="flex items-center gap-4 text-2xl font-medium group ">
                <span className="relative">
                  See more projects
                  <span className="absolute  left-0 right-[-36px] bottom-[-8px] h-[2px] bg-black"></span>
                </span>
                <img
                  src={assets.right2}
                  alt=""
                  className="w-5 h-5 text-black group-hover:translate-x-2 transition-transform duration-300 ease-in-out"
                />
              </h1>
            </div>
          </div>
        </div>
<div className="relative top-[400px] w-[463px] mx-32">
    <ul className=" text-sm font-semibold text-black flex gap-8 justify-between">
        <li>79 & Park</li>
        <li>2017.</li>
        <li>Stockholm</li>
    </ul>
</div>
      </div>
    </div>
  );
};

export default About;
