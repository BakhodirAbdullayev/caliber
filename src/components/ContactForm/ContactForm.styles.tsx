import styled from "styled-components";

export const Form = styled.form`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 30px;
  flex-direction: column;
  button {
    width: 100%;
  }
`;

export const Input = styled.input`
  width: 100%;
  padding: 15px 25px;
  border-radius: 5px;
  outline: none;
  border: 2px solid transparent;
  color: ${(p) => p.theme.blackPrimary + "bb"};
  background-color: ${(p) => p.theme.whitePrimary};
  font-size: 17px;
  font-family: monospace;

  &:focus-visible {
    border-color: ${(p) => p.theme.second};
  }
`;
export const TextArea = styled.textarea`
  width: 100%;
  height: 200px;
  padding: 15px 25px;
  border-radius: 5px;
  outline: none;
  border: 2px solid transparent;
  color: ${(p) => p.theme.blackPrimary + "bb"};
  background-color: ${(p) => p.theme.whitePrimary};
  font-size: 17px;
  resize: none;

  &:focus-visible {
    border-color: ${(p) => p.theme.second};
  }
`;
