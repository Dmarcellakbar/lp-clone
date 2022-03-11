import React from "react";
import styled from "styled-components";
import { color, space, typography, shadow } from "styled-system";

const Paragraph = styled.p<{
  color?: string;
  lineHeight?: any;
  mb?: any;
  fontWeight?: number | string;
}>`
  margin-bottom: 0;
  font-size: 21px;
  font-weight: ${props => props?.fontWeight || 300 };
  letter-spacing: -0.66px;
  line-height: 38px;
  color: ${props => props.color || "text"};
  line-height: ${props => props.lineHeight || "38px"};
  margin-bottom: ${props => props.mb || "0"};
  ${color};
  ${space};
  ${typography};
  ${shadow};
`;

const ParagraphSmall = styled(Paragraph)`
  font-size: 16px;
  letter-spacing: -0.5px;
  line-height: 28px;
  ${color};
  ${space};
  ${typography};
  ${shadow};
`;

interface TextProps {
  variant?: string | 'small';
  color?: string;
  fontSize?: number | string;
  fontWeight?: number | string;
  lineHeight?: string;
  mb?: number;
  as?: any;
  className?: string;
}
const Text: React.FC<TextProps> = ({ variant, ...props }) => {
  let TextRender;

  switch (variant) {
    case "small":
      TextRender = ParagraphSmall;
      break;
    default:
      TextRender = Paragraph;
  }

  return <TextRender color={props.color} {...props} />;
};

export default Text;
