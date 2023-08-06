import React from "react";
import { useTranslation } from "react-i18next";
import PortfolioCart from "../PortfolioCart";
import SectionTitle from "../SectionTitle";
import { Wrapper } from "./Portfolio.styles";
import { motion } from "framer-motion";

export interface ICart {
  image: string;
  name: string;
  category: string[];
}
const carts: ICart[] = [
  {
    image:
      "https://colorlib.com/wp/wp-content/uploads/sites/2/awwwards-winning-web-design-of-the-world.jpg",
    name: "awwwards",
    category: ["design", "cms", "website"],
  },
  {
    image: "https://enigmams.com/wp-content/uploads/2022/07/enigma-1.png",
    name: "enigma",
    category: ["crm", "website"],
  },
  {
    image: "https://i.ytimg.com/vi/YMwpdJG8lv0/maxresdefault.jpg",
    name: "ds studio",
    category: ["design", "portfolio", "landing"],
  },
  {
    image:
      "https://a.fsdn.com/con/app/proj/evalo.s/screenshots/1.PNG/1000/auto/1",
    name: "evalo",
    category: ["blog", "crm", "website"],
  },
  {
    image:
      "https://cdn.dribbble.com/users/472201/screenshots/17341835/verdo_01_4x.jpg",
    name: "verdo",
    category: ["personal", "cms", "website"],
  },
  {
    image:
      "https://dwptxtcjzzofa.cloudfront.net/webp/fm4a5rk/vg_website_new_stock-quote_o.webp",
    name: "vangard",
    category: ["crm", "website"],
  },
];

const Portfolio: React.FC = () => {
  const { t } = useTranslation();
  return (
    <>
      <SectionTitle
        heading={t("Explore Our Portfolio of Success")}
        title={t("portfolio")}
      ></SectionTitle>
      <Wrapper className="container">
        {carts.map((c, i) => {
          return i % 3 === 0 ? (
            <Animation key={i} delay={0.15} x={100}>
              <PortfolioCart {...c} />
            </Animation>
          ) : i % 3 === 1 ? (
            <Animation key={i} delay={0.5}>
              <PortfolioCart {...c} />
            </Animation>
          ) : (
            <Animation key={i} delay={0.15} x={-100}>
              <PortfolioCart {...c} />
            </Animation>
          );
        })}
      </Wrapper>
    </>
  );
};

export default Portfolio;
const Animation: React.FC<{
  children: React.ReactNode;
  delay: number;
  x?: number;
}> = ({ children, delay, x }) => (
  <motion.div
    initial={{
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
