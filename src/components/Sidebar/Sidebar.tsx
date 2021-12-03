import React from "react";
import { Link } from "gatsby";

import { Title, Text, Box, Span } from "../Core";

export const CardSidebar: React.FC<{
  p?: any
  pl?: any
}> = ({ children, ...rest }) => (
  <Box bg="ash" borderRadius="10px" mb="30px" p="25px" {...rest}>
    {children}
  </Box>
);

export const Block: React.FC<{
  borderBottom?: any
  pb?: any
}> = ({ children, ...rest }) => (
  <Box borderBottom="1px solid #524f73" pt="20px" pb="13px" {...rest}>
    {children}
  </Box>
);

export const TitleSidebar: React.FC<{
  mb?: any
}> = ({ children, ...rest }) => (
  <Title variant="card" fontSize="24px" color="light" {...rest}>
    {children}
  </Title>
);

interface TitlePostProps {
  link?: string
}
export const TitlePost: React.FC<TitlePostProps> = ({ link = "/", children, ...rest }) => (
  <Title variant="card" fontSize="16px" mb={0} {...rest}>
    <Link to={link}>
      <Span color="light">{children}</Span>
    </Link>
  </Title>
);

interface DateProps {
  link?: string
}
export const Date: React.FC<DateProps> = ({ link = "/", children, ...rest }) => (
  <Text color="lightShade" fontSize="14px" {...rest}>
    {children}
  </Text>
);

export const CatList: React.FC = ({ children, ...rest }) => (
  <ul
    style={{
      listStyle: 'none',
      margin: 0,
      padding: 0
    }}
    {...rest}
  >
    {children}
  </ul>
);

interface CatListItemProps {
  link?: string;
  numPosts?: number;
  post?: any
  className?: string
}
export const CatListItem: React.FC<CatListItemProps> = ({
  link = "/",
  numPosts = 20,
  children,
  ...rest
}) => (
  <li
    {...rest}
    style={{
      marginBottom: '13px'
    }}
  >
    <Link to={link}>
      <Span color="light">{children}</Span>{" "}
      <Span color="lightShade">- {numPosts} Posts</Span>
    </Link>
  </li>
);
