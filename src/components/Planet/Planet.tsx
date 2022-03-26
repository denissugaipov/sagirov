import React from "react";
import s from "./Planet.module.scss";

const Planet = () => {
  return (
    <>
      <img
        className={s.PlanetImage}
        src="https://ucarecdn.com/06b65266-4991-43b2-b78a-e2382a03f859/mars.png"
        alt="mars"
      />
    </>
  );
};

export default Planet;
