import styled from "styled-components";
import { responsive } from "../../utils/responsive";

export const Wrapper = styled.header`
  width: 100%;
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  height: 80px;
  z-index: 10000;
  background-color: ${(props) => props.theme.whitePrimary};
  box-shadow: 0 2px 3px ${(p) => p.theme.blackSecondary};
`;
const Flex = styled.div`
  display: flex;
  align-items: center;
`;
export const Container = styled(Flex)`
  justify-content: space-between;
  height: 100%;
`;

export const Right = styled(Flex)`
  justify-content: space-between;
  gap: 30px;
  color: ${(p) => p.theme.blackPrimary};
`;
export const NavLinks = styled.nav`
  display: flex;
  align-items: center;
  gap: 30px;
  background: ${(p) => p.theme.whitePrimary};

  ${responsive(
    {
      transition: "left .4s",
      position: "absolute",
      top: "80px",
      width: "100%",
      height: "calc(100vh - 80px)",
      flexDirection: "column",
      justifyContent: "center",
      zIndex: "10000",
    },
    700
  )}
`;
export const NavLink = styled.a`
  font-size: 15px;
  text-transform: uppercase;
  font-weight: 600;
  position: relative;
  &::after {
    content: "";
    position: absolute;
    bottom: -3px;
    left: 0;
    background-color: ${(p) => p.theme.main};
    height: 2px;
    width: 0;
    transition: 0.3s;
  }
  &:hover {
    opacity: 0.6;
    color: ${(p) => p.theme.main};
    &::after {
      width: 80%;
    }
  }
  &.active {
    opacity: 1;
    color: ${(p) => p.theme.main};
  }
`;

export const BtnGroup = styled(Flex)`
  gap: 20px;
  span button {
    color: ${(p) => p.theme.blackPrimary};
    display: grid;
    place-items: center;
    font-size: 20px;
    cursor: pointer;
    background: none;
    border: none;
    outline: none;

    &:hover {
      color: ${(p) => p.theme.main};
    }
  }
  span:last-child {
    display: none;
    ${responsive(
      {
        display: "block",
      },
      700
    )};
  }
  .lang {
    .dropdown {
      position: relative;
      display: block;
    }

    .dropdown-content {
      display: none;
      position: absolute;
      top: calc(100% + 5px);
      right: 0;
      background-color: ${(p) => p.theme.whitePrimary};
      width: max-content;
      overflow: auto;
      box-shadow: 0px 2px 5px 0px ${(p) => p.theme.blackPrimary + "50"};
      z-index: 1;
      border-radius: 5px;
    }

    .dropdown-content span {
      color: ${(p) => p.theme.blackPrimary};
      padding: 8px 12px;
      cursor: pointer;
      text-transform: uppercase;
      font-size: 15px;
      font-weight: 500;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 8px;
    }

    .dropdown span:hover {
      background-color: ${(p) => p.theme.whiteSecondary};
      color: ${(p) => p.theme.main};
    }

    .show {
      display: block;
    }
  }
`;
