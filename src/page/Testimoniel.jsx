function Testimoniel() {
  return (
    <div className="my-10 flex gap-20 px-36  w-full">
      <div className="w-full h-[500px]">
        <img
          src="https://images.unsplash.com/photo-1626386699888-b8865823b279?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
          alt="fashion"
          className="object-cover  rounded-tl-[128px] w-[500px]"
        />
      </div>
      <div className="flex flex-col justify-between">
        <h1 className="font-bold font-serif text-[68px]">
          best Fashion since 2014
        </h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
          ullamcorper congue eros, eget tincidunt ipsum eleifend ut orem ipsum
          dolor sit amet consectetur adipiscing elit Sed ullamcorper congue eros
          eleifend ut tincidunt ipsum .{" "}
        </p>
        <div>
          <div>
            <h1>2014</h1>
            <p>Lumevo Founded</p>
          </div>
          <div>
            <h1>8900+</h1>
            <p>Product Sold</p>
          </div>
          <div>
            <h1>3105+</h1>
            <p>Best Reviews</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimoniel;
