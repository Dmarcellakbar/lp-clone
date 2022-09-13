// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: CK5Roq2dBGcRPqc72xPE7
// Component: 5sjKOISLoI
import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";

import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/host";

import {
  hasVariant,
  classNames,
  wrapWithClassName,
  createPlasmicElementProxy,
  makeFragment,
  MultiChoiceArg,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  pick,
  omit,
  useTrigger,
  StrictProps,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";
import Navbar from "../../Navbar"; // plasmic-import: kF3SxrRA5T/component

import { useScreenVariants as useScreenVariants_68So83ItnbSuT } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: 68So83itnbSuT/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_cfund_landing_page.module.css"; // plasmic-import: CK5Roq2dBGcRPqc72xPE7/projectcss
import sty from "./PlasmicLogin.module.css"; // plasmic-import: 5sjKOISLoI/css

export type PlasmicLogin__VariantMembers = {};

export type PlasmicLogin__VariantsArgs = {};
type VariantPropType = keyof PlasmicLogin__VariantsArgs;
export const PlasmicLogin__VariantProps = new Array<VariantPropType>();

export type PlasmicLogin__ArgsType = {};
type ArgPropType = keyof PlasmicLogin__ArgsType;
export const PlasmicLogin__ArgProps = new Array<ArgPropType>();

export type PlasmicLogin__OverridesType = {
  root?: p.Flex<"div">;
  navbar?: p.Flex<typeof Navbar>;
  freeBox?: p.Flex<"div">;
  content?: p.Flex<"div">;
  contentWrapper?: p.Flex<"div">;
  h3?: p.Flex<"h3">;
  text?: p.Flex<"div">;
  buttonWrapper?: p.Flex<"div">;
  googlePlay?: p.Flex<"a"> & Partial<LinkProps>;
  appsStore?: p.Flex<"a"> & Partial<LinkProps>;
};

export interface DefaultLoginProps {}

function PlasmicLogin__RenderFunc(props: {
  variants: PlasmicLogin__VariantsArgs;
  args: PlasmicLogin__ArgsType;
  overrides: PlasmicLogin__OverridesType;

  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const $ctx = ph.useDataEnv?.() || {};
  const args = React.useMemo(
    () =>
      Object.assign(
        {},

        props.args
      ),
    [props.args]
  );

  const $props = args;

  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariants_68So83ItnbSuT()
  });

  return (
    <React.Fragment>
      <Head>
        <title>CFund</title>
        <meta name='description' content='The Best Management Firm Any Crypto Investor Can Dream Of' />
      </Head>

      <style>{`
        body {
          margin: 0;
        }
      `}</style>

      <div className={projectcss.plasmic_page_wrapper}>
        <div
          data-plasmic-name={"root"}
          data-plasmic-override={overrides.root}
          data-plasmic-root={true}
          data-plasmic-for-node={forNode}
          className={classNames(
            projectcss.all,
            projectcss.root_reset,
            projectcss.plasmic_default_styles,
            projectcss.plasmic_mixins,
            projectcss.plasmic_tokens,
            sty.root
          )}
        >
          <Navbar
            data-plasmic-name={"navbar"}
            data-plasmic-override={overrides.navbar}
            className={classNames("__wab_instance", sty.navbar)}
          />

          <div
            data-plasmic-name={"freeBox"}
            data-plasmic-override={overrides.freeBox}
            className={classNames(projectcss.all, sty.freeBox)}
          >
            <div
              data-plasmic-name={"content"}
              data-plasmic-override={overrides.content}
              className={classNames(projectcss.all, sty.content)}
            >
              <div
                data-plasmic-name={"contentWrapper"}
                data-plasmic-override={overrides.contentWrapper}
                className={classNames(projectcss.all, sty.contentWrapper)}
              >
                <h3
                  data-plasmic-name={"h3"}
                  data-plasmic-override={overrides.h3}
                  className={classNames(
                    projectcss.all,
                    projectcss.h3,
                    projectcss.__wab_text,
                    sty.h3
                  )}
                >
                  {"Login to your account"}
                </h3>

                <div
                  data-plasmic-name={"text"}
                  data-plasmic-override={overrides.text}
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text
                  )}
                >
                  {
                    "For now, the user dashboard can only be accessed through the Cfund application, which is available in several marketplaces"
                  }
                </div>

                {true ? (
                  <p.Stack
                    as={"div"}
                    data-plasmic-name={"buttonWrapper"}
                    data-plasmic-override={overrides.buttonWrapper}
                    hasGap={true}
                    className={classNames(projectcss.all, sty.buttonWrapper)}
                  >
                    <p.PlasmicLink
                      data-plasmic-name={"googlePlay"}
                      data-plasmic-override={overrides.googlePlay}
                      className={classNames(
                        projectcss.all,
                        projectcss.a,
                        sty.googlePlay
                      )}
                      component={Link}
                      href="https://play.google.com/store/apps/details?id=id.cfund.app"
                      platform={"nextjs"}
                    >
                      <p.PlasmicImg
                        alt={""}
                        className={classNames(sty.img__owFgW)}
                        displayHeight={
                          hasVariant(globalVariants, "screen", "mobileOnly")
                            ? ("40px" as const)
                            : ("55px" as const)
                        }
                        displayMaxHeight={"none" as const}
                        displayMaxWidth={"100%" as const}
                        displayMinHeight={"0" as const}
                        displayMinWidth={"0" as const}
                        displayWidth={"auto" as const}
                        loading={"lazy" as const}
                        src={{
                          src: "/plasmic/cfund_landing_page/images/image3.png",
                          fullWidth: 440,
                          fullHeight: 130,
                          aspectRatio: undefined
                        }}
                      />
                    </p.PlasmicLink>

                    <p.PlasmicLink
                      data-plasmic-name={"appsStore"}
                      data-plasmic-override={overrides.appsStore}
                      className={classNames(
                        projectcss.all,
                        projectcss.a,
                        sty.appsStore
                      )}
                      component={Link}
                      href="https://apps.apple.com/sg/app/cfund/id1580696846"
                      platform={"nextjs"}
                    >
                      <p.PlasmicImg
                        alt={""}
                        className={classNames(sty.img__rKx8)}
                        displayHeight={
                          hasVariant(globalVariants, "screen", "mobileOnly")
                            ? ("40px" as const)
                            : ("55px" as const)
                        }
                        displayMaxHeight={"none" as const}
                        displayMaxWidth={"100%" as const}
                        displayMinHeight={"0" as const}
                        displayMinWidth={"0" as const}
                        displayWidth={"auto" as const}
                        loading={"lazy" as const}
                        src={{
                          src: "/plasmic/cfund_landing_page/images/image19.png",
                          fullWidth: 799,
                          fullHeight: 230,
                          aspectRatio: undefined
                        }}
                      />
                    </p.PlasmicLink>
                  </p.Stack>
                ) : null}
              </div>

              <p.PlasmicImg
                alt={""}
                className={classNames(sty.img___7KfZk)}
                displayHeight={
                  hasVariant(globalVariants, "screen", "mobileOnly")
                    ? ("20rem" as const)
                    : ("40rem" as const)
                }
                displayMaxHeight={"none" as const}
                displayMaxWidth={"100%" as const}
                displayMinHeight={"0" as const}
                displayMinWidth={"0" as const}
                displayWidth={"auto" as const}
                loading={"lazy" as const}
                src={{
                  src: "/plasmic/cfund_landing_page/images/phonePlanetpng2.png",
                  fullWidth: 1081,
                  fullHeight: 1081,
                  aspectRatio: undefined
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: [
    "root",
    "navbar",
    "freeBox",
    "content",
    "contentWrapper",
    "h3",
    "text",
    "buttonWrapper",
    "googlePlay",
    "appsStore"
  ],
  navbar: ["navbar"],
  freeBox: [
    "freeBox",
    "content",
    "contentWrapper",
    "h3",
    "text",
    "buttonWrapper",
    "googlePlay",
    "appsStore"
  ],
  content: [
    "content",
    "contentWrapper",
    "h3",
    "text",
    "buttonWrapper",
    "googlePlay",
    "appsStore"
  ],
  contentWrapper: [
    "contentWrapper",
    "h3",
    "text",
    "buttonWrapper",
    "googlePlay",
    "appsStore"
  ],
  h3: ["h3"],
  text: ["text"],
  buttonWrapper: ["buttonWrapper", "googlePlay", "appsStore"],
  googlePlay: ["googlePlay"],
  appsStore: ["appsStore"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  navbar: typeof Navbar;
  freeBox: "div";
  content: "div";
  contentWrapper: "div";
  h3: "h3";
  text: "div";
  buttonWrapper: "div";
  googlePlay: "a";
  appsStore: "a";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicLogin__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicLogin__VariantsArgs;
    args?: PlasmicLogin__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicLogin__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicLogin__ArgsType, ReservedPropsType> &
    // Specify overrides for each element directly as props
    Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    // Specify props for the root element
    Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: [...PlasmicDescendants[nodeName]],
          internalArgPropNames: PlasmicLogin__ArgProps,
          internalVariantPropNames: PlasmicLogin__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicLogin__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicLogin";
  } else {
    func.displayName = `PlasmicLogin.${nodeName}`;
  }
  return func;
}

export const PlasmicLogin = Object.assign(
  // Top-level PlasmicLogin renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    navbar: makeNodeComponent("navbar"),
    freeBox: makeNodeComponent("freeBox"),
    content: makeNodeComponent("content"),
    contentWrapper: makeNodeComponent("contentWrapper"),
    h3: makeNodeComponent("h3"),
    text: makeNodeComponent("text"),
    buttonWrapper: makeNodeComponent("buttonWrapper"),
    googlePlay: makeNodeComponent("googlePlay"),
    appsStore: makeNodeComponent("appsStore"),

    // Metadata about props expected for PlasmicLogin
    internalVariantProps: PlasmicLogin__VariantProps,
    internalArgProps: PlasmicLogin__ArgProps
  }
);

export default PlasmicLogin;
/* prettier-ignore-end */