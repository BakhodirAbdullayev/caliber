import React from "react";
import Image from "../../utils/images/showcase.svg";
import Button from "../Button";
import { HiMiniPlay } from "react-icons/hi2"
import { useTranslation } from "react-i18next";
import {
  BtnGroup,
  Container,
  Heading,
  Left,
  Right,
  Text,
} from "./Showcase.styles";

const Showcase: React.FC = () => {
  const { t } = useTranslation();
  return (
    <Container className="container">
      <Left>
        <Heading>{t("Make your business more profitable")}</Heading>
        <Text>
          {t(
            "Our mission is to empower your business with cutting-edge IT services, ensuring you outshine your competition and seize new opportunities for growth."
          )}
        </Text>
        <BtnGroup>
          <a href="#">
            <Button variant="primary">{t("Get Started")}</Button>
          </a>
          <a href="#">
            <Button variant="secondary">
              <span>
                <HiMiniPlay />
              </span>
              {t("Watch Our Video")}
            </Button>
          </a>
        </BtnGroup>
      </Left>
      <Right>
        <img src={Image} alt="showcase" />
      </Right>
    </Container>
  );
};

export default Showcase;
