import { CollectionData } from "../utils";

function CollectionPage() {
  return (
    <div className="px-36 flex flex-col items-center justify-center my-20 ">
      <h1 className="text-[68px] font-bold font-serif">New Collection</h1>
      <p className="font-sans text-xl text-dark-brown">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ullamcorper
        congue eros
      </p>
      <div className="flex flex-wrap gap-4 w-full items-center justify-center mt-10">
        {CollectionData.map((data) => (
          <div
            key={data.id}
            className="relative w-[343px] h-[350px] cursor-pointer"
          >
            <img src={data.url} alt="" className="object-cover w-full h-full" />
            <div className="absolute bottom-0 flex mb-10 w-full justify-center">
              <h1 className="bg-white w-full mx-8 py-4 uppercase font-semibold font-sans text-center text-xl">
                {data.title}
              </h1>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CollectionPage;
