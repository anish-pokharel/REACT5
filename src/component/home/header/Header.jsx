import React, { useState } from "react";
import { Link } from "react-router-dom";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import WorkOutlinedIcon from "@mui/icons-material/WorkOutlined";
import GridViewIcon from "@mui/icons-material/GridView";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";

const Header = () => {
  const [sidebar, setSidebar] = useState(false);

  window.addEventListener("scroll", function () {
    const header = this.document.querySelector(".header");
    header.classList.toogle("active", window.screenY > 200);
  });

  return (
    <>
      <header className="header">
        <div className="container flex">
          <div className="logo">
            <img src="assets/logo.png" alt="" />
          </div>
          <div className="nav">
            <ul
              className={sidebar ? "nav-bar-sidebar" : "nav-links"}
              onClick={() => setSidebar(false)}
            >
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/pages">Pages</Link>
              </li>
              <li>
                <Link to="/blog">Blog</Link>
              </li>
              <li>
                <Link to="/portfolio">Portfolio</Link>
              </li>
              <li>
                <Link to="/shop">Shop</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
              <li className="icon">
                <SearchOutlinedIcon className="HeaderIcon" />
                <WorkOutlinedIcon className="HeaderIcon" />
                <GridViewIcon className="HeaderIcon" />
              </li>
            </ul>
          </div>
          <button
            className="navbar-items-icon"
            onClick={() => setSidebar(!sidebar)}
          >
            {sidebar ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </header>
    </>
  );
};

export default Header;
