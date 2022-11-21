import { Outlet } from "react-router-dom";
import Navbar from "../Navbar";

const GenericLayout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <Outlet />
    </div>
  );
};

export default GenericLayout;
