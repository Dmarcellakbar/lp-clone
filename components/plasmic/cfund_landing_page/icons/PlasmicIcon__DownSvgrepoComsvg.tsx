// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type DownSvgrepoComsvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function DownSvgrepoComsvgIcon(props: DownSvgrepoComsvgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 48 48"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path fill={"#fff"} fillOpacity={".01"} d={"M0 0h48v48H0z"}></path>

      <path
        d={"M37 18L25 30 13 18"}
        stroke={"#000"}
        strokeWidth={"4"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default DownSvgrepoComsvgIcon;
/* prettier-ignore-end */
