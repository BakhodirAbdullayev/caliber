import React from "react";
import { Container } from "./SectionTitle.styles";

interface ISectionTitleProps {
  children?: React.ReactNode;
  heading: string;
  title: string;
}

const SectionTitle: React.FC<ISectionTitleProps> = ({
  children,
  heading,
  title,
}) => {
  return (
    <Container className="container">
      <span>{title}</span>
      <h2>{heading}</h2>
      {children ? <p>{children}</p> : null}
    </Container>
  );
};

export default SectionTitle;
