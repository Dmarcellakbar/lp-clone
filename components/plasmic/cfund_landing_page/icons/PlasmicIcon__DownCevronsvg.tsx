// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type DownCevronsvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function DownCevronsvgIcon(props: DownCevronsvgIconProps) {
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

      <g clipPath={"url(#-xiYCLHb0a)"}>
        <path d={"M48 0H0v48h48V0z"} fill={"#fff"} fillOpacity={".01"}></path>

        <path
          d={"M37 18L25 30 13 18"}
          stroke={"#3180FF"}
          strokeWidth={"4"}
          strokeLinecap={"round"}
          strokeLinejoin={"round"}
        ></path>
      </g>

      <defs>
        <clipPath id={"-xiYCLHb0a"}>
          <path fill={"#fff"} d={"M0 0h48v48H0z"}></path>
        </clipPath>
      </defs>
    </svg>
  );
}

export default DownCevronsvgIcon;
/* prettier-ignore-end */
