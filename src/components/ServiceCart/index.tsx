import { motion } from "framer-motion";
import React from "react";
import { useTranslation } from "react-i18next";
import { IServices } from "../Service";
import { Box, Heading, Icon, Text } from "./ServicesCart.styles";

const ServiceCart: React.FC<IServices> = ({ heading, icon, text }) => {
  const { t } = useTranslation();
  return (
    <Box>
      <Animation delay={0.1}>
        <Icon className="service-icon">{icon}</Icon>
      </Animation>
      <Animation delay={0.2}>
        <Heading>{t(heading)}</Heading>
      </Animation>
      <Animation delay={0.3}>
        <Text>{t(text)}</Text>
      </Animation>
    </Box>
  );
};

export default ServiceCart;

const Animation: React.FC<{ children: React.ReactNode; delay: number }> = ({
  children,
  delay,
}) => (
  <motion.div
    initial={{
      y: 20,
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
