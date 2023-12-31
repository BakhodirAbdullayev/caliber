import React from "react";
import Logo from "../Logo";
import { AiOutlineLine } from "react-icons/ai";
import { motion } from "framer-motion";
import {
  Column,
  FooterWrapper,
  Heading,
  Text,
  SocialLink,
  SocialLinks,
  Copyright,
} from "./Footer.styles";
import {
  FaRegCopyright,
  FaInstagram,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaGooglePlusG,
  FaYoutube,
} from "react-icons/fa";
import { useTranslation } from "react-i18next";
const socialLinks: { icon: React.ReactNode; link: string }[] = [
  {
    icon: <FaFacebookF />,
    link: "https://facebook.com",
  },
  {
    icon: <FaInstagram />,
    link: "https://instagram.com",
  },
  {
    icon: <FaTwitter />,
    link: "https://twitter.com",
  },
  {
    icon: <FaLinkedinIn />,
    link: "https://linkedin.com",
  },
  {
    icon: <FaYoutube />,
    link: "https://youtube.com",
  },
  {
    icon: <FaGooglePlusG />,
    link: "https://google.com",
  },
];

const Footer: React.FC = () => {
  const { t } = useTranslation();
  return (
    <FooterWrapper>
      <div className="container">
        <Animation y={40} delay={0.3}>
          <Column>
            <div className="logo">
              <Logo type="second" />
            </div>
            <Text>
              {t(
                "Our mission is to empower your business with cutting-edge IT services, ensuring you outshine your competition and seize new opportunities for growth."
              )}
            </Text>
          </Column>
        </Animation>
        <Animation y={40} delay={0.4}>
          <Column>
            <Heading>{t("Useful links")}</Heading>
            <a className="link" href="#home">
              {t("home")}
            </a>
            <a className="link" href="#about">
              {t("about")}
            </a>
            <a className="link" href="#services">
              {t("services")}
            </a>
            <a className="link" href="#portfolio">
              {t("portfolio")}
            </a>
            <a className="link" href="#contact">
              {t("contact")}
            </a>
          </Column>
        </Animation>
        <Animation y={40} delay={0.5}>
          <Column className="social">
            <Heading>{t("Follow us")}</Heading>
            <SocialLinks>
              {socialLinks.map((s, i) => (
                <SocialLink key={i} href={s.link} target="_blank">
                  {s.icon}
                </SocialLink>
              ))}
            </SocialLinks>
          </Column>
        </Animation>
      </div>
      <Animation delay={0.4} y={20}>
        <Copyright>
          <div>
            <i>
              <FaRegCopyright />
            </i>
            2020 - {new Date().getFullYear()} | Copyright
            <AiOutlineLine />
            <p>Caliber.</p>
          </div>
          <div>{t("All rights reserved")}</div>
        </Copyright>
      </Animation>
    </FooterWrapper>
  );
};

export default Footer;
const Animation: React.FC<{
  children: React.ReactNode;
  delay: number;
  y: number;
}> = ({ children, delay, y }) => (
  <motion.div
    initial={{
      y: y,
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
