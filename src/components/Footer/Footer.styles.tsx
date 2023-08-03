import styled from "styled-components";
import { responsive } from "../../utils/responsive";

export const FooterWrapper = styled.footer`
  padding: 100px 10px 50px;
  margin-top: -60px;
  background: linear-gradient(to bottom, #2c6a63, #1f431f, #121822);
  .container {
    padding-top: 40px;
    border-top: 2px solid ${(p) => p.theme.blackSecondary};
    color: ${(p) => p.theme.blackPrimary};
    display: grid;
    justify-content: space-between;
    align-items: flex-start;
    grid-template-columns: 3fr 1.5fr 2fr;
    gap: 30px;
    ${responsive(
      {
        gridTemplateColumns: "2fr 1fr",
        ".social": {
          gridColumn: "span 2",
          alignItems: "center",
          "&>div": { maxWidth: "100%", gridTemplateColumns: "repeat(6, 50px)" },
        },
      },
      800
    )}
    ${responsive(
      {
        gridTemplateColumns: "1fr",
        textAlign: "center",
        "&>div": {
          alignItems: "center",
        },
        ".social": {
          gridColumn: "span 1",
          "&>div": {
            maxWidth: "100%",
            gridTemplateColumns: "repeat(3, 50px)",
            gap: 45,
          },
        },
      },
      500
    )}
  }
`;

export const Column = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 10px;
  .logo {
    max-width: 190px;
    position: relative;
    margin-bottom: 20px;
    &::after {
      content: "";
      width: 170px;
      height: 2px;
      background-color: ${(p) => p.theme.second};
      position: absolute;
      bottom: -3px;
      left: 20px;
    }
  }
  .link {
    display: block;
    padding-right: 5px;
    width: max-content;
    text-transform: uppercase;
    font-size: 17px;
    font-weight: 500;
    margin-bottom: 5px;
    position: relative;
    transition: 0.3s;
    &::after {
      transition: 0.3s;
      content: "";
      width: 0;
      height: 2px;
      background-color: ${(p) => p.theme.main};
      position: absolute;
      bottom: -3px;
      left: 0;
    }
    &:hover,
    &:focus-visible {
      outline: none;
      color: ${(p) => p.theme.main};
      &::after {
        width: 100%;
      }
    }
  }
`;
export const Heading = styled.h3`
  font-size: 22px;
  padding-top: 10px;
  margin-bottom: 20px;
`;

export const Text = styled.p`
  max-width: 470px;
  padding-left: 20px;
  color: ${(p) => p.theme.blackPrimary + "de"};
  font-size: 18px;
  font-weight: 500;
`;

export const SocialLinks = styled.div`
  max-width: 200px;
  display: grid;
  align-items: center;
  gap: 20px;
  grid-template-columns: repeat(3, 50px);
`;
export const SocialLink = styled.a`
  width: 50px;
  height: 50px;
  display: grid;
  place-items: center;
  font-size: 20px;
  color: ${(p) => p.theme.main};
  border-radius: 50%;
  border: 1px solid ${(p) => p.theme.main};
  transition: 0.4s;
  &:hover {
    background-color: ${(p) => p.theme.main};
    color: ${(p) => p.theme.blackPrimary};
  }
`;

export const Copyright = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin-top: 30px;
  font-size: 16px;
  color: ${(p) => p.theme.blackSecondary};
  & > div {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
  }
  i,
  p {
    font-size: 18px;
    color: ${(p) => p.theme.second};
    display: flex;
    align-items: center;
    justify-content: center;
  }
  ${responsive(
    {
      marginTop: 40,
      flexDirection: "column",
      gap: 5,
    },
    500
  )}
`;
