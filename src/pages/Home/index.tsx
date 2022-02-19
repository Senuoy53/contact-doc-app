import Footer from "../../components/Footer";
import Heading from "../../components/Heading";
import Navbar from "../../components/Navbar";
import SearchDoctor from "../../containers/SearchDoctor";
// Toastify link : for error's messages
import { ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";

import { currentUser } from "../../services/firebaseService";
import { auth } from "../../firebase";
import { useEffect } from "react";

const Home = () => {
  // const history = useNavigate();

  // useEffect(() => {
  //   if (!currentUser()) history("/home");
  // }, []);

  return (
    <>
      {/* {console.log("current User ", auth.currentUser)} */}
      <ToastContainer />
      <Navbar />
      <Heading />
      <SearchDoctor />
      <Footer />
    </>
  );
};

export default Home;
