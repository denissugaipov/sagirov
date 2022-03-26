import React from "react";
import useMediaQuery from "../../hooks/use-media-query";
import s from "./Grid.module.scss";
import { useQuery } from "react-query";

interface GridProps {
  header: string;
  value: string;
  footer: string;
}

const Grid = () => {
  const isMobile = useMediaQuery("(min-width: 940px)");
  const { isLoading, error, data } = useQuery("repoData", () =>
    fetch(
      "https://cdn.contentful.com/spaces/xx8e0o49dnr9/environments/master/entries/1ZgQ1ZGHOKfNeQQYW56Tci?access_token=aLNnWaTINSZx2qytytYeAynU0YscNShPsLX0wIBdZy4"
    ).then((res) => res.json())
  );

  if (isLoading) {
    return <h1>loading...</h1>;
  }

  if (error) {
    return <h1>something goes wrong!</h1>;
  }

  return (
    <div
      className={`${isMobile ? s.GridForDesktop : "text-white"} ${s.GridDiv}`}
    >
      {data.fields.griddata.map((e: GridProps, i: number) => {
        return (
          <GridItem
            key={i}
            header={e.header}
            value={e.value}
            footer={e.footer}
          />
        );
      })}
    </div>
  );
};

const GridItem = (props: GridProps) => {
  return (
    <div className={s.GridItem}>
      <p>{props.header}</p>
      <div className="flex flex-col items-center">
        <h1 className="text-6xl font-bold">{props.value}</h1>
        <span>{props.footer}</span>
      </div>
    </div>
  );
};
export default Grid;
