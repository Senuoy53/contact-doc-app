import Footer from "../../components/Footer";
import Heading from "../../components/Heading";
import Navbar from "../../components/Navbar";
import SearchDoctor from "../../containers/SearchDoctor";

const Home = () => {
  return (
    <>
      <Navbar />
      <Heading />
      <SearchDoctor />
      <Footer />
    </>
  );
};

export default Home;
