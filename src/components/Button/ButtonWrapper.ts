import styled from "styled-components";

export const ButtonWrapper = styled.input`
  display: inline-block;

  background: ${({ theme }) => theme.colors.GreenBgColor};
  color: #fff;
  font-size: 1rem;
  cursor: pointer;
  border: none;

  &:hover {
    background: ${({ theme }) => theme.colors.Gray};
  }
`;
