import React from "react";
import styled from "styled-components";
import { color, space, typography, shadow } from "styled-system";
import { device } from "../../utils";

const SectionTitle = styled.h2<{
  fontSize?: any
  fontWeight?: any
}>`
  font-weight: ${props => props.fontWeight || 700};
  font-size: ${props => props.fontSize?.lg};
  line-height: 54px;
  margin-bottom: 16px;

  @media ${device.sm} {
    font-size: ${props => props.fontSize?.sm};
    line-height: 62px;
  }

  @media ${device.lg} {
    font-size: ${props => props.fontSize?.lg};
    letter-spacing: -0.5px;
    line-height: 70px;
    margin-bottom: 30px;
  }

  ${color};
  ${space};
  ${typography};
  ${shadow};
`;

const HeroTitle = styled(SectionTitle)`
  letter-spacing: -2.81px;
  font-size: ${props => props.fontSize?.lg || '42px'};
  line-height: 56px;
  margin-bottom: 30px;
  color: ${({ theme }) => theme.colors.textHero};

  em {
    color: ${({theme}) => theme.colors.textHeroEm};
    font-style: normal;
  }

  @media ${device.sm} {
    font-size: ${props => props.fontSize?.sm || '40px'};
    line-height: 70px;
  }

  @media ${device.lg} {
    font-size: ${props => props.fontSize?.lg || '40px'};
    line-height: 84px;
  }

  @media ${device.xl} {
    font-size: ${props => props.fontSize?.xl || '72px'};
    line-height: 108px;
  }
`;

const CardTitle = styled.h4`
  font-size: 21px;
  font-weight: 700;
  letter-spacing: -0.66px;
  line-height: 28px;
  ${color};
  ${space};
  ${typography};
  ${shadow};
`;

export interface TitleProps {
  color?: any;
  fontSize?: any | {
    sm?: number
    lg?: number
    default?: number
  };
  variant?: "section" | "hero" | "card";
  mb?: any
  as?: any
  htmlFor?: any
  className?: string
  lineHeight?: any
  fontWeight?: any
}
const Title: React.FC<TitleProps> = ({ variant, ...rest }) => {
  let TitleStyled = SectionTitle;

  switch (variant) {
    case "card":
      TitleStyled = CardTitle;
      break;
    case "hero":
      TitleStyled = HeroTitle;
      break;
    default:
      TitleStyled = SectionTitle;
  }

  return <TitleStyled color="heading" {...rest} />;
};

export default Title;
