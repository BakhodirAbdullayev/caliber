import React from "react";
import { ButtonContainer } from "./Button.styles";
import { motion } from "framer-motion";
interface IButton {
  children: React.ReactNode;
  variant: "primary" | "secondary";
  outline?: boolean;
}

const Button: React.FC<IButton> = ({ children, variant, outline }) => {
  return (
    <motion.div
      style={{ width: "100%" }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      <ButtonContainer outline={outline} variant={variant}>
        {children}
      </ButtonContainer>
    </motion.div>
  );
};

export default Button;
