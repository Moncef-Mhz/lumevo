function BestSeller() {
  return (
    <div className="flex flex-col items-center justify-between pl-32 py-32 bg-dark-brown">
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
        <div className="">Card</div>
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
