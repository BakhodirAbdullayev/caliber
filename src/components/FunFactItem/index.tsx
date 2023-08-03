import React from "react";
import { useTranslation } from "react-i18next";
import { Box, Icon, Number, Title } from "./FunFactItem.styles";

interface IFunFeactItemProps {
  icon: React.ReactNode;
  number: string;
  title: string;
}

const FunFactItem: React.FC<IFunFeactItemProps> = ({ icon, number, title }) => {
  const { t } = useTranslation();
  return (
    <Box>
      <Icon>{icon}</Icon>
      <Number>{number}</Number>
      <Title>{t(title)}</Title>
    </Box>
  );
};

export default FunFactItem;
