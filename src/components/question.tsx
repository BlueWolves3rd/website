export const Question = ({
  children,
  number,
}: {
  children: string;
  number: string;
}) => {
  return (
    <div className="z-0">
      <h2 className="text-white text-2xl ">{`#${number}: ${children}`}</h2>
    </div>
  );
};
