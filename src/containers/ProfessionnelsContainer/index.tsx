import { useEffect, useState } from "react";
import Button from "../../components/Button";
import ProfessionnelsContainerWrapper, {
  Progress,
} from "./ProfessionnelsContainerWrapper";
import profil from "../../assets/imgs/profil.png";
import ErrorComp from "../../components/ErrorComp";
import { Doctor, ValuesType } from "../../utils/types";
import { firebaseAuth, firebaseService } from "../../services/firebaseService";
import { auth, storage } from "../../firebase";
import { collections } from "../../utils/constants";
import { toast } from "react-toastify";
import { createStructuredSelector } from "reselect";
import { makeSelectDoctorsData } from "../SearchDoctor/selectors";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../../components/Loading";
import { HoraireData } from "../../utils/constants";
import ValidationMessage from "../../components/ValidationMessage";
import { useNavigate } from "react-router-dom";
import { setDoctors } from "../SearchDoctor/actions";

const doctorsState = createStructuredSelector({
  doctors: makeSelectDoctorsData(),
});

const ProfessionnelsContainer = () => {
  const [profileImg, setProfileImg] = useState<any>(profil);
  const [imageFile, setImageFile] = useState<any>("");
  const initialValues = {
    nom: "",
    email: "",
    specialite: "",
    ville: "",
    tel: "",
    adresse: "",
    siteweb: "",
    ouverture: HoraireData.placeholder,
    diplomes: "",
  };
  const [formValues, setFormValues] =
    useState<InitialValuesTypes>(initialValues);
  const [formErrors, setFormErrors] = useState<ProfessionnelsTypes>({
    specialite: "",
    ville: "",
    tel: "",
  });

  // Selectors
  const { doctors } = useSelector(doctorsState);
  const { getOne, update, remove } = firebaseService(collections.doctors);
  const { deleteUser } = firebaseAuth();

  // disptach
  const dispatch = useDispatch();

  // docId
  const [docId, setDocId] = useState<string | undefined>();
  // uid
  const [uid, setUid] = useState<string | undefined>();

  // Loading
  const [loading, setLoading] = useState(false);
  // Progress bar
  const [progLoading, setProgLoading] = useState(false);
  const [progress, setProgress] = useState(0);

  // Message
  const [typeMessage, setTypeMessage] = useState("");

  // UseNavigate
  const history = useNavigate();

  // useEffect
  useEffect(() => {
    setLoading(true);
    getOne(auth.currentUser?.uid)
      .then((querySnapshot) => {
        querySnapshot?.forEach((doc: any) => {
          // Get th docID
          setDocId(doc.id);

          // Get the uid
          setUid(doc.data().uid);

          // update doctor global state
          let doctors: Doctor[] = [];
          let data = doc.data();

          doctors.push({ ...data });
          // console.log("doctor : ", doctors);
          dispatch(setDoctors(doctors));

          doctors.map((item) => {
            setFormValues({
              // nom: doc.data().nom,
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

          // console.log("profileImg", doc.data().photo);
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

  // image handler
  const imageHandler = (e: any) => {
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        // console.log(reader.result);
        setProfileImg(reader.result as string);
        setImageFile(e.target.files[0]);
        // console.log(e.target.files[0]);
      }
    };
    reader.readAsDataURL(e.target.files[0]);
  };

  // Vider Image
  const viderImage = (e: any) => {
    //  to stop loading the page
    e.preventDefault();
    setProfileImg(profil);
    setImageFile("");
  };

  //   HandleChange Funtion
  const handleChange = (e: any) => {
    const { name, value } = e.target;

    setFormValues({ ...formValues, [name]: value });
  };

  // Submit
  const updateClick = (e: any) => {
    //  to stop loading the page
    e.preventDefault();

    setFormErrors(validateForm(formValues));
    const { specialite, ville, tel } = validateForm(formValues);

    if (specialite || ville || tel) {
      toast.warn("Veuillez remplir les champs obligatoires");
    } else {
      let id: string | undefined = "";

      // ======= Check if image is not selected =======
      if (!imageFile && profileImg === profil) {
        console.log("imagefile null", imageFile);
        // Update
        update(docId, {
          specialite: formValues.specialite,
          ville: formValues.ville,
          tel: formValues.tel,
          adresse: formValues.adresse,
          siteweb: formValues.siteweb,
          photo: "",
          ouverture: formValues.ouverture,
          diplomes: formValues.diplomes,
        })
          .then((res) => {
            // console.log("updateeeeeeeeeeeeeee", docId);
            toast.success("User Modified");
          })
          .catch((err) => {
            alert(err.message);
          });
      } else if (!imageFile && profileImg !== profil) {
        console.log(
          "imagefile null : ",
          "profile img !==profil  : ",
          imageFile,
          profileImg
        );
        // Update
        update(docId, {
          specialite: formValues.specialite,
          ville: formValues.ville,
          tel: formValues.tel,
          adresse: formValues.adresse,
          siteweb: formValues.siteweb,
          ouverture: formValues.ouverture,
          diplomes: formValues.diplomes,
        })
          .then((res) => {
            // console.log("updateeeeeeeeeeeeeee", docId);
            toast.success("User Modified");
          })
          .catch((err) => {
            alert(err.message);
          });
      } else if (imageFile) {
        // console.log("imagefile ", imageFile);

        // upload photo to firebase storage
        const uploadPhoto = storage
          .ref(`${collections.doctors}/${auth.currentUser?.uid}/image`)
          .put(imageFile);
        uploadPhoto.on(
          "state_changed",
          (snapshot) => {
            setProgLoading(true);
            const progress = Math.round(
              (snapshot.bytesTransferred / snapshot.totalBytes) * 100
            );
            setProgress(progress);
          },
          (error) => {
            toast.error(error.message);
            // console.log(error);
          },
          () => {
            storage
              .ref(`${collections.doctors}/${auth.currentUser?.uid}/image`)
              .getDownloadURL()
              .then((url) => {
                console.log(url);
                update(docId, {
                  specialite: formValues.specialite,
                  ville: formValues.ville,
                  tel: formValues.tel,
                  adresse: formValues.adresse,
                  siteweb: formValues.siteweb,
                  photo: url,
                  ouverture: formValues.ouverture,
                  diplomes: formValues.diplomes,
                })
                  .then((res) => {
                    // console.log("updateeeeeeeeeeeeeee", docId);
                    setProgLoading(false);
                    toast.success("User Modified");
                  })
                  .catch((err) => {
                    toast.error(err.message);
                    // alert(err.message);
                  });
              });
          }
        );
      }
    }
  };

  // Delete Click
  const deleteClick = (e: any) => {
    //  to stop loading the page
    e.preventDefault();

    // type message
    setTypeMessage("delete");
  };

  // ===== MessageClick =====
  const MessageClick = (e: any) => {
    switch (e.target.id) {
      // if user clicks ok button
      case "confirm":
        // Verification if "clear_all" or "clear_task" by name
        switch (e.target.name) {
          case "delete":
            // Delete the document
            remove(docId)
              .then((res) => {
                // Delete the Account

                deleteUser()
                  .then((res) => {
                    // console.log("acount deleted");
                    // vider le type message
                    setTypeMessage("");

                    // Delete the photo from the storage
                    storage
                      .ref(`${collections.doctors}/${uid}/image`)
                      .delete()
                      .then((res) => {
                        toast.success("Utilisateur supprimé");
                        // console.log(res);
                      });

                    history("/home");
                  })
                  .catch((err) => {
                    // console.log("errr");
                    toast.error(err.message);
                  });
              })
              .catch((err) => {
                toast.error(err.message);
              });

            break;
          default:
            break;
        }
        break;
      // if user clicks cancel button
      case "cancel":
        // Verification if "clear_all" or "clear_task" by name
        switch (e.target.name) {
          case "delete":
            // Vider le typeMessage pour fermer la fenetre
            setTypeMessage("");
            break;

          default:
            break;
        }

        break;
      default:
        break;
    }
  };

  //   ValidateForm Funtion
  const validateForm = (values: any) => {
    const errors: any = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    if (!values.specialite) {
      errors.specialite = "Veuillez saisir une spécialité  ";
    }

    if (!values.ville) {
      errors.ville = "Veuillez saisir une ville";
    }

    if (!values.tel) {
      errors.tel = "Veuillez saisir un numéro de téléphone ";
    }
    return errors;
  };

  return (
    <ProfessionnelsContainerWrapper>
      {/* {console.log("current uid ProfessionnelPage", auth.currentUser?.uid)} */}

      {loading ? (
        <Loading />
      ) : (
        <form className="register-form">
          <h3>professionals form</h3>
          {/* <div className="part"> */}
          <h5 className="sub-header">Informations personnelles</h5>
          {/* Top */}
          <div className="top">
            {/* Top  Left*/}
            <div className="t-left">
              <div className="input-box">
                <label htmlFor="">
                  Nom :<span>*</span>
                </label>
                <input
                  type="text"
                  placeholder="Nom"
                  className="box capitalize"
                  name="nom"
                  value={formValues.nom}
                  disabled
                />
              </div>

              <div className="input-box">
                <label htmlFor="">
                  Email :<span>*</span>
                </label>
                <input
                  type="email"
                  placeholder="Email"
                  className="box"
                  name="email"
                  value={formValues.email}
                  disabled
                />
              </div>

              <div className="input-box">
                <label htmlFor="">
                  Spécialité :<span>*</span>
                </label>
                <input
                  type="text"
                  placeholder="Spécialité"
                  className="box capitalize"
                  name="specialite"
                  value={formValues.specialite}
                  onChange={handleChange}
                />
              </div>
              {formErrors.specialite && (
                <ErrorComp>{formErrors.specialite}</ErrorComp>
              )}
              <div className="input-box">
                <label htmlFor="">
                  Ville :<span>*</span>
                </label>
                <input
                  type="text"
                  placeholder="Ville"
                  className="box capitalize"
                  name="ville"
                  value={formValues.ville}
                  onChange={handleChange}
                />
              </div>
              {formErrors.ville && <ErrorComp>{formErrors.ville}</ErrorComp>}
              <div className="input-box">
                <label htmlFor="">
                  Tél :<span>*</span>
                </label>
                <input
                  type="number"
                  placeholder="Tél"
                  className="box"
                  name="tel"
                  value={formValues.tel}
                  onChange={handleChange}
                />
              </div>
              {formErrors.tel && <ErrorComp>{formErrors.tel}</ErrorComp>}
              <div className="input-box">
                <label htmlFor="">Adresse :</label>
                <textarea
                  name="adresse"
                  id="adresse"
                  className="box capitalize"
                  placeholder="Adresse"
                  value={formValues.adresse}
                  onChange={handleChange}
                ></textarea>
              </div>
              <div className="input-box">
                <label htmlFor="">Site Web :</label>
                <input
                  type="text"
                  placeholder="Site Web"
                  className="box"
                  name="siteweb"
                  value={formValues.siteweb}
                  onChange={handleChange}
                />
              </div>
            </div>
            {/* Top  right*/}
            <div className="t-right">
              <div className="img-holder">
                <img
                  src={profileImg}
                  // src={profil}
                  alt=""
                  id="img-profil"
                  className="img-profil"
                />
              </div>
              <input
                type="file"
                name="photo"
                id="input-upload"
                accept="image/*"
                onChange={imageHandler}
              />
              <div className="img-label">
                <label htmlFor="input-upload" className="img-upload">
                  Ajouter une photo
                </label>
                <button className="img-upload vider" onClick={viderImage}>
                  Vider
                </button>
              </div>
            </div>
          </div>
          {/* Center */}
          <h5 className="sub-header">Horaires d'ouverture</h5>
          <div className="center">
            <div className="input-box">
              {/* <label htmlFor="">Adresse :</label> */}
              <textarea
                name="ouverture"
                id="ouverture"
                className="horaire"
                placeholder={HoraireData.placeholder}
                rows={7}
                cols={40}
                value={formValues.ouverture}
                onChange={handleChange}
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
                placeholder=" Diplôme & Parcours"
                rows={8}
                value={formValues.diplomes}
                onChange={handleChange}
              ></textarea>
            </div>
          </div>
          <div className="buttons">
            <Button
              type="submit"
              value="Update"
              className="btn"
              onClick={updateClick}
            />
            <Button
              type="submit"
              value="Delete"
              className="btn delete"
              onClick={deleteClick}
            />
          </div>

          {progLoading && (
            <Progress data-label="Uploading..." progress={progress}></Progress>
          )}
          {/* </div> */}
        </form>
      )}

      {/* ============ Validation Message ============ */}

      {typeMessage && (
        <ValidationMessage
          texte={"Voulez-vous supprimer cet utilisateur ?"}
          onClick={MessageClick}
          name={"delete"}
        />
      )}
    </ProfessionnelsContainerWrapper>
  );
};

export default ProfessionnelsContainer;
