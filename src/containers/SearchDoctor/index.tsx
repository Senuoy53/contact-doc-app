import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import Button from "../../components/Button";
import DoctorItem from "../../components/DoctorItem";
// import { SearchDoctorWrapper } from "./SearchDoctorWrapper";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faUserMd } from "@fortawesome/free-solid-svg-icons";

import "./index.css";

const SearchDoctor = () => {
  const [items, setItems] = useState<Doctors[]>([]);
  const [loading, setLoading] = useState(false);
  const [pageCount, setPageCount] = useState(0);

  let limit = 5;

  // useEffect
  useEffect(() => {
    const getDocteurs = async () => {
      setLoading(true);
      const res = await fetch(
        `http://localhost:3004/docteurs?_page=1&_limit=${limit}`
      );
      const data = await res.json();
      const total: any = res.headers.get("x-total-count");
      setPageCount(Math.ceil(total / limit));
      setItems([...data]);
      setLoading(false);
    };

    // Appel de la fonction
    getDocteurs();
  }, []);

  // HandleClick
  const handleClick = (e: any) => {
    //  to stop loading the page
    e.preventDefault();
  };

  // FetchDoctors
  const fetchDoctors = async (currentPage: number) => {
    const res = await fetch(
      `http://localhost:3004/docteurs?_page=${currentPage}&_limit=${limit}`
    );
    const data = await res.json();
    return data;
  };

  // handlePageClick
  const handlePageClick = async (data: PageSelected) => {
    console.log(data.selected);

    let currentPage = data.selected + 1;

    const doctorsFromServer = await fetchDoctors(currentPage);
    setItems(doctorsFromServer);
  };

  return (
    // <SearchDoctorWrapper>
    <section>
      <form className="searchForm">
        <input
          type="text"
          name="specialite"
          placeholder="Spécialité"
          className="inputBox"
        />

        <div className="select">
          <select name="ville" id="ville" defaultValue="Choisir une ville">
            <option value="Choisir une ville" disabled>
              Choisir une ville
            </option>
            <option value="casablanca">Casablanca</option>
            <option value="tetouan">Tétouan</option>
            <option value="rabat">Rabat</option>
            <option value="tanger">Tanger</option>
          </select>
        </div>
        <Button
          type="submit"
          value="Rechercher"
          className="btn"
          onClick={handleClick}
        />
        {/* <FontAwesomeIcon icon={faUserMd} id="search-btn" /> */}
      </form>
      <section className="PaginationSection">
        {loading ? (
          <p className="loading">Loading...</p>
        ) : (
          items.map((item, index) => {
            return <DoctorItem key={index} {...item} nbr={index + 1} />;
          })
        )}

        <ReactPaginate
          previousLabel={"Précédent"}
          nextLabel={"Suivant"}
          breakLabel={"..."}
          pageCount={pageCount}
          marginPagesDisplayed={4}
          onPageChange={handlePageClick}
          containerClassName={"pagination"}
          pageClassName={"page-item"}
          pageLinkClassName={"page-link"}
          previousClassName={"page-ps"}
          previousLinkClassName={"page-link"}
          nextClassName={"page-ps"}
          nextLinkClassName={"page-link"}
          breakClassName={"page-item"}
          breakLinkClassName={"page-link"}
          activeClassName={"active"}
          disabledClassName={"unactive"}
        />
      </section>
    </section>
  );
};

export default SearchDoctor;
