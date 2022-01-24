import { Link } from "react-router-dom";
import { Icons, MenuBtn, Nav, NavbarWrapper } from "./NavbarWrapper";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserMd, faUser } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import Button from "../Button";

const Navbar = () => {
  // Usestate
  const [toggleLogin, setToggleLogin] = useState(false);
  const [toggleMenu, setToggleMenu] = useState(false);

  // ToggleMenu
  const ToggleMenu = (e: any) => {
    setToggleMenu(!toggleMenu);
    setToggleLogin(false);
  };
  // ToggleLogin
  const ToggleLogin = () => {
    setToggleLogin(!toggleLogin);
    setToggleMenu(false);
  };

  // HandleClick
  const handleClick = (e: any) => {
    //  to stop loading the page
    e.preventDefault();
  };

  return (
    <NavbarWrapper>
      <Link to="/home" className="logo">
        <FontAwesomeIcon icon={faUserMd} className="faUserMd" />
        DocContact
      </Link>

      <Nav>
        <Link to="/home">Home</Link>
        <Link to="/professionnels">Professionnels</Link>
        <Link to="/contact">Contact</Link>
      </Nav>

      <Icons>
        <MenuBtn
          className={` ${toggleMenu ? "toggle" : ""}`}
          onClick={ToggleMenu}
        >
          <div className="line1" id="menu-btn"></div>
          <div className="line2" id="menu-btn"></div>
          <div className="line3" id="menu-btn"></div>
        </MenuBtn>
        <FontAwesomeIcon icon={faUser} id="login-btn" onClick={ToggleLogin} />
      </Icons>

      {/* Login Form */}

      <form action="" className={`login-form ${toggleLogin ? "active" : ""}`}>
        <h3>login form</h3>
        <input type="email" placeholder="enter your email" className="box" />
        <input
          type="password"
          placeholder="enter your password"
          className="box"
        />
        <Button
          type="submit"
          value="logon now"
          className="btn"
          onClick={handleClick}
        />
        <p>
          don't have an account? <a href="#">create one</a>
        </p>
      </form>
    </NavbarWrapper>
  );
};

export default Navbar;
