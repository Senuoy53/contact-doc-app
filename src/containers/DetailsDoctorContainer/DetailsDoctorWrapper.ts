import styled from "styled-components";
import { mobile, tablette768, tablette530 } from "../../styles/responsive";

const DetailsDoctorWrapper = styled.section`
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
    /* align-items: center; */
    justify-content: space-between;
    ${mobile({
      flexDirection: "column-reverse",
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
  }
  .input-box {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 15px;
  }
  label {
    ${tablette530({
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
    /* text-transform: capitalize; */
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

  .bottom textarea {
    ${mobile({
      width: "100%",
    })}
  }
`;

export default DetailsDoctorWrapper;
