import { ReactNode } from "react";

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
      <div className="flex flex-col items-center fixed w-[300px]">
        <div className="p-2 w-full text-2xl">CONTEÚDO</div>
        {list.map((item, key) => {
          return <NavSidebarItem item={item} key={key} />;
        })}
      </div>
    </div>
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
    <div className="w-full grid  grid-cols-12 bg-[#121212] font-metropolis-semibold gap-12 min-h-screen">
      <NavSidebar list={navSidebarList} />
      <div className="flex justify-center text-zinc-300 text-lg w-full col-span-9 pb-8">
        <div className="max-w-screen-lg">{children}</div>
      </div>
    </div>
  );
};
