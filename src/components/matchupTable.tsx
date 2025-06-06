import { Fragment, ReactNode, useState } from "react";
import { MdArrowForwardIos } from "react-icons/md";
import charts from "../utils/matchupData/charts.json";
import { muImgs } from "../utils/muImgs";

const Th = ({ children, img }: { children?: ReactNode; img?: string }) => {
  return (
    <th className="border-[#121212] border-4 w-12 h-10 bg-[#121212]">
      <div className="flex justify-center">
        {children}
        <img src={img} />
      </div>
    </th>
  );
};

const Td = ({ children }: { children: ReactNode }) => {
  const colors = [
    { value: 2, color: "#9B1B1B" },
    { value: 3.5, color: "#C43A3A" },
    { value: 4.5, color: "#E06B6B" },
    { value: 5, color: "#E1AA33" },
    { value: 6, color: "#6DAF59" },
    { value: 7.5, color: "#3B8C3B" },
    { value: 10, color: "#1F6E1F" },
  ];

  if (children == "—") {
    return (
      <td className="border-[#121212] border-4 w-8 h-8 text-center bg-zinc-500">
        {children}
      </td>
    );
  }

  const val = Number(children);
  const color = colors.find((e) => val <= e.value)?.color ?? colors[3].color;

  return (
    <td
      style={{ background: color }}
      className="border-[#121212] border-4 w-8 h-8 text-center"
    >
      {children}
    </td>
  );
};

interface TableRowProps {
  rowPosition: number;
  img?: string;
  openRows: Array<boolean>;
  setOpenRows: React.Dispatch<React.SetStateAction<boolean[]>>;
}

const TableRow = ({
  rowPosition,
  img,
  openRows,
  setOpenRows,
}: TableRowProps) => {
  const average = new Array<number>(19).fill(0);
  charts[rowPosition].map((e) => {
    for (let i = 0; i < e.chart.length; i++) {
      average[i] += Number(e.chart[i]);
    }
  });

  const numberOfcharts = charts[rowPosition].length;

  return (
    <tr
      onClick={() => {
        const aux = [...openRows];
        aux[rowPosition] = !aux[rowPosition];
        setOpenRows(aux);
      }}
      className="bg-[#121212]"
    >
      <td className="border-[#121212] border-4 text-center w-16 h-8">
        <div className="flex flex-row justify-center items-center gap-[2px]">
          <img src={img} />
          <MdArrowForwardIos
            className="text-white"
            style={{
              transform: openRows[rowPosition] ? "rotate(90deg)" : "",
            }}
          />
        </div>
      </td>

      {average.map((e, key) => {
        return (
          <Td key={key}>
            {isNaN(e)
              ? "—"
              : e % 1 == 0
                ? e / numberOfcharts
                : (e / numberOfcharts).toFixed(1)}
          </Td>
        );
      })}
    </tr>
  );
};

export const MatchupTable = () => {
  const [openRows, setOpenRows] = useState<boolean[]>(Array(16).fill(false));
  return (
    <table className="text-zinc-200 border-[#121212] border-4 text-md">
      <tbody>
        <tr>
          <th className="bg-[#121212]" />
          {muImgs.map((e, key) => {
            return <Th img={e} key={key} />;
          })}
        </tr>
        {muImgs.map((e, rowPosition) => {
          return (
            <Fragment key={rowPosition}>
              <TableRow
                rowPosition={rowPosition}
                img={e}
                key={rowPosition}
                openRows={openRows}
                setOpenRows={setOpenRows}
              />

              {charts[rowPosition].map((e, key) => {
                return (
                  <tr
                    style={{
                      display: openRows[rowPosition] ? "table-row" : "none",
                    }}
                    key={key}
                  >
                    <td className="text-center bg-[#121212]">{e.name}</td>
                    {e.chart.map((n, key) => {
                      return <Td key={key}>{n}</Td>;
                    })}
                  </tr>
                );
              })}
            </Fragment>
          );
        })}
      </tbody>
    </table>
  );
};
/**/
