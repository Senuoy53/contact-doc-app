import styled from "styled-components";
import { ProgressType } from "../../utils/types";
import {
  mobile,
  tablette510,
  tablette560,
  tablette630,
  tablette768,
  desktop825,
} from "../../styles/responsive";

const RegisterContainerWrapper = styled.section`
  padding: 1.5rem 9%;

  /* Media Query */
  ${tablette768({
    padding: "1.5rem 1%",
  })}

  .register-form {
    background: ${({ theme }) => theme.colors.White};
    border-radius: 5px;
    -webkit-box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1);
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1);
    width: 100%;
    padding: 20px 0px;
    display: flex;
    flex-direction: column;
  }

  .register-form h3 {
    color: ${({ theme }) => theme.colors.Black};
    text-transform: uppercase;
    font-size: 22px;
    text-align: center;
  }

  .sub-header {
    width: 100%;
    height: 30px;
    background-color: ${({ theme }) => theme.colors.GreenBgColor};
    border-radius: 3px;
    display: flex;
    align-items: center;
    padding-left: 10px;
    margin-top: 0.7rem;
    margin-bottom: 2%;
  }

  .top {
    display: flex;

    ${mobile({
      flexDirection: "column-reverse",
    })}

    ${tablette560({
      gap: "20px",
    })}

    ${tablette630({
      justifyContent: "flex-end",
      gap: "50px",
    })}
  }

  .top,
  .center,
  .bottom {
    padding: 15px;
  }

  .t-left {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 15px;
    ${mobile({
      marginTop: "30px",
    })}
    ${tablette510({
      marginRight: "-10px",
    })}
    ${tablette630({
      flex: "2",
    })}
  }
  .input-box {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 15px;
    /* text-transform: capitalize; */
  }
  label {
    ${tablette768({
      fontSize: "14px",
    })}
  }
  .input-box span {
    color: red;
  }
  .box {
    padding: 10px;
    outline-color: ${({ theme }) => theme.colors.GreenBgColor};
    width: 60%;
    border: 0.1rem solid rgba(0, 0, 0, 0.1);
  }

  .capitalize {
    text-transform: capitalize;
  }

  textarea {
    resize: none;
    line-height: 2;
  }

  .horaire {
    padding: 10px;
    outline-color: ${({ theme }) => theme.colors.GreenBgColor};
    border: 0.1rem solid rgba(0, 0, 0, 0.1);
    ${mobile({
      width: "100%",
    })}
  }

  .t-right {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;

    ${desktop825({
      marginLeft: "20px",
    })}
  }

  .img-holder {
    width: 150px;
    height: 170px;
    border: 3px solid ${({ theme }) => theme.colors.GreenBgColor};
    border-radius: 3px;
    overflow: hidden;
  }

  .img-profil {
    width: 150px;
    height: 170px;
    object-fit: cover;
  }

  img {
    /* width: 100%; */
  }

  #input-upload {
    display: none;
  }

  .img-label {
    margin-top: 1rem;
  }

  .img-upload {
    background: ${({ theme }) => theme.colors.GreenBgColor};
    color: #fff;
    font-size: 1rem;
    cursor: pointer;
    border: none;
    padding: 10px;
    text-align: center;

    &:hover {
      background: ${({ theme }) => theme.colors.Gray};
    }
  }

  .vider {
    display: block;
    margin-top: 15px;
    width: 100%;
  }

  .register-form .btn {
    width: 50%;
    /* justify-content: space-around; */
    padding: 0.8rem 3rem;
    margin: 25px auto 0px auto;
  }

  .bottom textarea {
    ${mobile({
      width: "100%",
    })}
  }
`;

export const Progress = styled.div<ProgressType>`
  margin: 20px auto;
  width: 300px;
  height: 2em;
  background: ${({ theme }) => theme.colors.Gray};
  border-radius: 1.5em;
  color: white;
  position: relative;

  &::before {
    content: attr(data-label);
    display: flex;
    align-items: center;
    position: absolute;
    left: 0.5em;
    top: 0.5em;
    bottom: 0.5em;
    font-size: 11px;
    width: calc((${({ progress }) => progress}) * 1%);
    min-width: 1rem;
    max-width: calc(100% - 2em);
    background: ${({ theme }) => theme.colors.GreenBgColor};
    border-radius: 1em;
    padding: 0.5em;
  }
`;

export default RegisterContainerWrapper;
