import React from "react";
import { GiHummingbird } from "react-icons/gi";
import { LogoWrapper } from "./Logo.styles";

const Logo: React.FC<{ type: "main" | "second" }> = ({ type }) => {
  return (
    <LogoWrapper type={type}>
      <span>
        <GiHummingbird />
      </span>
      <pre>Caliber</pre>
    </LogoWrapper>
  );
};

export default Logo;
