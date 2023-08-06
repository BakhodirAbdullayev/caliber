import React from "react";
import { useTranslation } from "react-i18next";
import { IFacts } from "../AboutFacts";
import { Box, Icon, Number, Title } from "./FunFactItem.styles";
import { motion } from "framer-motion";

interface IFunFeactItemProps extends IFacts {
  delay: number;
}

const FunFactItem: React.FC<IFunFeactItemProps> = ({
  icon,
  number,
  title,
  delay,
}) => {
  const { t } = useTranslation();
  return (
    <Animation delay={delay}>
      <Box>
        <Icon>{icon}</Icon>
        <Number>{number}</Number>
        <Title>{t(title)}</Title>
      </Box>
    </Animation>
  );
};

export default FunFactItem;

const Animation: React.FC<{ children: React.ReactNode; delay: number }> = ({
  children,
  delay,
}) => (
  <motion.div
    initial={{
      y: 30,
      opacity: 0,
    }}
    whileInView={{
      y: 0,
      opacity: 1,
    }}
    transition={{
      duration: 0.5,
      delay: delay,
    }}
    viewport={{ once: true }}
  >
    {children}
  </motion.div>
);
