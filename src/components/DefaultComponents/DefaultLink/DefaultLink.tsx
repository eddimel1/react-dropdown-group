import React from "react";
import { FC, memo } from "react";
import classes from "./DefaultLink.module.scss";
type Props = {
  path: string;
  label: string;
};


export const DefaultLink: FC<Props> = memo(({ path, label }) => {
  const linkClickHandler = (path: string) => {
    window.location.assign(path);
  };
  return (
    <div
      onClick={() => linkClickHandler(path)}
      className={classes.linkContainer}
    >
      <span className={classes.link}>{label}</span>
    </div>
  );
});
