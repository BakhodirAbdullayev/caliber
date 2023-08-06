import React from "react";
import { Container, Heading, Left, Right, Text } from "./AboutContent.styles";
import { motion } from "framer-motion";

interface IAboutContentProps {
  heading: string;
  text: string;
  image: string;
  position: "left" | "right";
  xValue: number;
}

const AboutContent: React.FC<IAboutContentProps> = ({
  heading,
  image,
  text,
  position,
  xValue,
}) => {
  return (
    <Container className="container" left={position === "left"}>
      <Left>
        <Animation delay={0.2} y={30}>
          <Heading>{heading}</Heading>
        </Animation>
        <Animation delay={0.3} y={30}>
          <Text>{text}</Text>
        </Animation>
      </Left>
      <Animation delay={0.2} x={xValue}>
        <Right>
          <img src={image} alt="section-photo" />
        </Right>
      </Animation>
    </Container>
  );
};

export default AboutContent;
const Animation: React.FC<{
  children: React.ReactNode;
  delay: number;
  x?: number;
  y?: number;
}> = ({ children, delay, x, y }) => (
  <motion.div
    initial={{
      y: y ? y : 0,
      x: x ? x : 0,
      opacity: 0,
    }}
    whileInView={{
      y: 0,
      x: 0,
      opacity: 1,
    }}
    transition={{
      duration: 0.6,
      delay: delay,
    }}
    viewport={{ once: true }}
  >
    {children}
  </motion.div>
);
