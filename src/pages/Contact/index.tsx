import Footer from "../../components/Footer";
import Heading from "../../components/Heading";
import Navbar from "../../components/Navbar";

// Toastify link : for error's messages
import { ToastContainer } from "react-toastify";

import ContactContainer from "../../containers/ContactContainer";

const Contact = () => {
  return (
    <>
      <ToastContainer />
      <Navbar />
      <Heading />
      <ContactContainer />
      <Footer />
    </>
  );
};

export default Contact;
