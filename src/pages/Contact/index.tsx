import Footer from "../../components/Footer";
import Heading from "../../components/Heading";
import Navbar from "../../components/Navbar";
import SearchDoctor from "../../containers/SearchDoctor";
// Toastify link : for error's messages
import { ToastContainer } from "react-toastify";

import { currentUser } from "../../services/firebaseService";
import { auth } from "../../firebase";
import ContactContainer from "../../containers/ContactContainer";

const Contact = () => {
  return (
    <>
      {/* {console.log("current User ", auth.currentUser)} */}
      <ToastContainer />
      <Navbar />
      <Heading />
      <ContactContainer />
      <Footer />
    </>
  );
};

export default Contact;
