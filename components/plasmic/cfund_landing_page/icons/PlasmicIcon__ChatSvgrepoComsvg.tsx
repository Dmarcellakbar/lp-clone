// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ChatSvgrepoComsvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function ChatSvgrepoComsvgIcon(props: ChatSvgrepoComsvgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 297 297"}
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

      <g clipPath={"url(#vlsEoT4dka)"} fill={"currentColor"}>
        <path
          d={
            "M206.093 181.516c17.379 0 31.515-14.138 31.515-31.515V54.593c0-17.378-14.136-31.518-31.515-31.518H31.51C14.135 23.075 0 37.215 0 54.593v95.408c0 17.377 14.135 31.515 31.51 31.515h22.933v32.988a9.916 9.916 0 0016.927 7.011l39.991-39.999h94.732z"
          }
        ></path>

        <path
          d={
            "M269.415 105.583h-15.944v44.418c0 26.125-21.253 47.378-47.378 47.378h-88.161l-18.538 18.542c2.235 12.987 13.568 22.902 27.182 22.902h76.762l32.191 32.196a9.914 9.914 0 0016.926-7.011v-25.186h16.961c15.211 0 27.585-12.378 27.585-27.591V133.17c-.001-15.211-12.375-27.587-27.586-27.587z"
          }
        ></path>
      </g>

      <defs>
        <clipPath id={"vlsEoT4dka"}>
          <path fill={"currentColor"} d={"M0 0h297v297H0z"}></path>
        </clipPath>
      </defs>
    </svg>
  );
}

export default ChatSvgrepoComsvgIcon;
/* prettier-ignore-end */
