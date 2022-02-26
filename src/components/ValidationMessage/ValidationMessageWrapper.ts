import styled from "styled-components";
import { theme } from "../../styles/global-styles";
import { mobile } from "../../styles/responsive";

export const ValidationMessageWrapper = styled.div`
  position: fixed;
  width: 100%;
  height: 100vh;
  /* height: 150px;
  width: 350px; */
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;

  /* Media query */
  ${mobile({})}

  .popup {
    width: 450px;
    padding: 20px;
    border: 10px solid ${theme.colors.GreenBgColor};
    border-radius: 3px;
    color: ${theme.colors.Gray};
    background: ${theme.colors.White};
    position: absolute;
    box-shadow: 5px 5px 50px #000;
    z-index: 11;
    font-weight: 700;
    text-align: center;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    /* Media query */
    ${mobile({
      width: "250px",
      padding: "10px",
    })}
  }

  .dialog-btn {
    color: white;
    /* font-weight: 700; */
    height: 30px;
    width: 30%;
    margin: 20px;
    cursor: pointer;
  }

  .dialog-btn.btn-primary {
    background: ${theme.colors.GreenBgColor};
  }

  .dialog-btn.btn-cancel {
    background: ${theme.colors.red};
  }

  .btn-primary:hover,
  .btn-cancel:hover {
    background-color: ${theme.colors.Gray};
  }
`;
