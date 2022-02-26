import { useEffect, useState } from "react";
import DetailsDoctorWrapper from "./DetailsDoctorWrapper";
import profil from "../../assets/imgs/profil.png";
import { Doctor } from "../../utils/types";
import { firebaseService } from "../../services/firebaseService";
import { collections } from "../../utils/constants";
import { toast } from "react-toastify";
import { createStructuredSelector } from "reselect";
import { makeSelectDoctorsData } from "../SearchDoctor/selectors";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../../components/Loading";
import { useNavigate } from "react-router-dom";
import { setDoctors } from "../SearchDoctor/actions";
import { useParams } from "react-router-dom";

const doctorsState = createStructuredSelector({
  doctors: makeSelectDoctorsData(),
});

const DetailsDoctorContainer = () => {
  const [profileImg, setProfileImg] = useState<any>(profil);
  const initialValues = {
    nom: "",
    email: "",
    specialite: "",
    ville: "",
    tel: "",
    adresse: "",
    siteweb: "",
    ouverture: "",
    diplomes: "",
  };
  const [formValues, setFormValues] =
    useState<InitialValuesTypes>(initialValues);

  // Get the uid from route params
  const { id } = useParams();

  // Selectors
  const { doctors } = useSelector(doctorsState);
  const { getOne } = firebaseService(collections.doctors);

  // disptach
  const dispatch = useDispatch();

  // Loading
  const [loading, setLoading] = useState(false);

  // UseNavigate
  const history = useNavigate();

  // useEffect
  useEffect(() => {
    // console.log("uid", id);
    setLoading(true);
    getOne(id)
      .then((querySnapshot) => {
        querySnapshot?.forEach((doc: any) => {
          // update doctor global state
          let doctors: Doctor[] = [];
          let data = doc.data();

          doctors.push({ ...data });
          // console.log("doctor : ", doctors);
          dispatch(setDoctors(doctors));

          doctors.map((item) => {
            setFormValues({
              nom: item.nom,
              email: item.email,
              specialite: item.specialite,
              ville: item.ville,
              tel: item.tel,
              adresse: item.adresse,
              siteweb: item.siteweb,
              ouverture: item.ouverture,
              diplomes: item.diplomes,
            });
          });

          if (doc.data().photo) {
            setProfileImg(doc.data().photo);
          }

          setLoading(false);
        });
      })
      .catch((err) => {
        toast.error(err.message);
      });
  }, []);

  return (
    <DetailsDoctorWrapper>
      {/* {console.log("current uid ProfessionnelPage", auth.currentUser?.uid)} */}
      {loading ? (
        <Loading />
      ) : (
        <form className="register-form">
          <h3>Details Doctor form</h3>
          {/* <div className="part"> */}
          <h5 className="sub-header">Informations personnelles</h5>
          {/* Top */}
          <div className="top">
            {/* Top  Left*/}
            <div className="t-left">
              <div className="input-box">
                <label htmlFor="">Nom :</label>
                <input
                  type="text"
                  className="box capitalize"
                  name="nom"
                  value={formValues.nom}
                  disabled
                />
              </div>

              <div className="input-box">
                <label htmlFor="">Email :</label>
                <input
                  type="email"
                  className="box"
                  name="email"
                  value={formValues.email}
                  disabled
                />
              </div>

              <div className="input-box">
                <label htmlFor="">Spécialité :</label>
                <input
                  type="text"
                  className="box capitalize"
                  name="specialite"
                  value={formValues.specialite}
                  disabled
                />
              </div>

              <div className="input-box">
                <label htmlFor="">Ville :</label>
                <input
                  type="text"
                  className="box capitalize"
                  name="ville"
                  value={formValues.ville}
                  disabled
                />
              </div>

              <div className="input-box">
                <label htmlFor="">Tél :</label>
                <input
                  type="number"
                  className="box"
                  name="tel"
                  value={formValues.tel}
                  disabled
                />
              </div>

              <div className="input-box">
                <label htmlFor="">Adresse :</label>
                <textarea
                  name="adresse"
                  id="adresse"
                  className="box capitalize"
                  value={formValues.adresse}
                  disabled
                ></textarea>
              </div>
              <div className="input-box">
                <label htmlFor="">Site Web :</label>
                <input
                  type="text"
                  className="box"
                  name="siteweb"
                  value={formValues.siteweb}
                  disabled
                />
              </div>
            </div>
            {/* Top  right*/}
            <div className="t-right">
              <div className="img-holder">
                <img
                  src={profileImg}
                  alt=""
                  id="img-profil"
                  className="img-profil"
                />
              </div>
            </div>
          </div>
          {/* Center */}
          <h5 className="sub-header">Horaires d'ouverture</h5>
          <div className="center">
            <div className="input-box">
              <textarea
                name="ouverture"
                id="ouverture"
                className="horaire"
                rows={7}
                cols={40}
                value={formValues.ouverture}
                disabled
              ></textarea>
            </div>
          </div>
          <h5 className="sub-header">Diplômes & Parcours</h5>
          <div className="bottom">
            <div className="input-box">
              <textarea
                name="diplomes"
                id="diplomes"
                className="box"
                rows={8}
                value={formValues.diplomes}
                disabled
              ></textarea>
            </div>
          </div>
        </form>
      )}
    </DetailsDoctorWrapper>
  );
};

export default DetailsDoctorContainer;
