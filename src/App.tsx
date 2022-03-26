import React from "react";

import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import s from "./App.module.scss";

function App() {
  return (
    <div className={s.Wrapper}>
      <Navbar />
      <Hero />
    </div>
  );
}

export default App;
