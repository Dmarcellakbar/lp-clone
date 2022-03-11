import React from "react";
import { Link } from "gatsby";

// import imgL1Logo from "../../assets/image/png/l1-logo.png";
// import imgL1LogoWhite from "../../assets/image/png/logo-white.png";
import logo from "../../assets/image/cfund/logo.png";
import logoWhite from '../../assets/image/cfund/logo-white.png';

interface LogoProps {
  white?: boolean
  height?: string
  className?: string
  onClick?: () => void
}
const Logo: React.FC<LogoProps> = ({ white, height, className = "", ...rest }) => {
  return (
    <Link to="/" className={`${className}`} {...rest}>
      {white ? (
        <img src={logoWhite} alt="" />
      ) : (
        <img src={logo} alt="" />
      )}
    </Link>
  );
};

export default Logo;
