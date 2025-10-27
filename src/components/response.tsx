export const Response = ({
  children,
}: {
  children: Array<JSX.Element> | JSX.Element | string;
}) => {
  return (
    <div className="bg-white p-5 text-xl flex flex-col gap-3 z-0">
      {children}
    </div>
  );
};
