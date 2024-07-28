import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center py-16">
      <div className="container mx-auto px-8">
        <div className="flex flex-col md:flex-row justify-between gap-24">
          <div className="md:w-1/2 ml-10">
            <h1 className="text-[30px] font-bold leading-tight relative bottom-2">
              Looking forward to cooperation
              <br />
              with companies that share our
              <br />
              values and thinking BIG.
            </h1>
            <div className="flex items-center gap-4 bg-black w-56 mt-14 h-14 justify-center rounded-full group">
              <button className="text-white">Send messages</button>
              <img src={assets.right} alt="arrow icon" className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300 ease-in-out" />
            </div>
          </div>
          <div className="md:w-1/2 flex flex-col gap-28">
            <ul className="flex flex-wrap gap-16 uppercase text-black/40 font-bold text-sm">
              <li>About us</li>
              <li>Services</li>
              <li>Projects</li>
              <li>Contact us</li>
            </ul>
            <div className="flex flex-col md:flex-row gap-10 text-end pl-20">
              <div className="flex flex-col gap-2 font-semibold text-base relative right-10">
                <h1 className="font-bold text-base">Tallinn Office</h1>
                <p className="flex flex-col text-black/80 ">
                  <span>Väike-Paala 1, Tallinn</span>
                  <span>(+372) 644 1111</span>
                  <span>info@teca.ee</span>
                </p>
              </div>
              <div className="flex flex-col gap-2 font-semibold text-base">
                <h1 className="font-bold text-base">Stockholm Office</h1>
                <p className="flex flex-col text-black/80">
                  <span>Fruängsgången 2, Hägersten</span>
                  <span>(+46) 722 050 016</span>
                  <span>info@celement.se</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
