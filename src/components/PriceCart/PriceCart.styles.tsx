import styled from "styled-components";

export const CartBox = styled.div<{ popular: boolean }>`
  padding: 30px 40px;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 40px;
  box-shadow: ${(p) => p.theme.blackSecondary + "20"} 0 4px 24px 5px;
  border-radius: 8px;
  border-bottom: 3px solid ${(p) => p.theme.blackSecondary};
  transition: 0.4s;
  position: relative;
  &:hover {
    border-color: ${(p) => (p.popular ? "darkorange" : p.theme.main)};
  }
  .ribbon {
    position: absolute;
    right: -5px;
    top: -5px;
    z-index: 1;
    overflow: hidden;
    width: 75px;
    height: 75px;
    text-align: right;
    span {
      font-size: 10px;
      color: #f0f0f0;
      text-transform: uppercase;
      text-align: center;
      font-weight: bold;
      line-height: 20px;
      transform: rotate(45deg);
      width: 100px;
      display: block;
      box-shadow: 0 3px 10px -5px ${(p) => p.theme.blackPrimary};
      position: absolute;
      top: 19px;
      right: -21px;
      background-color: ${(p) => p.theme.second};
      &::before {
        content: "";
        position: absolute;
        left: 0px;
        top: 100%;
        z-index: -1;
        border-left: 3px solid rgb(220, 110, 0);
        border-right: 3px solid transparent;
        border-bottom: 3px solid transparent;
        border-top: 3px solid rgb(220, 110, 0);
      }
      &::after {
        content: "";
        position: absolute;
        right: 0%;
        top: 100%;
        z-index: -1;
        border-right: 3px solid #79a70a;
        border-left: 3px solid transparent;
        border-bottom: 3px solid transparent;
        border-top: 3px solid #79a70a;
        border-right-color: rgb(220, 110, 0);
        border-top-color: rgb(220, 110, 0);
      }
    }
  }
`;
export const Head = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 15px;
  text-align: center;
  color: ${(p) => p.theme.main};
  /* filter: hue-rotate(50deg); */
  h5 {
    text-transform: uppercase;
    font-size: 16px;
    font-weight: 500;
  }
  h2 {
    font-size: 40px;
    letter-spacing: 1.3px;
    font-weight: 600;
    font-family: monospace;
  }
  p {
    text-transform: capitalize;
    font-weight: 600;
    font-size: 15px;
    color: ${(p) => p.theme.blackPrimary + "cc"};
  }
`;
export const Body = styled.ul`
  list-style: none;
  li {
    color: ${(p) => p.theme.blackPrimary};
    margin-bottom: 8px;
    font-size: 15px;
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    gap: 8px;
    span {
      height: 100%;
      width: 20px;
      display: grid;
      place-items: center;
      font-size: 20px;
      filter: hue-rotate(130deg);
      color: ${(p) => p.theme.main};
    }
  }
`;
export const Foot = styled.a`
  display: block;
  min-width: 180px;
  button {
    width: 100%;
  }
`;
