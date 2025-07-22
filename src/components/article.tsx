import { ReactNode } from "react";
import { Link } from "react-router-dom";

export const Header = ({
  children,
  level,
  id,
}: {
  children: string;
  level: 1 | 2 | 3 | 4 | 5 | 6;
  id: string;
}) => {
  const Tag = `h${level}` as keyof JSX.IntrinsicElements;
  return (
    <div className="text-center" id={id}>
      <Tag
        className="font-metropolis px-10 py-5 bg-[#ff0030] skew-x-[-24deg]
                text-4xl inline-block font-bold mt-24 mb-8 text-white"
      >
        {children.toUpperCase()}
      </Tag>
    </div>
  );
};

export const ContentLinkImg = ({
  children,
  img,
  href,
}: {
  children?: string;
  img: string;
  href: string;
}) => {
  return (
    <div className="flex flex-col items-center">
      <a
        className="text-blue-500 border-b-2 border-b-solid border-b-blue-500
                    hover:text-blue-800 hover:border-blue-800 my-2"
        href={href}
        target="_blank"
      >
        {children}
      </a>
      <img src={img} className="mt-2 mb-6 text-justify " />
    </div>
  );
};

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

type TNavSidebarItem = {
  href: string;
  label: string;
};

type TNavSidebarList = Array<TNavSidebarItem>;

const NavSidebarItem = ({ item }: { item: TNavSidebarItem }) => {
  return (
    <div className="flex flex-col w-full ml-[-3rem] relative">
      <a
        href={item.href}
        className="hover:bg-zinc-800 p-2 hover:text-blue-400 flex flex-row items-center"
      >
        <div className="mr-2 w-4 h-1 bg-white" />
        {item.label}
      </a>
    </div>
  );
};

export const NavSidebar = ({ list }: { list: TNavSidebarList }) => {
  return (
    <div
      className="flex flex-col text-white h-full
                col-span-3 text-xl bg-[#181818] text-justify items-center 
            pt-8 relative border-[#969696] border-r-4"
    >
      <div className="flex flex-col items-center fixed w-[300px] ml-4">
        <div className="p-2 w-full text-2xl">CONTEÚDO</div>
        {list.map((item, key) => {
          return <NavSidebarItem item={item} key={key} />;
        })}
      </div>
    </div>
  );
};

export const Move = ({
  children,
  src,
  width,
  id,
}: {
  children: string;
  src?: string;
  width?: string;
  id?: string;
}) => {
  return (
    <div id={id}>
      <ul
        className="mt-8 before:content-[''] before:absolute before:left-[-1.5rem]
                    before:top-1/2 before:-translate-y-1/2 before:w-2 before:h-2
                    before:bg-white before:rounded-full relative "
      >
        <li className="font-metropolis text-white">{children}</li>
      </ul>
      {src ? (
        <div className="flex ml-4 mt-6 mb-8">
          <img src={src} style={{ width: width ? width : "8rem" }} />
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export const TextDecoration = ({
  children,
  blue,
  red,
  underline,
  bold,
  href,
}: {
  children: ReactNode | string;
  blue?: boolean;
  underline?: boolean;
  bold?: boolean;
  red?: boolean;
  href?: string;
}) => {
  return (
    <>
      {" "}
      <span
        style={{
          color: blue ? "#6b63fa" : red ? "red" : "white",
          textDecorationLine: underline ? "underline" : "none",
          fontFamily: bold ? "Metropolis-Black" : "Metropolis-semibold",
        }}
      >
        {href ? <Link to={href}>{children}</Link> : <> {children}</>}
      </span>
    </>
  );
};

export const Article = ({
  children,
  navSidebarList,
}: {
  children: ReactNode;
  navSidebarList: TNavSidebarList;
}) => {
  return (
    <div className="w-full grid grid-cols-12 bg-primary font-metropolis-semibold min-h-screen">
      <NavSidebar list={navSidebarList} />
      <div className="flex justify-center text-zinc-300 text-lg w-full col-span-9 pb-8">
        <div className="max-w-screen-lg px-12">{children}</div>
      </div>
    </div>
  );
};
