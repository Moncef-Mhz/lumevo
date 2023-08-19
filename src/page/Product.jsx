import { filter, ProductData } from "../utils";
function Product() {
  return (
    <div className="px-32 flex flex-col w-full my-10 ">
      <h1 className="text-[68px] font-bold font-serif text-center">
        Our Product
      </h1>
      <div className="flex gap-20 justify-center w-full mt-4">
        {filter.map((item) => (
          <h1
            key={item.id}
            className="uppercase text-base font-bold font-sans border-b-2 border-white hover:border-black duration-200 cursor-pointer"
          >
            {item.title}
          </h1>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-10 ">
        {ProductData.map((item) => (
          <div
            key={item.id}
            className="w-[250px] h-[400px] cursor-pointeroverflow-hidden"
          >
            <img
              src={item.url}
              alt={item.title}
              className="w-full h-[300px] object-cover"
            />
            <div className="flex w-full  items-center p-5 flex-col gap-2 ">
              <h1 className="text-xl font-bold font-serif">{item.title}</h1>
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
  );
}

export default Product;
