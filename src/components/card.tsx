export const Card = ({
  children,
  href,
}: {
  children: Array<JSX.Element>;
  href?: string;
}) => {
  return (
    <div
      onClick={() => {
        if (href) {
          window.location.href = href;
        }
      }}
      className="bg-gray-200 p-4 flex border-zinc-300 border-[1px] border-solid
            flex-col items-center justify-center w-[200px] h-[200px] z-50 shadow-2xl cursor-pointer"
    >
      {children}
    </div>
  );
};
