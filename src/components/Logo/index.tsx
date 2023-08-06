import React from "react";
import { GiHummingbird } from "react-icons/gi";
import { LogoWrapper } from "./Logo.styles";
import { motion } from "framer-motion";

const Logo: React.FC<{ type: "main" | "second" }> = ({ type }) => {
  return (
    <LogoWrapper type={type}>
      <span>
        <motion.div
          animate={{ rotate: [0, 0, 0, 0, 0, 0, 0, -30, 10, 0, 0, 0] }}
          transition={{ duration: 12, repeat: Infinity }}
        >
          <GiHummingbird />
        </motion.div>
      </span>
      <pre>Caliber</pre>
    </LogoWrapper>
  );
};

export default Logo;
