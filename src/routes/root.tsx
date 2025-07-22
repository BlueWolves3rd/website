import { Outlet } from "react-router-dom";
import Menu from "@/components/menu.tsx";

const Root = () => {
  return (
    <div className="min-h-screen bg-transparent flex flex-col">
      <Menu />
      <Outlet />
    </div>
  );
};

export default Root;
