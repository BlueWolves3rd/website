import { MouseEvent } from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

interface HomeButtonProps {
  children: string;
  img: string;
  zoomImg: string;
  top?: number;
  height?: string;
  link?: string;
}
export const HomeButton = ({
  children,
  img,
  zoomImg,
  top,
  height,
  link,
}: HomeButtonProps) => {
  const [image, setImage] = useState(img);

  const handleOnMouseOver = (e: MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    setImage(zoomImg);
  };

  const handleOnMouseOut = (e: MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    setImage(img);
  };

  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate(link ?? "");
  };

  return (
    <div
      onClick={handleNavigation}
      onMouseOver={handleOnMouseOver}
      onMouseOut={handleOnMouseOut}
      className="max-h-48 max-w-72 w-full h-48 bg-white relative overflow-hidden
            flex justify-center items-end rounded-sm cursor-pointer group
            border-[2px] border-[#3B3FE9] border-solid "
    >
      <img
        style={{ top: top ?? 0, height: height ?? "100%" }}
        src={image}
        className="absolute z-0 object-cover w-full rounded-sm
                    transition-transform duration-500 ease-in-out group-hover:scale-110"
      />
      <div className="z-0 absolute bg-black h-full w-full opacity-60 left-0 " />
      <Link to={link ?? ""} />
      <span className="text-white z-50 relative p-2 text-[1.25rem] font-bold  font-metropolis">
        {children}
      </span>
    </div>
  );
};
