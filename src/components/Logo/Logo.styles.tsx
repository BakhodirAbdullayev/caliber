import styled from "styled-components";

export const LogoWrapper = styled.div<{ type: "main" | "second" }>`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
  span {
    color: ${(p) => p.theme[p.type]};
    font-size: 50px;
  }
  pre {
    color: ${(p) => p.theme.blackPrimary};
    font-size: 22px;
    font-weight: 600;
    text-transform: uppercase;

    &::first-letter {
      font-size: 30px;
      font-weight: 700;
      color: ${(p) => p.theme[p.type]};
    }
  }
`;
