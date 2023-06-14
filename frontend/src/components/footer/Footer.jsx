import React from "react";
import { Link } from "react-router-dom";
import footerImage from "../../assets/images/ampoule_footer.jpg";
import logo from "../../assets/images/grd_logo.png";

function Footer() {
  return (
    <div>
      <img src={footerImage} alt="Ampoule énergie" />
      <img src={logo} alt="logo Garantie Réseau Direct, courtier en énergie" />
      <ul>
        <li>
          <Link to="/">Accueil</Link>
          <Link to="/fournisseurs">Nos fournisseurs</Link>
          <Link to="/recrutement">Recrutement</Link>
          <Link to="/contact">Devis</Link>
        </li>
      </ul>
    </div>
  );
}

export default Footer;
