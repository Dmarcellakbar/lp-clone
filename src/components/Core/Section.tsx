import React from "react";
import Box from "./Box";

interface SectionProps {
  className?: string;
  pt?: any;
  pb?: any
}
const Section: React.FC<SectionProps> = (props) => {
  return <Box py={[5, null, "80px", 5]} {...props} />;
};

export default Section;
