import styled from "styled-components";

export const NavbarWrapper = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background-color: ${({ theme }) => theme.colors.GreenBgColor};

  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.5rem 9%;

  // Logo
  .logo {
    font-size: 25px;
    font-weight: bold;
    color: ${({ theme }) => theme.colors.White};
  }
  // shopping-basket
  .faUserMd {
    color: ${({ theme }) => theme.colors.White};
    padding-right: 5px;
  }

  /* LoginForm */
  .login-form {
    position: absolute;
    top: 115%;
    right: -115%;
    /* right: 1rem; */
    background: ${({ theme }) => theme.colors.White};
    border-radius: 5px;
    -webkit-box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1);
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1);
    width: 350px;
    padding: 20px;
  }

  .login-form.active {
    right: 1rem;
    -webkit-transition: 0.4s linear;
    transition: 0.5s linear;
  }

  .login-form h3 {
    color: ${({ theme }) => theme.colors.Black};
    text-transform: uppercase;
    font-size: 22px;
    text-align: center;
    margin-bottom: 0.7rem;
  }

  .login-form .box {
    margin: 10px 0;
    border: 0.1rem solid rgba(0, 0, 0, 0.1);
    padding: 16px 10px;
    font-size: 16px;
    color: ${({ theme }) => theme.colors.Black};
    text-transform: none;
    width: 100%;
    outline-color: ${({ theme }) => theme.colors.GreenBgColor};
  }

  .login-form .btn {
    margin: 0.5rem 0;
    padding: 0.8rem 3rem;
    width: 100%;
    text-align: center;
  }

  .login-form p {
    color: ${({ theme }) => theme.colors.Gray};
    padding-top: 1rem;
    font-size: 1rem;
    text-transform: capitalize;
  }

  .login-form p a {
    color: ${({ theme }) => theme.colors.GreenBgColor};
  }

  .login-form p a:hover {
    text-decoration: underline;
  }

  /* Btn */
  /* .btn {
    margin-top: 0.6rem;
    display: inline-block;
    padding: 0.8rem 3rem;
    background: ${({ theme }) => theme.colors.GreenBgColor};
    color: #fff;
    font-size: 1rem;
    cursor: pointer;
    border: none;
  }

  .btn:hover {
    background: ${({ theme }) => theme.colors.Gray};
  } */
`;

export const Nav = styled.nav`
  a {
    font-size: 20px;
    color: ${({ theme }) => theme.colors.Gray};
    margin: 0 15px;
    //The parent selector, &,
    &:hover {
      color: ${({ theme }) => theme.colors.White};
    }
  }
`;

export const Icons = styled.div`
  display: flex;
  align-items: center;
  font-size: 25px;
  margin-left: 5px;
  /* cursor: pointer; */
  color: #666;

  #login-btn {
    cursor: pointer;

    &:hover {
      color: #fff;
    }
  }
`;

export const MenuBtn = styled.div`
  /* display: none; */
  margin-right: 20px;
  cursor: pointer;

  &:hover div {
    background-color: #fff;
  }

  div {
    background-color: #666;
    width: 25px;
    height: 3px;
    margin: 5px 0;
    transition: all 0.3s;
  }

  &.toggle .line1 {
    transform: rotate(-45deg) translate(-5px, 6px);
  }
  &.toggle .line2 {
    opacity: 0;
  }

  &.toggle .line3 {
    transform: rotate(45deg) translate(-5px, -6px);
  }
`;
