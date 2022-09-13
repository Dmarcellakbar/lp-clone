// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type MailSvgrepoComsvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function MailSvgrepoComsvgIcon(props: MailSvgrepoComsvgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 400 400"}
      height={"1em"}
      width={"1em"}
      style={{
        fill: "currentcolor",

        ...(style || {}),
      }}
      className={classNames("plasmic-default__svg", className)}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M0 127.5v146.719L104.8 206.1 0 127.5zm400 146.719V127.5l-104.8 78.6L400 274.219zM200 277.5l-69.643-52.232L0 310v30h400v-30l-130.357-84.732L200 277.5z"
        }
        fill={"currentColor"}
      ></path>

      <path d={"M0 90l200 150L400 90V60H0v30z"} fill={"currentColor"}></path>
    </svg>
  );
}

export default MailSvgrepoComsvgIcon;
/* prettier-ignore-end */
