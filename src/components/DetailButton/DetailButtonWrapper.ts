import styled from "styled-components";

export const DetailButtonWrapper = styled.button`
  /* background: ${({ theme }) => theme.colors.GreenBgColor}; */
  color: #fff;
  font-size: 1rem;
  cursor: pointer;
  border: 1px solid ${({ theme }) => theme.colors.Gray};
  max-width: 70px;
  padding: 5px;
  border-radius: 10px;

  &:active {
    color: red;
  }

  &:hover {
    background: ${({ theme }) => theme.colors.Gray};
  }
`;
