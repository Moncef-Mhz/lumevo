import { footerMap } from "../utils";
function Footer() {
  return (
    <div className="h-[240px] flex flex-col items-center pt-20 pb-10 mt-20 bg-dark-brown w-full justify-between gap-10">
      <ul className="flex flex-row gap-10">
        {footerMap.map((item) => (
          <li
            key={item}
            className="text-white uppercase text-sm font-bold cursor-pointer"
          >
            {item}
          </li>
        ))}
      </ul>
      <h1 className="text-white/60">© 2023 Lumevo. All Right Reserved</h1>
    </div>
  );
}

export default Footer;
