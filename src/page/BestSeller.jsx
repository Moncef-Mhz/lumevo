import { CardData } from "../utils";
function BestSeller() {
  return (
    <div className="flex flex-col items-center justify-between px-32 py-32 bg-dark-brown">
      <div className="flex flex-row items-center justify-between w-full  gap-20 ">
        <div className="w-[30%] flex flex-col gap-10 items-start">
          <h1 className="text-5xl font-bold font-serif text-white leading-16 tracking-wide">
            Best Seller Product
          </h1>
          <p className="text-white w-[80%]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            ullamcorper congue eros, Lorem ipsum dolor sit amet
          </p>
          <button className="border text-white bg-transparent py-4 text-base  px-10 hover:bg-white hover:text-black duration-200">
            SEE MORE
          </button>
        </div>
        <div className="flex items-start justify-start gap-10">
          {CardData.map((item) => (
            <div
              key={item.id}
              className="rounded-b-md flex flex-col w-[300px] h-[400px] bg-white"
            >
              <div className="w-full h-[300px]">
                <img src={item.url} className="object-cover h-[300px] w-full" />
              </div>
              <div className="p-5 flex flex-col gap-1 rounded-b-md">
                <h1 className="font-serif font-bold text-lg">{item.title}</h1>
                <div className="flex gap-10">
                  <h1 className="font-bold font-sans opacity-60 line-through">
                    ${item.price}
                  </h1>
                  <h1 className="font-bold font-sans ">${item.price - 20}</h1>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-row gap-5 mt-10">
        <div className="bg-white w-3 h-3 rounded-full cursor-pointer"></div>
        <div className="bg-white/40 w-3 h-3 rounded-full cursor-pointer"></div>
        <div className="bg-white/40 w-3 h-3 rounded-full cursor-pointer"></div>
        <div className="bg-white/40 w-3 h-3 rounded-full cursor-pointer"></div>
        <div className="bg-white/40 w-3 h-3 rounded-full cursor-pointer"></div>
      </div>
    </div>
  );
}

export default BestSeller;
