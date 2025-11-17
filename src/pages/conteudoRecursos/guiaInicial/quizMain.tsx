import { ReactNode } from "react";
import { MouseEvent } from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";


export const QuizMain = ({
    children
} : {
    children: ReactNode;
}) => {
    return(
        <div className="flex flex-col w-full mb-20">
            {children}
        </div>
    );
}

export const Titulo = ({
  children
} : {
  children: string;
}) => {
  return(
     <div className="text-center">
      <div className="font-metropolis px-10 py-5 skew-x-[-24deg]
                text-4xl inline-block font-bold mt-24 mb-8 text-white">
                  {children.toUpperCase()}
      </div>
    </div>
  )
}

export const Text = ({
  children,
  mt,
}: {
  children: ReactNode;
  mt?: string;
}) => {
  return (
    <div style={{ marginTop: mt }} className="my-2 text-justify indent-12">
      {children}
    </div>
  );
};

export const Resposta = ({
  children,
  mt,
}: {
  children: ReactNode;
  mt?: string;
}) => {
  return (
    <div style={{ marginTop: mt }} className="flex flex-auto text-justify items-center justify-center">
      {children}
    </div>
  );
};

export const Questao = ({
  children,
  option,
  id,
}: {
  children: string;
  option: 1 | 2 | 3 | 4 ;
  id: string;
}) => {
  const Tag = `h${option}` as keyof JSX.IntrinsicElements;
  return (
    <div className="text-center" id={id}>
      <Tag
        className="font-metropolis px-10 py-5 skew-x-[-24deg]
                text-4xl inline-block font-bold mt-24 mb-8 text-white"
      >
        {children.toUpperCase()}
      </Tag>
    </div>
  );
};

export const ContainerResposta =({
  children
}: {
  children: ReactNode
}) =>{
  return(
    <div className="w-full px-10 bg-primary">
      <div className="flex w-full mt-5">
        <div className="grid flex-wrap w-full grid-cols-2 grid-rows-2 gap-6 items-center">
          {children}
        </div>
      </div>
    </div>
  )
}

interface RespostaButtonProps {
  children: string;
  img: string;
  zoomImg: string;
  top?: number;
  height?: string;
  link?: string;
}

export const RespostaButton = ({
  children,
  img,
  top,
  height,
  link,
}: RespostaButtonProps) => {
  const [image, setImage] = useState(img);

  const handleOnMouseOver = (e: MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const handleOnMouseOut = (e: MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
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
      className="max-h-48 w-full h-20 bg-primary relative overflow-hidden
            flex justify-center items-center rounded-md cursor-pointer group
            border-[2px] border-[#3B3FE9] border-solid "
    >
  
      <div className="absolute bg-black h-full w-full opacity-60 left-0 " />
      <Link to={link ?? ""} />
      <span className="text-white relative p-2 text-[1.25rem] font-bold font-metropolis">
        {children}
      </span>
    </div>
  );
};