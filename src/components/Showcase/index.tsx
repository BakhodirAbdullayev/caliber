import React from "react";
import Image from "../../utils/images/showcase.svg";
import Button from "../Button";
import { HiMiniPlay } from "react-icons/hi2";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
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
      {
        <motion.div
          initial={{ x: "-200px", opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{
            duration: 0.8,
            ease: "easeInOut",
            delay: 0.3,
          }}
          viewport={{ once: true }}
        >
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
        </motion.div>
      }
      {
        <motion.div
          initial={{ x: "200px", opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.3,
            ease: "easeInOut",
          }}
          viewport={{ once: true }}
        >
          <Right>
            <img src={Image} alt="showcase" />
          </Right>
        </motion.div>
      }
    </Container>
  );
};

export default Showcase;
