import React from "react";
import clsx from "clsx";

import useMediaQuery from "../../hooks/use-media-query";

import StatsGrid from "./StatsGrid";
import s from "./Hero.module.scss";

const Hero = () => {
  const isMobile = useMediaQuery("(min-width: 940px)");
  const textBlockClass = clsx(
    "mx-6 w-full",
    isMobile ? s.textBlockDesktop : s.textBlockMobile
  );

  return (
    <>
      <img
        className={s.PlanetImage}
        src="https://ucarecdn.com/06b65266-4991-43b2-b78a-e2382a03f859/mars.png"
        alt="mars"
      />
      <div className={s.Contents}>
        <div className={s.Separator}>
          <div className={s.Adventure}>
            <div className={textBlockClass}>
              <h1 className={s.HeroHeading}>ПУТЕШЕСТВИЕ</h1>
              <span className={s.HeroDescription}>на красную планету</span>
            </div>

            <div className="mx-0 mobile:mx-6">
              <button className={s.StartButton}>
                <div className={s.GlowLeft}></div>
                <div className={s.GlowRight}></div>
                <div className={s.Shadow}></div>
                <span className="absolute">Начать путешествие</span>
              </button>

              <div className="hidden tablet:flex">
                <div className={s.FirstLine}></div>
                <div className={s.SecondLine}></div>
              </div>
            </div>
          </div>

          <StatsGrid />
        </div>
      </div>
    </>
  );
};

export default Hero;
