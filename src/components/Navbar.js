import React, { useState } from "react";
import { Button } from "./Button";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.scss";

const NavBar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => {
    console.log("clicked, ",click);
    setClick(!click);
  };

  return (
    <>
      <nav className="navbar">
        <Link to="/" className="navbar-logo">
          BLAH
        </Link>
        <div className="menu-icon" onClick={handleClick}>
          <span className={click ? "fas fa-times" : "fas fa-bars"} />
        </div>
      </nav>
    </>
  );
};

export default NavBar;
