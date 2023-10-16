import { Link } from "react-router-dom";
import { Menu } from "@mui/material";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <nav className="flex items-center justify-between px-2 md:px-10 py-4 text-zinc-800 shadow-xl">
        <div>
          <h1 className="text-4xl font-bold">Keyword.io</h1>
        </div>
        <div className="md:hidden">
          <button id="basic-button" onClick={handleClick}>
            <GiHamburgerMenu size={32} color={"black"} />
          </button>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <div className="flex flex-col text-lg font-semibold px-5 py-2 gap-2">
              <Link to="/" onClick={handleClose}>
                Dashboard
              </Link>
              <Link to="/create-ad" onClick={handleClose}>
                Create Ads
              </Link>
            </div>
          </Menu>
        </div>
        <div className="text-2xl font-semibold hidden md:flex items-center justify-center gap-10 ">
          <Link to="/">Dashboard</Link>
          <Link to="/create-ad">Create Ads</Link>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
