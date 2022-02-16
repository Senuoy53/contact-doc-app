import Footer from "../../components/Footer";
import Heading from "../../components/Heading";
import Navbar from "../../components/Navbar";
import RegisterContainer from "../../containers/RegisterContainer";
// Toastify link : for error's messages
import { ToastContainer } from "react-toastify";
import { auth } from "../../firebase";

const Register = () => {
  return (
    <>
      <ToastContainer />
      <Navbar />
      <Heading />
      <RegisterContainer />
      <Footer />
    </>
  );
};

export default Register;
