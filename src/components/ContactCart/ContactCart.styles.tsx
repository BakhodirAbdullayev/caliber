import styled from "styled-components";

export const CartWrapper = styled.div`
  padding: 20px;
  border-radius: 8px;
  background-color: ${(p) => p.theme.whitePrimary};
  display: flex;
  gap: 15px;
  position: relative;
  transition: 0.4s;
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 4px 8px 2px ${(p) => p.theme.blackSecondary + "70"};

    .icon {
      border-style: solid;
      /* background-color: ${(p) => p.theme.main}; */
      color: ${(p) => p.theme.whitePrimary};
      &::after {
        opacity: 1;
      }
    }
  }
`;
export const Icon = styled.div`
  width: 50px;
  height: 50px;
  font-size: 25px;
  display: grid;
  place-items: center;
  border-radius: 50%;
  /* border: 1px dashed ${(p) => p.theme.main};
  color: ${(p) => p.theme.main}; */
  background: none;
  border: 1px dashed ${(p) => p.theme.second};
  color: ${(p) => p.theme.second};
  position: relative;
  z-index: 1;
  transition: 0.4s;
  &::after {
    position: absolute;
    top: 0;
    left: 0;
    content: "";
    width: 100%;
    height: 100%;
    border-radius: 50%;
    z-index: -1;
    background-color: ${(p) => p.theme.second};
    opacity: 0;
  }
`;
export const Body = styled.div`
  max-width: calc(100% - 80px);
  h2 {
    font-size: 24px;
    font-weight: 600;
    color: ${(p) => p.theme.blackPrimary};
    margin-bottom: 8px;
  }
  p {
    margin-bottom: 4px;
    font-size: 16px;
    color: ${(p) => p.theme.blackSecondary};
  }
`;
