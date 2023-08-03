import styled from "styled-components";

export const Box = styled.div`
  /* min-width: 150px; */
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 5px;
`;
export const Icon = styled.div`
  font-size: 40px;
  color: ${(p) => p.theme.main};
  margin-bottom: 5px;
`;
export const Number = styled.h3`
  font-size: 24px;
  color: ${(p) => p.theme.second};
`;
export const Title = styled.p`
  font-size: 16px;
  font-weight: 600;
  text-transform: capitalize;
  /* opacity: 0.9; */
`;
