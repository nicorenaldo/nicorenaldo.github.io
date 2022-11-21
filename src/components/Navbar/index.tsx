import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import ClickAwayListener from '@mui/material/ClickAwayListener';

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
      <div className="block md:hidden m-4">
        <div className="z-0 w-full text-end py-2">
          <button type="button" onClick={handleClick}>
            <MenuIcon className="text-dark" />
          </button>
        </div>
        {openMenu && (
          <ClickAwayListener onClickAway={() => setOpenMenu(false)}>
            <div className="bg-neutral-50 shadow w-full flex flex-col gap-2 text-end absolute right-0 p-4">
              <Link className="" to="/#asd">Home</Link>
              <Link to="/#asd">About</Link>
              <Link to="/#asd">Experience</Link>
              <Link to="/#asd">Projects</Link>
              <Link to="/#asd">Blogs</Link>
            </div>
          </ClickAwayListener>
        )}
      </div>
    </>
  );
};

export default Navbar;
