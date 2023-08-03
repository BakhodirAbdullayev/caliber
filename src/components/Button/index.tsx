import React from "react";
import { ButtonContainer } from "./Button.styles";
interface IButton {
  children: React.ReactNode;
  variant: "primary" | "secondary";
  outline?: boolean;
}

const Button: React.FC<IButton> = ({ children, variant, outline }) => {
  return (
    <>
      <ButtonContainer outline={outline} variant={variant}>
        {children}
      </ButtonContainer>
    </>
  );
};

export default Button;
