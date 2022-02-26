import styled from "styled-components";
import { mobile } from "../../styles/responsive";

export const DetailButtonWrapper = styled.button`
  /* background: ${({ theme }) => theme.colors.GreenBgColor}; */
  color: ${({ theme }) => theme.colors.GreenBgColor};
  font-size: 1rem;
  cursor: pointer;
  border: 1px solid ${({ theme }) => theme.colors.Gray};
  max-width: 70px;
  padding: 5px;
  border-radius: 10px;
  ${mobile({
    maxWidth: "150px",
    padding: "5px 30px",
  })}

  &:active {
    color: red;
  }

  &:hover {
    background: ${({ theme }) => theme.colors.Gray};
    ${mobile({
      backgroundColor: "#f3f3f3",
    })}
  }
`;
