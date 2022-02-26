import styled from "styled-components";
import { theme } from "../../styles/global-styles";
import { mobile, tablette560, tablette768 } from "../../styles/responsive";

const ContactContainerWrapper = styled.section`
  display: flex;
  flex-direction: column;

  /* Media Query */
  ${tablette768({
    padding: "1.5rem 1%",
  })}

  ${tablette560({
    padding: "1.5rem 3%",
  })}

  .top {
    display: flex;
    align-items: center;

    ${tablette560({
      flexDirection: "column",
    })}

    .t-left {
      flex: 1;

      ${tablette560({
        width: "100%",
      })}

      .title {
        font-size: 20px;
        width: 70%;

        ${tablette560({
          width: "100%",
          textAlign: "center",
        })}

        h1 {
          font-size: 26px;
          margin-bottom: 20px;
        }
      }

      .info-item {
        display: flex;
        align-items: center;
        margin: 50px 0px;
      }

      .icon {
        width: 30px;
        height: 30px;
        margin-right: 20px;
      }

      .faPhoneVolume {
        color: ${({ theme }) => theme.colors.GreenTel};
      }

      .faEnvelope {
        color: ${({ theme }) => theme.colors.BleuMessage};
      }

      .faMapMarkerAlt {
        color: ${({ theme }) => theme.colors.RedAddress};
      }
    }

    .t-right {
      flex: 1;
      ${tablette560({
        width: "100%",
      })}

      form {
        margin-top: 20px;
      }

      .input {
        width: 60%;
        height: 50px;
        border: none;
        border-bottom: 1px solid ${({ theme }) => theme.colors.Black};
      }

      .input,
      textarea {
        margin: 10px 0px;
        font-size: 14px;
        padding-left: 10px;
        outline-color: ${({ theme }) => theme.colors.GreenBgColor};
      }

      textarea {
        width: 100%;
        padding-top: 5px;
        resize: none;
      }

      .btn {
        margin: 0.5rem 0;
        padding: 0.8rem 3rem;
        width: 50%;
        text-align: center;
      }
    }
  }

  .bottom {
    /* flex-basis: 100%; */

    .map {
      margin-top: 20px;
      border: none;
      width: 100%;
      height: 50vh;
    }
  }
`;

export default ContactContainerWrapper;
