import Hero from "./Hero"

const Header = () => {
  return (
<div className=" font-montserrat bg-custom-radial">
    <div className="flex items-center justify-between p-10 mx-10 text-white ">
        <div>
            <h1 className=" uppercase">logoprojekt</h1>
        </div>
        <div>
            <ul className="flex items-center gap-10">
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
            <li>Projects</li>
            <li>Careers</li>
            </ul>
           
        </div>
        <div>
            <button className=" border rounded-full cursor-pointer p-4 w-40 text-[16px] leading-6 hover:bg-black hover:border-none">Contact Us</button>
        </div>
    </div>
    <Hero />
</div>
  )
}

export default Header