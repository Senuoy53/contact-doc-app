import { useEffect, useState } from "react";
import Button from "../../components/Button";
import RegisterContainerWrapper from "./RegisterContainerWrapper";
import profil from "../../assets/imgs/profil.png";
import ErrorComp from "../../components/ErrorComp";
import { ValuesType } from "../../utils/types";
import { firebaseAuth, firebaseService } from "../../services/firebaseService";
import { storage } from "../../firebase";
import { collections } from "../../utils/constants";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { HoraireData } from "../../utils/constants";

const RegisterContainer = () => {
  const [profileImg, setProfileImg] = useState<any>(profil);
  const [imageFile, setImageFile] = useState<any>();
  const initialValues = {
    nom: "",
    email: "",
    password: "",
    specialite: "",
    ville: "",
    tel: "",
    adresse: "",
    siteweb: "",
    photo: "",
    ouverture: HoraireData.placeholder,
    diplomes: "",
  };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState<ValuesType>({
    nom: "",
    email: "",
    password: "",
    specialite: "",
    ville: "",
    tel: "",
  });

  // SignUp
  const { signUp } = firebaseAuth();
  const { create } = firebaseService("/doctors");

  // useNavigate
  const history = useNavigate();

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
  const handleClick = (e: any) => {
    //  to stop loading the page
    e.preventDefault();

    setFormErrors(validateForm(formValues));
    const { nom, email, password, specialite, ville, tel } =
      validateForm(formValues);

    if (nom || email || password || specialite || ville || tel) {
      toast.warn("Veuillez remplir les champs obligatoires");
    } else {
      let id: string | undefined = "";

      // ======= Check if image is not selected =======
      if (!imageFile) {
        // SignUp
        signUp({
          email: formValues.email,
          password: formValues.password,
        })
          .then((res) => {
            // console.log("resss sccess", res);
            id = res.user?.uid;

            // Create a doctor on firebase
            create({
              uid: res.user?.uid,
              nom: formValues.nom,
              email: res.user?.email,
              specialite: formValues.specialite,
              ville: formValues.ville,
              tel: formValues.tel,
              adresse: formValues.adresse,
              siteweb: formValues.siteweb,
              photo: "",
              ouverture: formValues.ouverture,
              diplomes: formValues.diplomes,
            }).then((res) => {
              history("/home");
              toast.success("User added");
            });
            setFormValues(initialValues);
          })

          .catch((err) => {
            toast.error(err.message);
            // alert(err.message);
          });

        // ======= Check if image is  selected =======
      } else {
        // SignUp
        signUp({
          email: formValues.email,
          password: formValues.password,
        })
          .then((res) => {
            console.log("resss sccess", res);
            id = res.user?.uid;

            // upload photo to firebase storage
            const uploadPhoto = storage
              .ref(`${collections.doctors}/${id}/image`)
              .put(imageFile);
            uploadPhoto.on(
              "state_changed",
              (snapshot) => {},
              (error) => {
                console.log(error);
              },
              () => {
                storage
                  .ref(`${collections.doctors}/${id}/image`)
                  .getDownloadURL()
                  .then((url) => {
                    console.log(url);
                    // Create a doctor on firebase
                    create({
                      uid: res.user?.uid,
                      nom: formValues.nom,
                      email: res.user?.email,
                      specialite: formValues.specialite,
                      ville: formValues.ville,
                      tel: formValues.tel,
                      adresse: formValues.adresse,
                      siteweb: formValues.siteweb,
                      photo: url,
                      ouverture: formValues.ouverture,
                      diplomes: formValues.diplomes,
                    }).then((res) => {
                      history("/home");
                      // console.log("user added");
                      toast.success("User added");
                    });
                    setFormValues(initialValues);
                  });
              }
            );
          })
          .catch((err) => {
            toast.error(err.message);

            // alert(err.message);
          });
      }
    }
  };

  //   ValidateForm Funtion
  const validateForm = (values: ValuesType) => {
    const errors: any = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    if (!values.nom) {
      errors.nom = "Veuillez saisir un nom";
    }
    if (!values.email) {
      errors.email = "Veuillez saisir un Email";
    } else if (!regex.test(values.email)) {
      errors.email = "Ce n'est pas un format d'email valide !!!";
    }

    if (!values.password) {
      errors.password = "Veuillez saisir le mot de passe";
    } else if (values.password.length < 6) {
      errors.password = "Mot de passe doit avoir plus de 5 caractères";
    }

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
    <RegisterContainerWrapper>
      <form className="register-form">
        <h3>Register form</h3>
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
                className="box"
                name="nom"
                value={formValues.nom}
                onChange={handleChange}
              />
            </div>
            {formErrors.nom && <ErrorComp>{formErrors.nom}</ErrorComp>}

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
                onChange={handleChange}
              />
            </div>
            {formErrors.email && <ErrorComp>{formErrors.email}</ErrorComp>}
            <div className="input-box">
              <label htmlFor="">
                Mot de passe :<span>*</span>
              </label>
              <input
                type="text"
                placeholder="Mot de passe"
                className="box"
                name="password"
                value={formValues.password}
                onChange={handleChange}
              />
            </div>
            {formErrors.password && (
              <ErrorComp>{formErrors.password}</ErrorComp>
            )}
            <div className="input-box">
              <label htmlFor="">
                Spécialité :<span>*</span>
              </label>
              <input
                type="text"
                placeholder="Spécialité"
                className="box"
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
                className="box"
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
                className="box"
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
        <h5 className="sub-header">Diplôme & Parcours</h5>
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
            >
              test
            </textarea>
          </div>
        </div>
        <Button
          type="submit"
          value="Register"
          className="btn"
          onClick={handleClick}
        />

        {/* </div> */}
      </form>
    </RegisterContainerWrapper>
  );
};

export default RegisterContainer;

// --------------------------------------------

// const RegisterContainer = () => {
//   return (
//     <>
//       <div>
//         <p>test</p>
//       </div>
//     </>
//   );
// };
// export default RegisterContainer;
