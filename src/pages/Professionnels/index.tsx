import Footer from "../../components/Footer";
import Heading from "../../components/Heading";
import Navbar from "../../components/Navbar";
// Toastify link : for error's messages
import { ToastContainer } from "react-toastify";
import ProfessionnelsContainer from "../../containers/ProfessionnelsContainer";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { currentUser } from "../../services/firebaseService";
import { auth } from "../../firebase";

const Professionsels = () => {
  // const history = useNavigate();

  // useEffect(() => {
  //   if (!currentUser()) history("/home");
  // }, []);

  return (
    <>
      <ToastContainer />
      <Navbar />
      <Heading />
      <ProfessionnelsContainer />
      <Footer />
    </>
  );
};

export default Professionsels;
