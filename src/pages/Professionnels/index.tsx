import Footer from "../../components/Footer";
import Heading from "../../components/Heading";
import Navbar from "../../components/Navbar";
// Toastify link : for error's messages
import { ToastContainer } from "react-toastify";
import ProfessionnelsContainer from "../../containers/ProfessionnelsContainer";

const Professionsels = () => {
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
