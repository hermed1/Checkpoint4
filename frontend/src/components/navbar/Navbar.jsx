import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/grd_logo.png";

function Navbar() {
  return (
    <div>
      <img src={logo} alt="logo_grd" />
      <a href="tel:+33625717765">06 25 71 77 65</a>

      <p>Notre énergie pour vos énergies</p>
      <Link to="/">Accueil</Link>
      <Link to="/fournisseurs">Nos fournisseurs</Link>
      <Link to="recrutement">Recrutement</Link>
      <Link to="contact">Devis</Link>
    </div>
  );
}

export default Navbar;
