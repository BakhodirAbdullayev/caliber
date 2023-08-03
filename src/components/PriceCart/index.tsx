import React from "react";
import Button from "../Button";
import { IPrice } from "../Service";
import { Body, CartBox, Foot, Head } from "./PriceCart.styles";
import { BsPatchCheck } from "react-icons/bs";
import { useTranslation } from "react-i18next";

const PriceCart: React.FC<IPrice> = ({ name, money, offers, popular }) => {
  const { t } = useTranslation();
  return (
    <>
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
    </>
  );
};

export default PriceCart;
