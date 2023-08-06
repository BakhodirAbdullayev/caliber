import styled from "styled-components";
import { responsive } from "../../utils/responsive";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 40px;
  padding: 90px 20px;
  overflow: hidden;
  ${responsive(
    {
      flexDirection: "column",
      justifyContent: "center",
    },
    850
  )}
`;

export const Left = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 20px;
  max-width: 600px;
  width: 100%;
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
    850
  )}
`;
export const Heading = styled.h1`
  font-size: 45px;
  font-weight: 600;
  ${responsive(
    {
      fontSize: "38px",
    },
    900
  )}

  ${responsive(
    {
      fontSize: "34px",
    },
    450
  )}
`;
export const Text = styled.p`
  font-size: 18px;
  line-height: 1.5;
  opacity: 0.9;
  max-width: 500px;
  font-weight: 400;
`;
export const BtnGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  a {
    ${responsive(
      {
        display: "block",
        width: "100%",
      },
      480
    )}
  }
  ${responsive(
    {
      flexDirection: "column",
      width: "100%",
    },
    480
  )}
`;

export const Right = styled.div`
  width: 100%;
  img {
    /* max-width: 500px; */
    width: 100%;
    margin-left: auto;
    object-fit: cover;
  }
  ${responsive(
    {
      width: "auto",
      maxWidth: "600px",
    },
    850
  )}
`;
