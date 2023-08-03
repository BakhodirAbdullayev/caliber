import { css, CSSObject } from "styled-components";

export const responsive = (props: CSSObject, size: number) => {
  return css`
    @media only screen and (max-width: ${size + "px"}) {
      ${props};
    }
  `;
};
