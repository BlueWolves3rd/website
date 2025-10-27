import { Link } from "react-router-dom";
import bwLogo from "@/assets/BW_logo.png";

const ButtonMenu = ({ to, children }: { to: string; children: string }) => {
  return (
    <Link to={to}>
      <span
        className="hover:text-[#453cf0] transition-colors duration-300 ease-in-out 
        bg-clip-text
        text-transparent 
        bg-gradient-to-b 
        from-white 
        via-gray-300 
        to-gray-600"
      >
        {children}
      </span>
    </Link>
  );
};

const Menu = () => {
  return (
    <div
      className="font-bold text-white w-full h-20 py-3 flex top-0
            items-center shadow-md sticky bg-[#0b0b3d] font-chiquel justify-center z-[100]"
    >
      <div className="flex flex-row justify-between items-center 2xl:w-[1320px]">
        <div>
          <Link
            to="/"
            className="ml-4 cursor-pointer text-2xl flex flex-row gap-6 items-center"
          >
            <img src={bwLogo} className="w-16" />
            <span
              className="text-[5pt] bg-clip-text p-2
        text-transparent 
        bg-gradient-to-b 
        from-white 
        via-gray-300 
        to-gray-600"
            >
              BLUE WOLVES
            </span>
          </Link>
        </div>

        <div className="flex flex-row mr-[-7rem] font-bold cursor-pointer gap-12 text-[3.5pt] ">
          <ButtonMenu to={"/faq"}>FAQ</ButtonMenu>
          <ButtonMenu to={"/sobrenos"}>SOBRE NÓS</ButtonMenu>
          <ButtonMenu to={"/contato"}>CONTATO</ButtonMenu>
        </div>
      </div>
    </div>
  );
};

export default Menu;
