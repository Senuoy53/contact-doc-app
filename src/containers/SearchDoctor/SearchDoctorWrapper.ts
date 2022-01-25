import styled from "styled-components";

export const SearchDoctorWrapper = styled.section`
  padding: 1.5rem 9%;

  .form {
    width: 100%;
    height: 100px;
    background-color: ${({ theme }) => theme.colors.GrayBgColor};
    display: flex;
    align-items: center;
    justify-content: space-evenly;
  }

  .form .inputBox {
    padding: 12px;
    outline-color: ${({ theme }) => theme.colors.GreenBgColor};
  }

  .select select {
    -webkit-appearance: none;
    -moz-appearance: none;
    -ms-appearance: none;
    appearance: none;
    outline: 0;
    box-shadow: none;
    /* border: 0 !important; */
    /* background-color: #666; */
    background-image: none;

    flex: 1;
    padding: 0 0.5em;
    color: #666;
    cursor: pointer;
  }

  .select::-ms-expand {
    display: none;
  }

  .select {
    position: relative;
    display: flex;
    width: 15em;
    height: 3em;
    line-height: 3;
    background-color: #fff;
    overflow: hidden;
    border-radius: 0.25em;
    /* border: 1px solid #777; */
  }

  .select::after {
    content: "\25BC";
    position: absolute;
    top: 0;
    right: 0;
    padding: 0 1em;
    background-color: #55b566;
    cursor: pointer;
    pointer-events: none;
    transition: all 0.25s ease;
  }

  .select:hover::after {
    color: #666;
  }
`;
