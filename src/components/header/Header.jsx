import React from "react";
import ArrowIcon from "../arrowicon/ArrowIcon";
import BannerText from "../banner-text/BannerText";
import Hamburger from "../hamburger/Hamburger";
import Logo from "../logo/Logo";
import MobileNav from "../mobilenav/MobileNav";
import Navigation from "../navigation/Navigation";
import "./header.css";

function Header({ setMobileMenu, toggleMobileMenu, isDesktop }) {
  return (
    <>
      <header className="header">
        <div className="header-container">
          {setMobileMenu ? <MobileNav /> : null}

          <Logo />
          <Navigation isDesktop={isDesktop} />
          <Hamburger toggleMobileMenu={toggleMobileMenu} />
        </div>

        <div className="banner-text-container">
          <BannerText />
        </div>
        <ArrowIcon />
      </header>
    </>
  );
}

export default Header;
