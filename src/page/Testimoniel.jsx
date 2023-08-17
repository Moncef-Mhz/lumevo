function Testimoniel() {
  return (
    <div className="my-10 flex gap-20 px-36  w-full relative">
      <div className="w-full h-full">
        <img
          src="https://images.unsplash.com/photo-1626386699888-b8865823b279?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
          alt="fashion"
          className="object-cover  rounded-tl-[128px] w-[400px]"
        />
      </div>
      <div className="flex flex-col gap-20 relative">
        <h1 className="font-bold font-serif text-[68px]  w-[80%]">
          Best Fashion Since 2014
        </h1>
        <p className="w-[80%]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
          ullamcorper congue eros, eget tincidunt ipsum eleifend ut orem ipsum
          dolor sit amet consectetur adipiscing elit Sed ullamcorper congue eros
          eleifend ut tincidunt ipsum .{" "}
        </p>
        <div></div>
      </div>
      <div className="flex items-center justify-between absolute bottom-0 bg-white shadow-xl px-20 py-10  gap-20 left-[400px]">
        <div className="flex flex-col items-center  gap-2">
          <h1 className="text-3xl font-bold font-serif">2014</h1>
          <p>Lumevo Founded</p>
        </div>
        <div className="flex flex-col items-center  gap-2">
          <h1 className="text-3xl font-bold font-serif">8900+</h1>
          <p>Product Sold</p>
        </div>
        <div className="flex flex-col items-center  gap-2">
          <h1 className="text-3xl font-bold font-serif">3105+</h1>
          <p>Best Reviews</p>
        </div>
      </div>
    </div>
  );
}

export default Testimoniel;
