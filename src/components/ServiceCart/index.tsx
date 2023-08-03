import React from "react";
import { useTranslation } from "react-i18next";
import { IServices } from "../Service";
import { Box, Heading, Icon, Text } from "./ServicesCart.styles";

const ServiceCart: React.FC<IServices> = ({ heading, icon, text }) => {
  const { t } = useTranslation();
  return (
    <Box>
      <Icon className="service-icon">{icon}</Icon>
      <Heading>{t(heading)}</Heading>
      <Text>{t(text)}</Text>
    </Box>
  );
};

export default ServiceCart;
