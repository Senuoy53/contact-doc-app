import { FirstFooterWrapper, SecondFooterWrapper } from "./FooterWrapper";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <FirstFooterWrapper>
        <div className="box-container">
          {/*  first Box */}
          <div className="box">
            <h3>Quick Links</h3>
            <Link to="/home">
              <FontAwesomeIcon icon={faArrowRight} className="faArrowRight" />
              Home
            </Link>
            <Link to="/professionnels">
              <FontAwesomeIcon icon={faArrowRight} className="faArrowRight" />
              Professionnels
            </Link>
            <Link to="/contact">
              <FontAwesomeIcon icon={faArrowRight} className="faArrowRight" />
              Contact
            </Link>
          </div>

          {/*  Second Box */}
          <div className="box">
            <h3>Follow Us</h3>
            <Link to="/home">
              <FontAwesomeIcon icon={faFacebookF} className="faArrowRight" />
              Facebook
            </Link>
            <Link to="/professionnels">
              <FontAwesomeIcon icon={faInstagram} className="faArrowRight" />
              Instagram
            </Link>
            <Link to="/contact">
              <FontAwesomeIcon icon={faLinkedin} className="faArrowRight" />
              Linkedin
            </Link>
          </div>
        </div>
      </FirstFooterWrapper>
      <SecondFooterWrapper>
        Created by Younes Lamrani | all rights reserved!
      </SecondFooterWrapper>
    </>
  );
};

export default Footer;
