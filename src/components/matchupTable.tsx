import { ReactNode, useState } from "react";
import { MdArrowForwardIos } from "react-icons/md";
import riddlerChart from "../utils/matchupData/theRiddler.json";
import charts from "../utils/matchupData/charts.json";
import yang from "../assets/mu/yang_portrait.png";
import yun from "../assets/mu/yu_portrait.png";
import makoto from "../assets/mu/ma_portrait.png";
import chun from "../assets/mu/ch_portrait.png";
import ken from "../assets/mu/ke_portrait.png";
import oro from "../assets/mu/or_portrait.png";
import hugo from "../assets/mu/hu_portrait.png";
import q from "../assets/mu/q_portrait.png";
import necro from "../assets/mu/ne_portrait.png";
import sean from "../assets/mu/se_portrait.png";
import ryu from "../assets/mu/ry_portrait.png";
import gouki from "../assets/mu/go_portrait.png";
import elena from "../assets/mu/el_portrait.png";
import twelve from "../assets/mu/tw_portrait.png";
import urien from "../assets/mu/ur_portrait.png";
import remy from "../assets/mu/re_portrait.png";
import dudley from "../assets/mu/du_portrait.png";
import alex from "../assets/mu/al_portrait.png";
import ibuki from "../assets/mu/ib_portrait.png";

export const MatchupTable = () => {
  const [openRows, setOpenRows] = useState<boolean[]>(Array(16).fill(false));

  const openRow = (n: number) => {
    return () => {
      const aux = [...openRows];
      aux[n] = !aux[n];
      setOpenRows(aux);
    };
  };

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

  const TableRow = ({
    characterPosition,
    img,
  }: {
    characterPosition: number;
    img?: string;
  }) => {
    return (
      <tr onClick={openRow(characterPosition)} className="bg-[#121212]">
        <td className="border-[#121212] border-4 text-center w-16 h-8">
          <div className="flex flex-row justify-center items-center gap-[2px]">
            <img src={img} />
            <MdArrowForwardIos
              className="text-white"
              style={{
                transform: openRows[characterPosition] ? "rotate(90deg)" : "",
              }}
            />
          </div>
        </td>
        {riddlerChart[characterPosition].map((e, key) => {
          return <Td key={key}>{e}</Td>;
        })}
      </tr>
    );
  };

  return (
    <table className="text-zinc-200 border-[#121212] border-4 text-md">
      <tbody>
        <tr>
          <th className="bg-[#121212]" />
          <Th img={chun}></Th>
          <Th img={yun}></Th>
          <Th img={ken}></Th>
          <Th img={makoto}></Th>
          <Th img={dudley}></Th>
          <Th img={yang}></Th>
          <Th img={gouki}></Th>
          <Th img={urien}></Th>
          <Th img={oro}></Th>
          <Th img={ryu}></Th>
          <Th img={ibuki}></Th>
          <Th img={elena}></Th>
          <Th img={necro}></Th>
          <Th img={hugo}></Th>
          <Th img={alex}></Th>
          <Th img={q}></Th>
          <Th img={remy}></Th>
          <Th img={twelve}></Th>
          <Th img={sean}></Th>
        </tr>
        <TableRow characterPosition={0} img={chun}></TableRow>
        <TableRow characterPosition={1} img={yun}></TableRow>
        <TableRow characterPosition={2} img={ken}></TableRow>
        <TableRow characterPosition={3} img={makoto}></TableRow>
        <TableRow characterPosition={4} img={dudley}></TableRow>
        <TableRow characterPosition={5} img={yang} />
        <TableRow characterPosition={6} img={gouki}></TableRow>
        <TableRow characterPosition={7} img={urien}></TableRow>
        <TableRow characterPosition={8} img={oro}></TableRow>
        <TableRow characterPosition={9} img={ryu}></TableRow>
        {charts[9].map((e, key) => {
          return (
            <tr
              style={{ display: openRows[9] ? "table-row" : "none" }}
              key={key}
            >
              <td className="text-center bg-[#121212]">{e.name}</td>
              {e.chart.map((n, key) => {
                return <Td key={key}>{n}</Td>;
              })}
            </tr>
          );
        })}
        <TableRow characterPosition={10} img={ibuki}></TableRow>
        <TableRow characterPosition={11} img={elena}></TableRow>
        <TableRow characterPosition={12} img={necro}></TableRow>
        <TableRow characterPosition={13} img={hugo}></TableRow>
        <TableRow characterPosition={14} img={alex}></TableRow>
        <TableRow characterPosition={15} img={q}></TableRow>
        <TableRow characterPosition={16} img={remy}></TableRow>
        <TableRow characterPosition={17} img={twelve}></TableRow>
        <TableRow characterPosition={18} img={sean}></TableRow>
      </tbody>
    </table>
  );
};
/**/
