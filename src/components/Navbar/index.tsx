import { Link } from "react-router-dom";
import { Icons, MenuBtn, Nav, NavbarWrapper } from "./NavbarWrapper";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserMd,
  faUser,
  faSignOutAlt,
} from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import Button from "../Button";
import { firebaseAuth, firebaseService } from "../../services/firebaseService";
import { Doctor, ValuesType } from "../../utils/types";
import { toast } from "react-toastify";
import ErrorComp from "../ErrorComp";
import { collections } from "../../utils/constants";
// current User
import { currentUser } from "../../services/firebaseService";
import { auth } from "../../firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setDoctors } from "../../containers/SearchDoctor/actions";

const Navbar = () => {
  // Usestate
  const [toggleLogin, setToggleLogin] = useState(false);
  const [toggleMenu, setToggleMenu] = useState(false);

  const initialValues = { email: "", password: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState<ValuesType>({
    email: "",
    password: "",
  });

  // Sign in
  const { signIn } = firebaseAuth();
  // getOne
  const { getOne } = firebaseService(collections.doctors);

  // LogOut
  const { logOut } = firebaseAuth();

  // useNavigate
  const history = useNavigate();
  // dispacth
  const dispatch = useDispatch();

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

  // HandleChange
  const handleChange = (e: any) => {
    const { name, value } = e.target;

    setFormValues({ ...formValues, [name]: value });
  };

  //   ValidateForm Funtion
  const validateForm = (values: ValuesType) => {
    const errors: any = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    if (!values.email) {
      errors.email = "Veuillez saisir un Email";
    } else if (!regex.test(values.email)) {
      errors.email = "Ce n'est pas un format d'email valide !!!";
    }

    if (!values.password) {
      errors.password = "Veuillez saisir le mot de passe";
    } else if (values.password.length < 6) {
      errors.password = "Mot de passe doit avoir plus de 5 caractères";
    }

    return errors;
  };

  // HandleClick
  const handleClick = (e: any) => {
    //  to stop loading the page
    e.preventDefault();

    setFormErrors(validateForm(formValues));
    const { email, password } = validateForm(formValues);

    if (email || password) {
      toast.warn("Veuillez remplir tous les champs");
    } else {
      signIn({ email: formValues.email, password: formValues.password })
        .then((res) => {
          getOne(res.user?.uid).then((querySnapshot) => {
            querySnapshot?.forEach((doc) => {
              // console.log(doc.id, " => ", doc.data());

              // Fermer login form
              setToggleLogin(!toggleLogin);

              res && dispatch(setDoctors(doc.data() as Doctor[]));
              setFormValues(initialValues);
              history("/professionnels");
            });
          });
        })
        .catch((err) => {
          toast.error(err.message);
        });
    }
  };

  // LogOut
  const logOutFunction = () => {
    logOut()
      .then((res) => {
        toast.success("Logout successful");
        history("/");
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };

  return (
    <NavbarWrapper>
      <Link to="/home" className="logo">
        <FontAwesomeIcon icon={faUserMd} className="faUserMd" />
        DocContact
      </Link>

      <Nav>
        <Link to="/home">Home</Link>
        {auth.currentUser && <Link to="/professionnels">Professionnels</Link>}

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

        {!auth.currentUser && (
          <FontAwesomeIcon icon={faUser} id="login-btn" onClick={ToggleLogin} />
        )}

        {auth.currentUser && (
          <button onClick={logOutFunction} id="logout">
            <FontAwesomeIcon icon={faSignOutAlt} />
            Logout
          </button>
        )}
      </Icons>

      {/* Login Form */}
      <form action="" className={`login-form ${toggleLogin ? "active" : ""}`}>
        {/* {console.log("current User ", auth.currentUser)} */}
        <h3>login form</h3>
        <input
          type="email"
          placeholder="enter your email"
          className="box"
          name="email"
          value={formValues.email}
          onChange={handleChange}
        />
        {formErrors.email && <ErrorComp>{formErrors.email}</ErrorComp>}
        <input
          type="password"
          placeholder="enter your password"
          className="box"
          name="password"
          value={formValues.password}
          onChange={handleChange}
        />
        {formErrors.password && <ErrorComp>{formErrors.password}</ErrorComp>}
        <Button
          type="submit"
          value="logon now"
          className="btn"
          onClick={handleClick}
        />
        <p id="messageInfo">
          vous n'avez pas de compte? <Link to="/register">créer un</Link>
        </p>
      </form>
    </NavbarWrapper>
  );
};

export default Navbar;
