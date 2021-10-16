import React from "react";
import menu from "../../data/menu";
import Button from "../button/Button";
import "./mobilenav.css";

function MobileNav() {
  return (
    <nav className="menu">
      <ul className="menu-items">
        {menu.map((menuItem) => (
          <li key={menuItem.id}>
            <a href="#" className="menu-link">
              {menuItem.name}
            </a>
          </li>
        ))}
        <Button />
      </ul>
    </nav>
  );
}

export default MobileNav;
