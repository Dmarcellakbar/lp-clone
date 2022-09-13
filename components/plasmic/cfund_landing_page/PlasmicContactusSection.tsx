// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: CK5Roq2dBGcRPqc72xPE7
// Component: jRkQsk9sE1
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

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_cfund_landing_page.module.css"; // plasmic-import: CK5Roq2dBGcRPqc72xPE7/projectcss
import sty from "./PlasmicContactusSection.module.css"; // plasmic-import: jRkQsk9sE1/css

import ChatSvgrepoComsvgIcon from "./icons/PlasmicIcon__ChatSvgrepoComsvg"; // plasmic-import: Fv9ig3w75f/icon
import MailSvgrepoComsvgIcon from "./icons/PlasmicIcon__MailSvgrepoComsvg"; // plasmic-import: PrpJCP86KL/icon

export type PlasmicContactusSection__VariantMembers = {};

export type PlasmicContactusSection__VariantsArgs = {};
type VariantPropType = keyof PlasmicContactusSection__VariantsArgs;
export const PlasmicContactusSection__VariantProps =
  new Array<VariantPropType>();

export type PlasmicContactusSection__ArgsType = {};
type ArgPropType = keyof PlasmicContactusSection__ArgsType;
export const PlasmicContactusSection__ArgProps = new Array<ArgPropType>();

export type PlasmicContactusSection__OverridesType = {
  root?: p.Flex<"div">;
  h1?: p.Flex<"h1">;
  h3?: p.Flex<"h3">;
};

export interface DefaultContactusSectionProps {
  className?: string;
}

function PlasmicContactusSection__RenderFunc(props: {
  variants: PlasmicContactusSection__VariantsArgs;
  args: PlasmicContactusSection__ArgsType;
  overrides: PlasmicContactusSection__OverridesType;

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

  return (
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
      <div className={classNames(projectcss.all, sty.freeBox___5QrZd)}>
        <h1
          data-plasmic-name={"h1"}
          data-plasmic-override={overrides.h1}
          className={classNames(
            projectcss.all,
            projectcss.h1,
            projectcss.__wab_text,
            sty.h1
          )}
        >
          {"Need more information?"}
        </h1>

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
          {"Contact Us"}
        </h3>

        {true ? (
          <p.Stack
            as={"div"}
            hasGap={true}
            className={classNames(projectcss.all, sty.freeBox__kVuAd)}
          >
            <p.Stack
              hasGap={true}
              className={classNames(
                projectcss.all,
                projectcss.a,
                sty.link___177Vx
              )}
              platform={"nextjs"}
              onClick={() => {
                if (typeof window !== "undefined") {
                  window.$crisp.push(['do', 'chat:open'])
                }
               }}
             
            >
              <ChatSvgrepoComsvgIcon
                className={classNames(projectcss.all, sty.svg__zfeN0)}
                role={"img"}
              />

              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__ihBtk
                )}
              >
                {"Chat with Us"}
              </div>
            </p.Stack>

            <p.Stack
              as={p.PlasmicLink}
              hasGap={true}
              className={classNames(
                projectcss.all,
                projectcss.a,
                sty.link__xNymu
              )}
              component={Link}
              href={"mailto:cs@cfund.id" as const}
              platform={"nextjs"}
            >
              <MailSvgrepoComsvgIcon
                className={classNames(projectcss.all, sty.svg__r0W0J)}
                role={"img"}
              />

                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__cm2I
                  )}
                >
                  {"Send Email"}
                </div>
            </p.Stack>
          </p.Stack>
        ) : null}
      </div>
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "h1", "h3"],
  h1: ["h1"],
  h3: ["h3"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  h1: "h1";
  h3: "h3";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicContactusSection__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicContactusSection__VariantsArgs;
    args?: PlasmicContactusSection__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicContactusSection__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicContactusSection__ArgsType, ReservedPropsType> &
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
          internalArgPropNames: PlasmicContactusSection__ArgProps,
          internalVariantPropNames: PlasmicContactusSection__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicContactusSection__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicContactusSection";
  } else {
    func.displayName = `PlasmicContactusSection.${nodeName}`;
  }
  return func;
}

export const PlasmicContactusSection = Object.assign(
  // Top-level PlasmicContactusSection renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    h1: makeNodeComponent("h1"),
    h3: makeNodeComponent("h3"),

    // Metadata about props expected for PlasmicContactusSection
    internalVariantProps: PlasmicContactusSection__VariantProps,
    internalArgProps: PlasmicContactusSection__ArgProps
  }
);

export default PlasmicContactusSection;
/* prettier-ignore-end */
