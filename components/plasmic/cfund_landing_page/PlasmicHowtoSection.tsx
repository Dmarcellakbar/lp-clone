// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: CK5Roq2dBGcRPqc72xPE7
// Component: yoOdx6-i_B
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

import { useScreenVariants as useScreenVariants_68So83ItnbSuT } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: 68So83itnbSuT/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_cfund_landing_page.module.css"; // plasmic-import: CK5Roq2dBGcRPqc72xPE7/projectcss
import sty from "./PlasmicHowtoSection.module.css"; // plasmic-import: yoOdx6-i_B/css

export type PlasmicHowtoSection__VariantMembers = {};

export type PlasmicHowtoSection__VariantsArgs = {};
type VariantPropType = keyof PlasmicHowtoSection__VariantsArgs;
export const PlasmicHowtoSection__VariantProps = new Array<VariantPropType>();

export type PlasmicHowtoSection__ArgsType = {};
type ArgPropType = keyof PlasmicHowtoSection__ArgsType;
export const PlasmicHowtoSection__ArgProps = new Array<ArgPropType>();

export type PlasmicHowtoSection__OverridesType = {
  root?: p.Flex<"section">;
  h1?: p.Flex<"h1">;
  h3?: p.Flex<"h3">;
  columns?: p.Flex<"div">;
};

export interface DefaultHowtoSectionProps {
  className?: string;
}

function PlasmicHowtoSection__RenderFunc(props: {
  variants: PlasmicHowtoSection__VariantsArgs;
  args: PlasmicHowtoSection__ArgsType;
  overrides: PlasmicHowtoSection__OverridesType;

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
    <p.Stack
      as={"section"}
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      hasGap={true}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        sty.root
      )}
    >
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
        {"Get into Digital Asset Market With Us!"}
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
        {"Onboarding process"}
      </h3>

      <p.Stack
        as={"div"}
        data-plasmic-name={"columns"}
        data-plasmic-override={overrides.columns}
        hasGap={true}
        className={classNames(projectcss.all, sty.columns)}
      >
        <p.Stack
          as={"div"}
          hasGap={true}
          className={classNames(projectcss.all, sty.column__lkj99)}
        >
          <p.PlasmicImg
            alt={""}
            className={classNames(sty.img__im0Cv)}
            displayHeight={"auto" as const}
            displayMaxHeight={"none" as const}
            displayMaxWidth={"100%" as const}
            displayMinHeight={"0" as const}
            displayMinWidth={"0" as const}
            displayWidth={"15rem" as const}
            loading={"lazy" as const}
            src={{
              src: "/plasmic/cfund_landing_page/images/identitypng2.png",
              fullWidth: 464,
              fullHeight: 466,
              aspectRatio: undefined
            }}
          />

          <h5
            className={classNames(
              projectcss.all,
              projectcss.h5,
              projectcss.__wab_text,
              sty.h5__vzCuj
            )}
          >
            {"Registration and Identification"}
          </h5>

          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__bAkzP
            )}
          >
            {
              "Prospective customers can contact us to have a consultation whether investing in digital asset with us aligns with their risk appetite, financial profile, and investment objective. Once they are successfully evaluated and their eligibility confirmed, we will provide them detailed information about the investment."
            }
          </div>
        </p.Stack>

        <p.Stack
          as={"div"}
          hasGap={true}
          className={classNames(projectcss.all, sty.column__uBxE)}
        >
          <p.PlasmicImg
            alt={""}
            className={classNames(sty.img__in0BE)}
            displayHeight={"auto" as const}
            displayMaxHeight={"none" as const}
            displayMaxWidth={"100%" as const}
            displayMinHeight={"0" as const}
            displayMinWidth={"0" as const}
            displayWidth={"15rem" as const}
            loading={"lazy" as const}
            src={{
              src: "/plasmic/cfund_landing_page/images/agreementpng2.png",
              fullWidth: 466,
              fullHeight: 466,
              aspectRatio: undefined
            }}
          />

          <h5
            className={classNames(
              projectcss.all,
              projectcss.h5,
              projectcss.__wab_text,
              sty.h5__dQxRk
            )}
          >
            {"Product Selection and Agreement"}
          </h5>

          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__oNsOe
            )}
          >
            {
              "The next step is to formulate a contractual agreement between CFund and the investor. The investor may select the desired investment product that fit their objective. They will also be informed about the condition, performance objectives, as well as the risk involved. Finally, an agreement between CFund and the investor will be signed under a prepared contract. Finally, the contract between the investor and CFund is prepared and signed."
            }
          </div>
        </p.Stack>

        <p.Stack
          as={"div"}
          hasGap={true}
          className={classNames(projectcss.all, sty.column__gq2Pn)}
        >
          <p.PlasmicImg
            alt={""}
            className={classNames(sty.img__fh0Ig)}
            displayHeight={"auto" as const}
            displayMaxHeight={"none" as const}
            displayMaxWidth={"100%" as const}
            displayMinHeight={"0" as const}
            displayMinWidth={"0" as const}
            displayWidth={"15rem" as const}
            loading={"lazy" as const}
            src={{
              src: "/plasmic/cfund_landing_page/images/aumIconpng3.png",
              fullWidth: 464,
              fullHeight: 474,
              aspectRatio: undefined
            }}
          />

          <h5
            className={classNames(
              projectcss.all,
              projectcss.h5,
              projectcss.__wab_text,
              sty.h5___2DUsE
            )}
          >
            {"Aseets Under Management"}
          </h5>

          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__i0LpX
            )}
          >
            {
              "Once all the paperwork is signed, the investor can deposit their investment. Deposits can be made in fiat or cryptocurrencies. Hence, the fund management starts. The investor will now receive access to a periodic report to keep track of their investment's performance."
            }
          </div>
        </p.Stack>
      </p.Stack>
    </p.Stack>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "h1", "h3", "columns"],
  h1: ["h1"],
  h3: ["h3"],
  columns: ["columns"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "section";
  h1: "h1";
  h3: "h3";
  columns: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicHowtoSection__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicHowtoSection__VariantsArgs;
    args?: PlasmicHowtoSection__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicHowtoSection__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicHowtoSection__ArgsType, ReservedPropsType> &
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
          internalArgPropNames: PlasmicHowtoSection__ArgProps,
          internalVariantPropNames: PlasmicHowtoSection__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicHowtoSection__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicHowtoSection";
  } else {
    func.displayName = `PlasmicHowtoSection.${nodeName}`;
  }
  return func;
}

export const PlasmicHowtoSection = Object.assign(
  // Top-level PlasmicHowtoSection renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    h1: makeNodeComponent("h1"),
    h3: makeNodeComponent("h3"),
    columns: makeNodeComponent("columns"),

    // Metadata about props expected for PlasmicHowtoSection
    internalVariantProps: PlasmicHowtoSection__VariantProps,
    internalArgProps: PlasmicHowtoSection__ArgProps
  }
);

export default PlasmicHowtoSection;
/* prettier-ignore-end */
