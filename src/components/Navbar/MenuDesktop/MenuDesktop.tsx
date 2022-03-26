import React from "react";
import routes from "../routes";
const MenuDesktop = () => {
  return (
    <>
      {routes.map((e, i) => {
        return (
          <a
            href={e.href}
            key={i}
            className="border-gray-400 text-white transition-all hover:border-b-[0.5px] hover:text-gray-400"
          >
            {e.name}
          </a>
        );
      })}
    </>
  );
};
export default MenuDesktop;
