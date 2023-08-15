import { useState } from "react";
import { navlinks } from "../utils";
import { AiOutlineMenu, AiOutlineSearch } from "react-icons/ai";
import { RiShoppingBagLine } from "react-icons/ri";

function Navbar() {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="flex w-full items-center justify-between h-[80px] bg-light-brown px-10 lg:px-16 ">
      <h1 className="text-2xl font-bold font-sans">Lumevo</h1>
      <ul className=" hidden md:flex gap-[64px]">
        {navlinks.map((links) => (
          <li key={links}>
            <a href="#">{links}</a>
          </li>
        ))}
      </ul>
      <div className="hidden md:flex gap-8">
        <AiOutlineSearch size={25} color="#2C2C2C" />
        <RiShoppingBagLine size={25} color="#2C2C2C" />
      </div>
      <div
        className="flex md:hidden cursor-pointer"
        onClick={() => setToggle(true)}
      >
        <AiOutlineMenu size={25} color="#2C2C2C" />
      </div>
    </div>
  );
}

export default Navbar;
