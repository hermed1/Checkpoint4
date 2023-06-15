import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/grd_logo.png";

function Footer() {
  return (
    <div className="footer">
      <div className="footer__logo__tel__container">
        <img
          src={logo}
          alt="logo Garantie Réseau Direct, courtier en énergie"
          className="footer__logo--grd footer__p logo-grd"
        />
        <p className="footer__p">GARANTIE RESEAU DIRECT</p>
        <a href="tel:+33625717765" className="footer__p">
          06 25 71 77 65
        </a>
        <p className="footer__p">27 Boulevard de Normandie 56100 Lorient</p>
      </div>
      <ul>
        <li className="footer__links__container">
          <Link className="footer__link" to="/">
            Accueil
          </Link>
          <Link className="footer__link" to="/fournisseurs">
            Nos fournisseurs
          </Link>
          <Link className="footer__link" to="/recrutement">
            Recrutement
          </Link>
          <Link className="footer__link" to="/contact">
            Devis
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Footer;
