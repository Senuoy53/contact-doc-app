import styled from "styled-components";

export const SearchDoctorWrapper = styled.section`
  padding: 1.5rem 9%;

  form {
    width: 100%;
    height: 100px;
    background-color: ${({ theme }) => theme.colors.GrayBgColor};
    display: flex;
    align-items: center;
    justify-content: space-evenly;
  }

  form .inputBox {
    padding: 12px;
    outline-color: ${({ theme }) => theme.colors.GreenBgColor};
  }
`;
