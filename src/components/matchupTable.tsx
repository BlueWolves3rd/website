import { ReactNode, useState } from "react";
import riddlerChart from "../utils/matchupData/theRiddler.json";
import charts from "../utils/matchupData/charts.json";

export const MatchupTable = () => {
  const [open, setOpen] = useState<boolean[]>(Array(16).fill(false));

  const openRow = (n: number) => {
    return () => {
      let aux = [...open];
      aux[n] = !aux[n];
      setOpen(aux);
    };
  };

  const Th = ({ children }: { children: ReactNode }) => {
    return <th className="border-white border-2 w-14 h-12">{children}</th>;
  };
  const Td = ({ children }: { children: ReactNode }) => {
    return (
      <td className="border-white border-2 w-14 h-12 text-center">
        {children}
      </td>
    );
  };

  const TableRow = ({
    characterPosition,
    children,
  }: {
    characterPosition: number;
    children: string;
  }) => {
    return (
      <tr onClick={openRow(characterPosition)}>
        <td className="border-white border-2 p-2">{children}</td>
        {riddlerChart[characterPosition].map((e, key) => {
          return <Td key={key}>{e}</Td>;
        })}
      </tr>
    );
  };

  return (
    <table className="text-white border-white border-2 text-xs">
      <tbody>
        <tr>
          <Th> </Th>
          <Th>Chun li</Th>
          <Th>Yun</Th>
          <Th>Ken</Th>
          <Th>Makoto</Th>
          <Th>Dudley</Th>
          <Th>Yang</Th>
          <Th>Gouki</Th>
          <Th>Urien</Th>
          <Th>Oro</Th>
          <Th>Ryu</Th>
          <Th>Ibuki</Th>
          <Th>Elena</Th>
          <Th>Necro</Th>
          <Th>Hugo</Th>
          <Th>Alex</Th>
          <Th>Q</Th>
          <Th>Remy</Th>
          <Th>Twelve</Th>
          <Th>Sean</Th>
        </tr>
        <TableRow characterPosition={0}>Chun Li</TableRow>
        <TableRow characterPosition={1}>Yun</TableRow>
        <TableRow characterPosition={2}>Ken</TableRow>
        <TableRow characterPosition={3}>Makoto</TableRow>
        <TableRow characterPosition={4}>Dudley</TableRow>
        <TableRow characterPosition={5}>Yang</TableRow>
        <TableRow characterPosition={6}>Gouki</TableRow>
        <TableRow characterPosition={7}>Urien</TableRow>
        <TableRow characterPosition={8}>Oro</TableRow>
        <TableRow characterPosition={9}>Ryu</TableRow>
        {charts[9].map((e) => {
          return (
            <tr style={{ display: open[9] ? "table-row" : "none" }}>
              <td className="p-2">{e.name}</td>
              {e.chart.map((n) => {
                return <Td> {n} </Td>;
              })}
            </tr>
          );
        })}
        <TableRow characterPosition={10}>Ibuki</TableRow>
        <TableRow characterPosition={11}>Elena</TableRow>
        <TableRow characterPosition={12}>Necro</TableRow>
        <TableRow characterPosition={13}>Hugo</TableRow>
        <TableRow characterPosition={14}>Alex</TableRow>
        <TableRow characterPosition={15}>Q</TableRow>
        <TableRow characterPosition={16}>Remy</TableRow>
        <TableRow characterPosition={17}>Twelve</TableRow>
        <TableRow characterPosition={18}>Sean</TableRow>
      </tbody>
    </table>
  );
};
/**/
