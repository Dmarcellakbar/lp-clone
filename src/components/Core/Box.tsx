import styled from "styled-components";
import {
  color,
  space,
  layout,
  flexbox,
  grid,
  typography,
  background,
  border,
  position,
  shadow,
} from "styled-system";

const Box = styled.div<{
  py?: any;
  width?: any;
  minWidth?: any;
  height?: any;
  minHeight?: any
  bg?: any;
  borderRadius?: any;
  mr?: any;
  ml?: any;
  mb?: any;
  mx?: any;
  p?: any;
  pr?: any;
  pt?: any;
  pb?: any;
  css?: any;
}>`
  box-sizing: border-box;
  min-width: ${props => props.minWidth || "0"};
  width: ${props => props.width || "auto"};
  height: ${props => props.height || "auto"};
  min-height: ${props => props.minHeight || "0"};
  background-color: ${props => props.bg || "transparent"};
  border-radius: ${props => props.borderRadius || "0"};
  margin-bottom: ${props => props.mb || "0"};
  margin-left:  ${props => props.ml || "0"};
  margin-right: ${props => props.mr || "0"};
  padding: ${props => props.p || "0"};
  padding-right: ${props => props.pr || "0"};
  padding-top: ${props => props.pt || "0"};
  padding-bottom: ${props => props.pb || "0"};
  ${color};
  ${space};
  ${layout};
  ${flexbox};
  ${grid};
  ${typography};
  ${background};
  ${border};
  ${position};
  ${shadow};
  ${props => props.py};
  ${props => props.css}
`;

export default Box;
