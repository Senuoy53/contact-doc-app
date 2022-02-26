import Footer from "../../components/Footer";
import Heading from "../../components/Heading";
import Navbar from "../../components/Navbar";
import SearchDoctor from "../../containers/SearchDoctor";
// Toastify link : for error's messages
import { ToastContainer } from "react-toastify";

const Home = () => {
  return (
    <>
      <ToastContainer />
      <Navbar />
      <Heading />
      <SearchDoctor />
      <Footer />
    </>
  );
};

export default Home;
