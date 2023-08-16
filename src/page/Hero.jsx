function Hero() {
  return (
    <div className="flex w-full  px-36 gap-20  justify-between bg-light-brown py-10">
      <div className=" flex flex-col w-[50%] items-start justify-between">
        <h1 className="sm:text-[56px] md:text-[64px] lg-text-[78px] font-bold font-serif leading-20 text-dark-brown">
          Find The Best Fashion Style For You
        </h1>
        <p className="text-dark-brown text-2xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
          ullamcorper congue eros, eget tincidunt ipsum eleifend ut.{" "}
        </p>
        <button className="uppercase px-8 py-5 bg-dark-brown text-white font-bold text-md ">
          shop now
        </button>
      </div>

      <div>
        <img
          src="https://images.unsplash.com/photo-1609505848912-b7c3b8b4beda?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=465&q=80"
          alt=""
          className="md:w-[300px] lg:w-[400px]  h-auto object-cover rounded-es-[250px]"
        />
      </div>
    </div>
  );
}

export default Hero;
