import React from "react";
import s from "./Navbar.module.scss";
import MenuMobile from "./MenuMobile/MenuMobile";
import MenuDesktop from "./MenuDesktop/MenuDesktop";
import useMediaQuery from "../../hooks/use-media-query";

const Navbar = () => {
  const isDesktop = useMediaQuery("(min-width: 1100px)");
  return (
    <>
      <div className={s.NavbarContainer}>
        <div className={s.NavbarContent}>
          <img
            src="https://ucarecdn.com/7d456e66-9f79-4ea9-8f2f-6f09eb06d472/logo.png"
            alt="logo"
            className={isDesktop ? "h-min" : "h-16"}
          />
          {isDesktop ? <MenuDesktop /> : <MenuMobile />}
        </div>
      </div>
    </>
  );
};

export default Navbar;
