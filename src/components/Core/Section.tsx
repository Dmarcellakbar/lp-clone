import React from "react";
import Box from "./Box";

interface SectionProps {
  className?: string;
}
const Section: React.FC<SectionProps> = (props) => {
  return <Box py={[5, null, "80px", 6]} {...props} />;
};

export default Section;
