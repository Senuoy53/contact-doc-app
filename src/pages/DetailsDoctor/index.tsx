import Footer from "../../components/Footer";
import Heading from "../../components/Heading";
import Navbar from "../../components/Navbar";
// Toastify link : for error's messages
import { ToastContainer } from "react-toastify";
import DetailsDoctorContainer from "../../containers/DetailsDoctorContainer";

const DetailsDoctor = () => {
  return (
    <>
      <ToastContainer />
      <Navbar />
      <Heading />
      <DetailsDoctorContainer />
      <Footer />
    </>
  );
};

export default DetailsDoctor;
