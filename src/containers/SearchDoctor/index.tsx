import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import Button from "../../components/Button";
import DoctorItem from "../../components/DoctorItem";
import { Doctor } from "../../utils/types";
import { InitialValuesSearch } from "./types";
// import { SearchDoctorWrapper } from "./SearchDoctorWrapper";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faUserMd } from "@fortawesome/free-solid-svg-icons";

import "./index.css";
import { firebaseService } from "../../services/firebaseService";
import Loading from "../../components/Loading";
import { createStructuredSelector } from "reselect";
import { makeSelectDoctorsData } from "./selectors";
import { useDispatch, useSelector } from "react-redux";
import { collections } from "../../utils/constants";
import { setDoctors } from "./actions";
import { toast } from "react-toastify";
import ErrorComp from "../../components/ErrorComp";

const doctorsState = createStructuredSelector({
  doctors: makeSelectDoctorsData(),
});

const SearchDoctor = () => {
  const [loading, setLoading] = useState(false);
  const [pageCount, setPageCount] = useState(0);
  const [pageNumber, setPageNumber] = useState(0);
  const [nbrResulat, setNbrResultat] = useState(0);
  const [selected, setSelected] = useState(false);
  const [clicked, setClicked] = useState(false);

  // Selectors
  const { doctors } = useSelector(doctorsState);
  const { getAll, filterByAll, filterByVille, filterBySpecialite } =
    firebaseService(collections.doctors);

  // Doctorfilter
  const [doctorfilter, setDoctorFilter] = useState<Doctor[]>([]);

  const initialValues = {
    specialite: "",
    ville: "",
  };
  const [formValues, setFormValues] =
    useState<InitialValuesSearch>(initialValues);

  const dispatch = useDispatch();

  // === Chargement des listes des docteurs ===
  const onDataChange = (items: any) => {
    // Change clicked to true

    setClicked(false);

    let doctors: Doctor[] = [];

    items.docs.forEach((item: any) => {
      let data = item.data();

      doctors.push({
        ...data,
      });
    });
    dispatch(setDoctors(doctors));
    setDoctorFilter(doctors);
  };

  useEffect(() => {
    getAll().onSnapshot(onDataChange);
  }, []);

  // === HandleChange ===
  const handleChange = (e: any) => {
    // console.log(e.target.value);
    const { name, value } = e.target;

    setFormValues({ ...formValues, [name]: value });
  };

  // === HandleClick ===
  const handleClick = (e: any) => {
    //  to stop loading the page
    e.preventDefault();

    // Change clicked to true
    setClicked(true);

    if (!formValues.ville && !formValues.specialite) return;

    // Change selected to true
    setSelected(true);

    //  (filter by ville and specialite)
    if (formValues.ville && formValues.specialite) {
      let doctors: Doctor[] = [];
      let index = 0;
      filterByAll(formValues.ville, formValues.specialite)
        .then((querySnapshot) => {
          querySnapshot?.forEach((doc: any) => {
            // update doctor global state

            let data = doc.data();
            index = index + 1;

            doctors.push({
              ...data,
              nbr: index,
            });
          });

          dispatch(setDoctors(doctors));

          setPageCount(Math.ceil(doctors.length / doctorsPerPage));
          // get le nbr de resulats à afficher
          setNbrResultat(index);
        })
        .catch((err) => {
          toast.error(err.message);
        });
    }

    //  (filter by ville )
    else if (formValues.ville && !formValues.specialite) {
      let doctors: Doctor[] = [];
      let index = 0;

      filterByVille(formValues.ville)
        .then((querySnapshot) => {
          querySnapshot?.forEach((doc: any) => {
            // update doctor global state

            let data = doc.data();

            index = index + 1;

            doctors.push({
              ...data,
              nbr: index,
            });
          });

          dispatch(setDoctors(doctors));

          setPageCount(Math.ceil(doctors.length / doctorsPerPage));
          // get le nbr de resulats à afficher
          setNbrResultat(index);
        })
        .catch((err) => {
          toast.error(err.message);
        });
    }

    //  (filter by specialite )
    else if (!formValues.ville && formValues.specialite) {
      let doctors: Doctor[] = [];
      let index = 0;

      filterBySpecialite(formValues.specialite)
        .then((querySnapshot) => {
          querySnapshot?.forEach((doc: any) => {
            // update doctor global state

            let data = doc.data();
            index = index + 1;

            doctors.push({
              ...data,
              nbr: index,
            });
          });

          dispatch(setDoctors(doctors));

          setPageCount(Math.ceil(doctors.length / doctorsPerPage));
          // get le nbr de resulats à afficher
          setNbrResultat(index);
        })
        .catch((err) => {
          toast.error(err.message);
        });
    }
  };

  // === Pagination ===
  const doctorsPerPage = 2;
  const pagesVisited = pageNumber * doctorsPerPage;

  // === display doctors by filter ===

  const displayDoctors = () => {
    return doctors
      .slice(pagesVisited, pagesVisited + doctorsPerPage)
      .map((item: Doctor, index: number) => {
        // setLoading(true);
        let photo: string = "";
        if (item.photo) {
          photo = item.photo;
        }

        return (
          <DoctorItem
            key={index}
            {...item}
            nom={item.nom}
            photo={photo}
            id={item.uid}
          />
        );
      });
  };

  // === handlePageClick ===
  const handlePageClick = ({ selected }: any) => {
    setPageNumber(selected);
  };

  return (
    // <SearchDoctorWrapper>

    <section>
      {/* =================== Search Form =================== */}
      <form className="searchForm">
        <div className="select">
          <select
            name="specialite"
            id="specialite"
            defaultValue="Choisir une specialite"
            onChange={handleChange}
          >
            <option value="Choisir une specialite" disabled>
              Choisir une specialité
            </option>

            {/* Chargement de liste des specialités sans duplication */}
            {Array.from(
              new Set(
                doctorfilter.map(
                  (item: Doctor, index: number) => item.specialite
                )
              )
            ).map((specialite, index) => {
              return (
                <option value={specialite} key={index}>
                  {specialite}
                </option>
              );
            })}
          </select>
        </div>

        <div className="select">
          <select
            name="ville"
            id="ville"
            defaultValue="Choisir une ville"
            onChange={handleChange}
          >
            <option value="Choisir une ville" disabled>
              Choisir une ville
            </option>

            {/* Chargement de liste des villes sans duplication */}
            {Array.from(
              new Set(
                doctorfilter.map((item: Doctor, index: number) => item.ville)
              )
            ).map((ville, index) => {
              return (
                <option value={ville} key={index}>
                  {ville}
                </option>
              );
            })}
          </select>
        </div>

        <Button
          type="submit"
          value="Rechercher"
          className="btn"
          onClick={handleClick}
        />
      </form>

      {/* =================== Resultats Section =================== */}

      {clicked && (
        <div id="resultat">
          {selected ? (
            <p>
              <b>{nbrResulat}</b>, résultat(s) trouvé(s)
            </p>
          ) : (
            <ErrorComp>
              Veuillez selectionner une ville et/ou une spécialité
            </ErrorComp>
          )}
        </div>
      )}

      {/* =================== Pagination Section =================== */}
      <section className="PaginationSection">
        {nbrResulat !== 0 && clicked && displayDoctors()}

        {nbrResulat !== 0 && (
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
        )}
      </section>
    </section>
  );
};

export default SearchDoctor;
