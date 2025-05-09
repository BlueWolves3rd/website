import { MatchupTable } from "../components/matchupTable";

export const Matchups = () => {
  return (
    <div className="flex flex-col items-center gap-4 bg-[#121212] py-24 min-h-screen">
      <h1 className="text-4xl font-bold text-center text-white">
        MATCHUP CHARTS
      </h1>
      <div className="flex justify-center mt-4 mb-4 text-white">
        <MatchupTable />
      </div>
    </div>
  );
};
