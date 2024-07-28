import { teams } from "../assets/assets";

const Team = () => {
  return (
    <div className="w-full h-[2000px] bg-black mt-[550px]">
      <div>
        <div className="flex items-center justify-between text-white pt-32 px-10 mx-10 underline underline-offset-8 text-lg font-medium">
          <p>Nr.3</p>
          <p>our strong point</p>
          <p>BIM</p>
        </div>
        <div className="pt-40 px-10 mx-10">
          <h1 className="text-4xl font-bold text-white">
            Together with our clients and partners,<br />
            we shape the cities of our future.
          </h1>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 pt-20 px-10 mx-10">
          {teams.map((team, index) => {
            return (
              <div key={index} className="w-full h-[400px] p-6 ">
                <div className="w-full h-[500px]">
                  <img src={team.image} alt={team.name} className="w-full h-full " />
                </div>
                <div className="relative  top-[-162px] mt-4 text-white">
                  <h2 className="text-xl font-bold">{team.name}</h2>
                  <p className="">{team.position}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Team;
