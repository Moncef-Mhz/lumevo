import { testimoniels } from "../utils";

function People() {
  return (
    <div className="px-32 my-10 flex flex-col items-center gap-10">
      <div className="flex flex-col items-center gap-5">
        <h1 className="font-serif font-bold text-5xl text-dark-brown">
          What People Say About Us
        </h1>
        <p className="text-dark-brown text-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
          ullamcorper congue eros
        </p>
      </div>
      <div className="flex flex-row flex-nowrap gap-4 overflow-x-hidden">
        {testimoniels.map((item) => (
          <div
            key={item.id}
            className="py-10 px-10 flex flex-col justify-between items-center w-[550px] h-[350px] bg-[#FAF5F0]"
          >
            <div className="flex flex-col gap-4 text-center ">
              <h1 className="text-dark-brown text-lg font-black font-sans">
                {item.title}
              </h1>
              <p className="text-sm text-dark-brown/40">{item.text}</p>
            </div>
            <div className="text-center flex flex-col gap-1">
              <h1 className="text-dark-brown text-base font-bold font-sans">
                {item.author}
              </h1>
              <p className="text-sm text-dark-brown/40">{item.role}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="flex flex-row gap-5">
        <div className="w-3 h-3 rounded-full bg-transparent border-black border cursor-pointer"></div>
        <div className="w-3 h-3 rounded-full bg-transparent border-black border cursor-pointer"></div>
        <div className="w-3 h-3 rounded-full bg-black border-black border cursor-pointer"></div>
        <div className="w-3 h-3 rounded-full bg-transparent border-black border cursor-pointer"></div>
        <div className="w-3 h-3 rounded-full bg-transparent border-black border cursor-pointer"></div>
      </div>
    </div>
  );
}

export default People;
