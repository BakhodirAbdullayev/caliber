import React from "react";
import { ICart } from "../Portfolio";
import { CartBox, Details } from "./PortfolioCart.styles";

const PortfolioCart: React.FC<ICart> = ({ category, image, name }) => {
  return (
    <>
      <CartBox bg={image} href={image} target="_blank">
        <Details>
          <h2>{name}</h2>
          <div className="tags">
            {category.map((c, i) => (
              <span key={i}>{c}</span>
            ))}
          </div>
        </Details>
      </CartBox>
    </>
  );
};

export default PortfolioCart;
