import React from "react";
import Button from "../Button";
import { IPrice } from "../Service";
import { Body, CartBox, Foot, Head } from "./PriceCart.styles";
import { BsPatchCheck } from "react-icons/bs";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

interface IPriceCartProps extends IPrice {
  x?: number;
  y?: number;
}

const PriceCart: React.FC<IPriceCartProps> = ({
  name,
  money,
  offers,
  popular,
  x,
  y,
}) => {
  const { t } = useTranslation();
  return (
    <Animation x={x} y={y} delay={0.3}>
      <CartBox popular={popular}>
        {popular ? (
          <div className="ribbon">
            <span>{t("popular")}</span>
          </div>
        ) : null}

        <Head>
          <h5>{name}</h5>
          <h2>${money}</h2>
          <p>{t("per month")}</p>
        </Head>
        <Body>
          {offers.map((o, i) => (
            <li key={i}>
              <span>
                <BsPatchCheck />
              </span>{" "}
              {t(o)}
            </li>
          ))}
        </Body>
        <Foot>
          <Button
            variant={popular ? "secondary" : "primary"}
            outline={!popular}
          >
            {t("Free 15 day trial")}
          </Button>
        </Foot>
      </CartBox>
    </Animation>
  );
};

export default PriceCart;
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
