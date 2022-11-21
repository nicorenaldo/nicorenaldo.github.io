import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import { Button } from "@mui/material";
import { useState } from "react";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const handleClick = () => setOpenMenu(!openMenu);

  return (
    <>
      <div className="hidden md:flex p-8 gap-4">
        <p>
          <Link to="/#asd">Home</Link>
        </p>
        <p>
          <Link to="/#asd">About</Link>
        </p>
        <p>
          <Link to="/#asd">Experience</Link>
        </p>
        <p>
          <Link to="/#asd">Projects</Link>
        </p>
        <p>
          <Link to="/#asd">Blogs</Link>
        </p>
      </div>
      <div className="relative block md:hidden p-4">
        <div className="z-0 w-full text-end py-2">
          <button type="button" onClick={handleClick}>
            <MenuIcon className="text-dark" />
          </button>
        </div>
        {openMenu && (
          <div className={`transition-all w-full flex flex-col gap-2 text-end`}>
            <Link to="/#asd">Home</Link>
            <Link to="/#asd">About</Link>
            <Link to="/#asd">Experience</Link>
            <Link to="/#asd">Projects</Link>
            <Link to="/#asd">Blogs</Link>
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;
