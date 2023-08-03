import styled from "styled-components";
import { responsive } from "../../utils/responsive";

export const Container = styled.div<{ left: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 40px;
  margin: 100px 0;
  padding: 20px;
  flex-direction: ${(p) => (p.left ? "row-reverse" : "row")};
  ${responsive(
    {
      flexDirection: "column",
      justifyContent: "center",
    },
    780
  )}
`;

export const Left = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 20px;
  max-width: 600px;
  width: 50%;
  color: ${(p) => p.theme.blackPrimary};
  ${responsive(
    {
      width: "auto",
    },
    900
  )}
  ${responsive(
    {
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
      textAlign: "center",
      gap: "35px",
    },
    780
  )}
`;
export const Heading = styled.h1`
  font-size: 28px;
  font-weight: 600;
`;
export const Text = styled.p`
  font-size: 16px;
  line-height: 1.5;
  opacity: 0.9;
  max-width: 500px;
  font-weight: 400;
`;

export const Right = styled.div`
  width: 50%;
  max-width: 550px;
  position: relative;
  z-index: 2;
  img {
    width: 100%;
    margin-left: auto;
    object-fit: cover;
  }
  ${responsive(
    {
      width: "auto",
      maxWidth: "600px",
    },
    900
  )}
  &::after {
    content: "";
    width: 100%;
    height: calc(100% - 5px);
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    background-color: ${(p) => p.theme.whiteSecondary};
    opacity: 0.6;
    border-radius: 5px;
  }
`;
