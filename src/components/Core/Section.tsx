import React from "react";
import Box from "./Box";

interface SectionProps {
  className?: string;
  mt?: any;
  pt?: any;
  pb?: any;
  bg?: any;
  id?: any
}
const Section: React.FC<SectionProps> = (props) => {
  return <Box py={[5, null, "80px", 5]} {...props} />;
};

export default Section;
