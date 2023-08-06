import styled from "styled-components";
import { responsive } from "../../utils/responsive";

export const Box = styled.div`
  margin-top: 80px;
  display: grid;
  justify-content: center;
  align-items: center;
  gap: 30px;
  grid-template-columns: repeat(3, minmax(250px, 350px));
  text-align: center;
  & > div:nth-child(even) {
    .service-icon {
      color: ${(p) => p.theme.second};
    }
  }
  ${responsive(
    {
      gap: 35,
      gridTemplateColumns: "repeat(2, minmax(250px, 350px))",
    },
    850
  )}
  ${responsive(
    {
      gridTemplateColumns: "repeat(1, minmax(250px, 380px))",
    },
    600
  )}
`;
export const Pricing = styled.div`
  overflow-y: hidden;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  gap: 25px;
  margin-top: 90px;
  ${responsive(
    {
      flexWrap: "wrap",
      gap: 45,
      justifyContent: "center",
    },
    950
  )}
`;
