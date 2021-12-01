import React from "react";
import styled from "styled-components";
import { color, space, typography, shadow } from "styled-system";
import { device } from "../../utils";

const SectionTitle = styled.h2`
  font-weight: 700;
  letter-spacing: -2.5px;
  font-size: 40px;
  line-height: 54px;
  margin-bottom: 16px;

  @media ${device.sm} {
    font-size: 50px;
    line-height: 62px;
  }

  @media ${device.lg} {
    font-size: 60px;
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
  font-size: 40px;
  line-height: 56px;
  margin-bottom: 30px;

  em {
    color: ${({theme}) => theme.colors.primary};
    font-style: normal;
  }

  @media ${device.sm} {
    font-size: 40px;
    line-height: 70px;
  }

  @media ${device.lg} {
    font-size: 40px;
    line-height: 84px;
  }

  @media ${device.xl} {
    font-size: 50px;
    line-height: 50px;
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

interface TitleProps {
  variant?: "section" | "hero" | "card";
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
