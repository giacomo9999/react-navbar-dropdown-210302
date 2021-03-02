import React, { useState } from "react";
import { MenuItems } from "./MenuItems";
import { Link } from "react-router-dom";
import styles from "./Dropdown.module.scss";

const Dropdown = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(!click);
  };

  const menuItemsList = MenuItems.map((item, index) => {
    return (
      <li key={index}>
        <Link
          className={item.cName}
          to={item.path}
          onClick={() => setClick(false)}
        >
          {item.title}
        </Link>
      </li>
    );
  });

  return (
    <>
      <ul
        onClick={handleClick}
        className={click ? styles.dropdownMenuClicked : styles.dropdownMenu}
      >
        {menuItemsList}
      </ul>
    </>
  );
};

export default Dropdown;
