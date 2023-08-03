import React from "react";
import { Container, Heading, Left, Right, Text } from "./AboutContent.styles";

interface IAboutContentProps {
  heading: string;
  text: string;
  image: string;
  position: "left" | "right";
}

const AboutContent: React.FC<IAboutContentProps> = ({
  heading,
  image,
  text,
  position,
}) => {
  return (
    <Container className="container" left={position === "left"}>
      <Left>
        <Heading>{heading}</Heading>
        <Text>{text}</Text>
      </Left>
      <Right>
        <img src={image} alt="section-photo" />
      </Right>
    </Container>
  );
};

export default AboutContent;
