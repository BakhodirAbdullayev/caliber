import styled from "styled-components";
import { responsive } from "../../utils/responsive";

export const Wrapper = styled.div`
  width: 100%;
  padding: 50px 0;
  position: relative;
  z-index: 10;
  background-color: red;
  .layer {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -2;
    background-color: ${(p) => p.theme.whiteSecondary + "90"};
  }
  &::before {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -3;
    background: url("https://alwadiholding.com/wp-content/uploads/2023/06/Choose-the-Best-B2B-Debt-Management-Company-for-Business-in-UAE-2-scaled.jpg");
    background-size: cover;
  }
  &::after {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    background: linear-gradient(to right bottom, #8722ed, #1f3ad2);
    clip-path: polygon(
      0 100%,
      0 0,
      100% 0,
      62% 4%,
      30% 9%,
      14% 20%,
      4% 50%,
      0 100%,
      38% 97%,
      66% 93%,
      83% 82%,
      97% 62%,
      100% 0,
      100% 100%
    );
  }
`;

export const Container = styled.div`
  color: ${(p) => p.theme.blackPrimary};
  text-align: center;
  padding: 80px 15px;
`;

export const Heading = styled.h2`
  font-size: 26px;
  font-weight: 600;
  letter-spacing: 1px;
  text-transform: capitalize;
  ${responsive(
    {
      fontSize: 22,
    },
    400
  )}
`;
export const Body = styled.div`
  margin-top: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 35px;
  flex-wrap: wrap;
`;
