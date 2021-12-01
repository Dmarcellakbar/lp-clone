import React from "react";
import styled from "styled-components";
import { color, space, typography, shadow } from "styled-system";

const SpanStyled = styled.span`
  ${color};
  ${space};
  ${typography};
  ${shadow};
`;

interface SpanProps {
  color?: string;
}
const Span: React.FC<SpanProps> = ({ ...props }) => {
  return <SpanStyled {...props} />;
};

export default Span;
