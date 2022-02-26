import ContactContainerWrapper from "./ContactContainerWrapper";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhoneVolume,
  faEnvelope,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";
import { useRef, useState } from "react";
import Button from "../../components/Button";
import ErrorComp from "../../components/ErrorComp";
import emailjs from "@emailjs/browser";
import { emailJsUser } from "../../variables";
import { toast } from "react-toastify";

const ContactContainer = () => {
  const formRef = useRef<any>();
  const initialValues = {
    user_name: "",
    user_subject: "",
    user_email: "",
    message: "",
  };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState<ErrorTypes>({
    user_name: "",
    user_subject: "",
    user_email: "",
  });

  // HandleChange Function
  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  //   HandleSubmit Function
  const handleSubmit = (e: any) => {
    // To prevent refreshing the page
    e.preventDefault();

    setFormErrors(validateForm(formValues));
    const { user_name, user_subject, user_email } = validateForm(formValues);

    if (user_name || user_subject || user_email) return;

    // vider les inputs
    setFormValues({
      user_name: "",
      user_subject: "",
      user_email: "",
      message: "",
    });
    // Email JS
    emailjs
      .sendForm(
        emailJsUser.YOUR_SERVICE_ID ?? "",
        emailJsUser.YOUR_TEMPLATE_ID ?? "",
        formRef.current ?? "",
        emailJsUser.YOUR_USER_ID
      )
      .then(
        (result) => {
          // console.log(result.text);
          toast.success("Form submited successfully!");
        },
        (error) => {
          toast.error(error.message);
          // console.log(error.text);
        }
      );
  };

  //   Validation Form

  const validateForm = (values: ErrorTypes) => {
    const errors: any = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    if (!values.user_name) {
      errors.user_name = "Veuillez saisir votre nom";
    }
    if (!values.user_subject) {
      errors.user_subject = "Veuillez saisir un sujet";
    }
    if (!values.user_email) {
      errors.user_email = "Veuillez saisir un email";
    } else if (!regex.test(values.user_email)) {
      errors.user_email = "Ce n'est pas un format d'email valide !!!";
    }

    return errors;
  };

  return (
    <ContactContainerWrapper>
      <div className="top">
        <div className="t-left">
          <div className="title">
            <h1>Contactez – nous</h1>
            <p> Service en ligne 24h/24 7j/7</p>
          </div>
          <div className="info-item">
            <FontAwesomeIcon
              icon={faPhoneVolume}
              className="icon faPhoneVolume"
            />
            +212 539 152 487
          </div>
          <div className="info-item">
            <FontAwesomeIcon icon={faEnvelope} className="icon faEnvelope" />
            doccontact@contact.com
          </div>
          <div className="info-item">
            <FontAwesomeIcon
              icon={faMapMarkerAlt}
              className="icon faMapMarkerAlt"
            />
            Avenue des FAR, Tétouan
          </div>
        </div>
        <div className="t-right">
          <form ref={formRef} onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Nom *"
              name="user_name"
              className="input"
              value={formValues.user_name}
              onChange={handleChange}
            />
            {formErrors.user_name && (
              <ErrorComp>{formErrors.user_name}</ErrorComp>
            )}
            <input
              type="text"
              placeholder="Sujet *"
              name="user_subject"
              className="input"
              value={formValues.user_subject}
              onChange={handleChange}
            />

            {formErrors.user_subject && (
              <ErrorComp>{formErrors.user_subject}</ErrorComp>
            )}
            <input
              type="text"
              placeholder="Email *"
              name="user_email"
              className="input"
              value={formValues.user_email}
              onChange={handleChange}
            />

            {formErrors.user_email && (
              <ErrorComp>{formErrors.user_email}</ErrorComp>
            )}
            <textarea
              rows={5}
              placeholder="Message"
              name="message"
              value={formValues.message}
              onChange={handleChange}
            />

            <Button type="submit" value="Envoyer" className="btn" />
          </form>
        </div>
      </div>
      <div className="bottom">
        <iframe
          className="map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3a244.8650013990846!2d-5.3544267853979735!3d35.58172374303149!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd0b4303d3d0f657%3A0xa5eff71d949181d!2sAv.%20des%20FAR%2C%20T%C3%A9touan!5e0!3m2!1sfr!2sma!4v1636126196575!5m2!1sfr!2sma"
          loading="lazy"
        ></iframe>
      </div>
    </ContactContainerWrapper>
  );
};

export default ContactContainer;
