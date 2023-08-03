import styled from "styled-components";
import { responsive } from "../../utils/responsive";

export const CartBox = styled.a<{ bg: string }>`
  display: block;
  /* width: 380px; */
  min-height: 280px;
  background-image: ${(p) => `url(${p.bg})`};
  background-size: cover;
  box-shadow: ${(p) => p.theme.blackSecondary + "70"} 0 4px 10px 3px;
  border-radius: 5px;
  position: relative;
  overflow: hidden;
  &::after {
    transition: 0.3s;
    content: "";
    position: absolute;
    bottom: -100%;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: linear-gradient(
      to bottom,
      transparent,
      rgba(0, 0, 0, 0.5),
      rgba(0, 0, 0)
    );
    ${responsive(
      {
        bottom: 0,
      },
      768
    )}
  }
  &:hover {
    box-shadow: ${(p) => p.theme.main + "70"} 0 4px 8px 3px;

    &::after,
    & > div {
      bottom: 0;
    }
  }
`;
export const Details = styled.div`
  width: 100%;
  padding: 15px;
  position: absolute;
  left: 0px;
  bottom: -100%;
  z-index: 10;
  transition: 0.6s;
  margin-left: 20px;
  ${responsive(
    {
      bottom: 0,
    },
    768
  )}
  h2 {
    color: ${(p) => p.theme.second};
    text-transform: uppercase;
    letter-spacing: 1.2px;
    font-size: 30px;
    font-weight: 500;
    margin-bottom: 5px;
  }
  .tags {
    width: 100%;
    display: flex;
    align-items: center;
    gap: 20px;
    span {
      display: block;
      padding: 4px 8px;
      border: 1px solid ${(p) => p.theme.main};
      border-radius: 5px;
      color: ${(p) => p.theme.main};
      font-size: 14px;
      text-transform: uppercase;
    }
  }
`;
