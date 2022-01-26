import styled from "styled-components";

export const DoctorItemWrapper = styled.div`
  width: 100%;
  height: 100px;
  background-color: ${({ theme }) => theme.colors.GrayBgColor};
  margin: 0 auto;
  margin-bottom: 20px;
  padding: 80px 30px;
  display: flex;
  align-items: center;
  gap: 20%;
  border-radius: 10px;
  transition: all 0.5s ease;
  text-transform: capitalize;

  &:hover {
    background-color: ${({ theme }) => theme.colors.GreenBgColor};
    cursor: pointer;

    .number {
      background-color: ${({ theme }) => theme.colors.GrayBgColor};
      color: ${({ theme }) => theme.colors.GreenBgColor};
    }

    .img-box {
      border: 5px solid ${({ theme }) => theme.colors.GrayBgColor};
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
  }
  .img-box {
    flex: 1;
    width: 80px;
    height: 80px;
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
`;
