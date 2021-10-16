import React from "react";
import Button from "../button/Button";
import data from "../../data/menu";
import "./navigation.css";

function Navigation({ isDesktop }) {
  return (
    <nav className="main-navigation">
      <ul className="main-nav-items">
        {data.map((menuItem) => {
          return (
            <li className="main-nav-item">
              <a href="#" className="main-nav-link">
                {menuItem.name}
              </a>
            </li>
          );
        })}
        <Button isDesktop={isDesktop} />
      </ul>
    </nav>
  );
}

export default Navigation;
