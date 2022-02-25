import styled from "styled-components";
import { mobile } from "../../styles/responsive";

export const FirstFooterWrapper = styled.div`
  padding: 3rem 9%;
  /* background-color: #f3f3f3; */
  background-color: ${({ theme }) => theme.colors.GrayBgColor};

  /* Media query */
  ${mobile({
    padding: "3rem 1%",
  })}

  .box-container {
    display: flex;
    align-items: center;
    justify-content: space-around;
  }

  .box {
  }

  h3 {
    /* font-size: 2.2rem; */
    color: ${({ theme }) => theme.colors.Black};
    margin-bottom: 15px;
  }

  a {
    font-size: 16px;
    color: ${({ theme }) => theme.colors.Gray};
    padding: 0.5rem 0;
    display: block;
  }

  a:hover {
    color: ${({ theme }) => theme.colors.GreenBgColor};
  }

  a:hover .faArrowRight {
    /* padding-right: 15px; */
    font-size: 27px;
  }

  .faArrowRight {
    font-size: 25px;
    padding-right: 0.5rem;
    color: ${({ theme }) => theme.colors.GreenBgColor};
  }
`;

export const SecondFooterWrapper = styled.div`
  padding: 3rem 9%;
  background-color: #55b566;
  text-align: center;
  color: ${({ theme }) => theme.colors.White};
  font-size: 20px;

  /* Media query */
  ${mobile({
    padding: "3rem 1%",
    fontSize: "14px",
  })}
`;
