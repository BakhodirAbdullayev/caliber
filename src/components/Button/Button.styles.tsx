import styled from "styled-components";
import { responsive } from "../../utils/responsive";

export const ButtonContainer = styled.button<{
  variant: "primary" | "secondary";
  outline?: boolean;
}>`
  min-width: 140px;
  border: 1px solid
    ${(p) => (p.variant === "primary" ? p.theme.main : p.theme.second)};

  color: ${(p) =>
    !p.outline
      ? "#fff"
      : p.variant === "primary"
      ? p.theme.main
      : p.theme.second};

  padding: 10px 25px;
  height: 55px;
  border-radius: 8px;
  font-size: 17px;
  font-weight: 600;
  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;

  position: relative;
  z-index: 1;
  overflow: hidden;

  &::before {
    content: "";
    width: 30px;
    height: 80px;
    position: absolute;
    left: -33%;
    transform: rotate(-30deg);
    background: linear-gradient(to right, #fff, #eee);
    z-index: -1;
    transition: 0.4s;
  }
  &:hover {
    &::before {
      left: 130%;
    }
  }
  &:after {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -2;
    background-color: ${(p) =>
      p.outline
        ? p.theme.whitePrimary
        : p.variant === "primary"
        ? p.theme.main
        : p.theme.second};
  }
  span {
    font-size: 24px;
  }
  ${responsive(
    {
      width: "100%",
      margin: "auto",
    },
    480
  )}
`;
