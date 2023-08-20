function Deal() {
  return (
    <div className="px-32 ">
      <div className="flex  flex-row w-full h-[500px] bg-wood-brown rounded-2xl p-20">
        <div className="flex flex-col justify-between h-full ">
          <h1 className="text-5xl font-bold font-serif capitalize text-dark-brown">
            Deal of the day
          </h1>
          <p className="text-base font-sans ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            ullamcorper congue erosget tincidunt{" "}
          </p>
          <div className="flex flex-row gap-8">
            <div className="flex flex-col gap-2 p-5 items-center bg-white">
              <h1 className="text-dark-brown text-4xl font-sans font-bold">
                08
              </h1>
              <h2 className="text-base font-normal">Days</h2>
            </div>
            <div className="flex flex-col gap-2 p-4 bg-white">
              <h1 className="text-dark-brown text-4xl font-sans font-bold">
                09
              </h1>
              <h2 className="text-base font-normal">Hours</h2>
            </div>
            <div className="flex flex-col items-center gap-2 p-4 bg-white">
              <h1 className="text-dark-brown text-4xl font-sans font-bold ">
                42
              </h1>
              <h2 className="text-base font-normal">min</h2>
            </div>
          </div>
        </div>
        <div>das</div>
      </div>
    </div>
  );
}

export default Deal;
