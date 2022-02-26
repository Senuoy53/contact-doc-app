import styled from "styled-components";
import {
  tablette630,
  tablette560,
  tablette530,
  tablette500,
  mobile,
} from "../../styles/responsive";

export const DoctorItemWrapper = styled.div`
  width: 100%;
  height: 100px;
  background-color: ${({ theme }) => theme.colors.GrayBgColor};
  margin: 0 auto;
  margin-bottom: 20px;
  padding: 80px 30px;
  display: flex;
  align-items: center;
  /* gap: 20%; */
  border-radius: 10px;
  transition: all 0.5s ease;
  text-transform: capitalize;

  ${tablette630({
    fontSize: "14px",
  })}

  ${tablette560({
    fontSize: "11px",
    padding: "80px 10px",
  })}

   ${tablette530({
    fontSize: "10px",
  })}

   ${tablette500({
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
    padding: " 20px 30px",
    height: "250px",
    fontSize: "14px",
    gap: "10%",
  })}

   ${mobile({
    alignItems: "center",
    // justifyContent: "space-around",
    padding: " 20px 30px",
    height: "500px",
    fontSize: "18px",
    gap: "5%",
  })}

  &:hover {
    background-color: ${({ theme }) => theme.colors.GreenBgColor};

    ${mobile({
      backgroundColor: "#f3f3f3",
    })}

    .number {
      background-color: ${({ theme }) => theme.colors.GrayBgColor};
      color: ${({ theme }) => theme.colors.GreenBgColor};
      ${mobile({
        backgroundColor: "#55b566",
        color: "#f3f3f3",
      })}
    }

    .img-box {
      border: 5px solid ${({ theme }) => theme.colors.GrayBgColor};
      ${mobile({
        border: "5px solid #55b566",
      })}
    }
  }

  span {
    font-weight: 600;
  }
  .left {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 20px;
    ${mobile({
      textAlign: "center",
    })}
  }

  .t-left {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
  }

  .b-left {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .number {
    width: 25px;
    height: 25px;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.colors.GreenBgColor};
    color: ${({ theme }) => theme.colors.White};
    display: flex;
    align-items: center;
    justify-content: center;

    ${mobile({
      marginRight: "5px",
    })}
  }

  .nom {
    flex: 1;
  }

  .right {
    flex: 1;
    gap: 20px;
    width: 100px;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: space-around;

    ${tablette500({
      width: "100%",
    })};

    ${mobile({
      flexDirection: "column",
    })}
  }
  .img-box {
    flex: 1;
    width: 80px;
    min-width: 80px;
    height: 80px;
    max-height: 80px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 5px solid ${({ theme }) => theme.colors.GreenBgColor};
  }

  .img-box img {
    width: 100%;
  }

  .specialite {
    flex: 2;
  }
  .specialite p {
    margin-top: 8px;
  }

  .button {
    ${tablette500({
      flex: "2",
      display: "flex",
      justifyContent: "center",
      marginTop: "30px",
    })};
  }
`;
