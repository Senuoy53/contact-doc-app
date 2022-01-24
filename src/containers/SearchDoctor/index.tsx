import Button from "../../components/Button";
import { SearchDoctorWrapper } from "./SearchDoctorWrapper";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserMd } from "@fortawesome/free-solid-svg-icons";

const SearchDoctor = () => {
  // HandleClick
  const handleClick = (e: any) => {
    //  to stop loading the page
    e.preventDefault();
  };

  return (
    <SearchDoctorWrapper>
      <form>
        <input
          type="text"
          name="specialite"
          placeholder="Spécialité"
          className="inputBox"
        />

        <input
          type="text"
          name="ville"
          placeholder="Choisir une ville"
          className="inputBox"
        />
        <Button
          type="submit"
          value="Rechercher"
          className="btn"
          onClick={handleClick}
        />
        {/* <FontAwesomeIcon icon={faUserMd} id="search-btn" /> */}
      </form>
    </SearchDoctorWrapper>
  );
};

export default SearchDoctor;
