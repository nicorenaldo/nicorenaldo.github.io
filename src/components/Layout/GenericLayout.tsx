import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Footer";
import Navbar from "../Navbar";

const GenericLayout = () => {
  useEffect(() => {
    document.title = 'Nico Renaldo';
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default GenericLayout;
