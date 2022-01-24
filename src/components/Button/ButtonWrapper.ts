import styled from "styled-components";

export const ButtonWrapper = styled.input`
  margin-top: 0.6rem;
  display: inline-block;
  padding: 0.8rem 3rem;
  background: ${({ theme }) => theme.colors.GreenBgColor};
  color: #fff;
  font-size: 1rem;
  cursor: pointer;
  border: none;

  &:hover {
    background: ${({ theme }) => theme.colors.Gray};
  }
`;
