import styled from "styled-components";

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  justify-content: center;
  /* max-width: 300px; */
  width: 100%;
`;
export const Icon = styled.div`
  font-size: 45px;
  color: ${(p) => p.theme.main};
`;
export const Heading = styled.h4`
  font-weight: 500;
  font-size: 20px;
  letter-spacing: 1px;
  color: ${(p) => p.theme.blackPrimary};
  text-transform: capitalize;
`;
export const Text = styled.p`
  font-size: 15px;
  line-height: 1;
  font-weight: 400;
  color: ${(p) => p.theme.blackSecondary};
`;
