import { DoctorItemWrapper } from "./DoctorItemWrapper";
import profil from "../../assets/imgs/profil.png";
import { Link } from "react-router-dom";

const DoctorItem = ({
  nbr,
  nom,
  specialite,
  tel,
  adresse,
  photo,
  ville,
  id,
}: DoctorsItemProps) => {
  return (
    <DoctorItemWrapper>
      <div className="left">
        <div className="t-left">
          <div className="number">{nbr}</div>
          <div className="nom">
            <span>Nom : </span>
            {nom}
          </div>
        </div>
        <div className="b-left">
          <div className="tel">
            <span>Tél : </span>
            {tel}
          </div>
          <div className="adresss">
            <span>Adresse : </span>
            {adresse}
          </div>
          <div className="ville">
            <span>Ville : </span>
            {ville}
          </div>
        </div>
      </div>

      <div className="right">
        <div className="specialite">
          <span>Spécialité : </span>
          <p>{specialite}</p>
        </div>

        <img className="img-box" src={photo ? photo : profil} />
        <button>
          <Link to={`/detailsdoctor/${id}`}>voir details</Link>
        </button>
      </div>
    </DoctorItemWrapper>
  );
};

DoctorItem.defaultProps = {
  photo: profil,
  // "https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260.jpg",
};

export default DoctorItem;
