import React from "react";
import { useTranslation } from "react-i18next";
import { ICarts } from "../Contact";
import { Body, CartWrapper, Icon } from "./ContactCart.styles";

const ContactCart: React.FC<ICarts> = ({ icon, name, infos }) => {
  const { t } = useTranslation();
  return (
    <>
      <CartWrapper>
        <Icon className="icon">{icon}</Icon>
        <Body>
          <h2>{t(name)}</h2>
          {infos.map((info, idx) => (
            <p key={idx}>
              <a href={info.link}>{info.text}</a>
            </p>
          ))}
        </Body>
      </CartWrapper>
    </>
  );
};

export default ContactCart;
