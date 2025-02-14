import React from "react";
import { Link, Outlet } from "react-router-dom";

const Header = () => {
  return (
    <div>
        <header>
          <span>IT-LOGO</span>
          <Link style={{ textDecoration: "none" }} to={"/header/forma"}>
            Registr
          </Link>
        </header>
        <Outlet />
    </div>
  );
};

export default Header;
