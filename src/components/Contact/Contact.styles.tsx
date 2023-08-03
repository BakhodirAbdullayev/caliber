import styled from "styled-components";
import { responsive } from "../../utils/responsive";

export const CartsWrapper = styled.div`
  margin-top: 50px;
  display: grid;
  /* align-items: center; */
  justify-content: space-evenly;
  grid-template-columns: repeat(3, minmax(270px, 370px));
  gap: 30px;
  & > div:nth-child(3) {
    ${responsive(
      {
        gridColumn: "span 2",
        // grid-row: 'span 2'
      },
      900
    )}
    ${responsive(
      {
        gridColumn: "span 1",
        // grid-row: 'span 2'
      },
      600
    )}
  }
  ${responsive(
    {
      gridTemplateColumns: "repeat(2, minmax(270px, 350px))",
      justifyContent: "center",
    },
    900
  )}
  ${responsive(
    {
      gridTemplateColumns: "repeat(1, minmax(270px, 450px))",
    },
    600
  )}
`;

export const Details = styled.div`
  margin-top: 80px;
  display: grid;
  grid-template-columns: repeat(2, minmax(300px, 600px));
  justify-content: center;
  gap: 40px;
  ${responsive(
    {
      gridTemplateColumns: "repeat(1, minmax(280px, 610px))",
    },
    700
  )}
`;

export const FormWrapper = styled.div``;
export const Map = styled.div`
  width: 100%;
  border-radius: 5px;
  background-color: ${(p) => p.theme.blackSecondary};
  iframe {
    border-radius: 5px;
  }
  ${responsive(
    {
      height: 300,
    },
    700
  )}
`;
