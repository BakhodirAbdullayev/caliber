import styled from "styled-components";
import { responsive } from "../../utils/responsive";

export const Container = styled.div`
  text-align: center;
  padding: 20px;
  color: ${(p) => p.theme.blackPrimary};
  span {
    display: block;
    font-size: 20px;
    font-family: "Courier New", Courier, monospace;
    text-transform: capitalize;
    font-weight: 600;
    color: ${(p) => p.theme.main};
  }
  h2 {
    font-size: 28px;
    font-weight: 500;
    max-width: 500px;
    margin: 20px auto 40px;
    position: relative;
    &::after {
      content: " ";
      position: absolute;
      bottom: -10px;
      left: 50%;
      transform: translate(-50%, 50%);
      width: 70px;
      height: 3px;
      background-color: ${(p) => p.theme.main};
    }
    ${responsive(
      {
        fontSize: "24px",
      },
      500
    )}
  }
  p {
    max-width: 700px;
    font-size: 16px;
    margin: 0 auto;
  }
`;
