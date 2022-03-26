import React from "react";
import Grid from "./components/Grid/Grid";
import Navbar from "./components/Navbar/Navbar";
import Planet from "./components/Planet/Planet";
import s from "./App.module.scss";
import useMediaQuery from "./hooks/use-media-query";
function App() {
  const isMobile = useMediaQuery("(min-width: 940px)");
  return (
    <div className={s.Container}>
      <Navbar />
      <Planet />
      <div className={s.Contents}>
        <div className={s.Separator}>
          <div className={s.Adventure}>
            <div
              className={`${
                isMobile ? s.textBlockDesktop : s.textBlockMobile
              }  mx-6 w-full`}
            >
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
          <Grid />
        </div>
      </div>
    </div>
  );
}

export default App;
