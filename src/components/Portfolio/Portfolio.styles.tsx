import styled from "styled-components";
import { responsive } from "../../utils/responsive";

export const Wrapper = styled.div`
  margin-top: 70px;
  padding: 10px 10px 20px;
  display: grid;
  justify-content: center;
  align-items: center;
  gap: 35px;
  grid-template-columns: repeat(3, 1fr);
  overflow: hidden;
  ${responsive(
    {
      gridTemplateColumns: "repeat(2, 1fr)",
    },
    950
  )}
  ${responsive(
    {
      gridTemplateColumns: "repeat(1, minmax(280px, 480px))",
    },
    650
  )}
`;
