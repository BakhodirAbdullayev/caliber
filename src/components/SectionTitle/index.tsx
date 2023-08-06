import React from "react";
import { Container } from "./SectionTitle.styles";
import { motion } from "framer-motion";

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
      <AnimationDiv delay={0.2}>
        <span>{title}</span>
      </AnimationDiv>
      <AnimationDiv delay={0.3}>
        <h2>{heading}</h2>
      </AnimationDiv>
      {children ? (
        <AnimationDiv delay={0.4}>
          <p>{children}</p>
        </AnimationDiv>
      ) : null}
    </Container>
  );
};

export default SectionTitle;

const AnimationDiv: React.FC<{ children: React.ReactNode; delay: number }> = ({
  children,
  delay,
}) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 30,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
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
};
