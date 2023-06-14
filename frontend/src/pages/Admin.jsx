import React, { useState } from "react";
import GestionFournisseurs from "../components/gestionFournisseurs/GestionFournisseurs";

function Admin() {
  const [showFournisseursList, setShowFournisseursList] = useState(false);

  const toggleFournisseursList = () => {
    setShowFournisseursList(!showFournisseursList);
  };

  return (
    <div>
      <h1>
        Gérez la liste de vos fournisseurs, de vos contacts et de vos candidats
      </h1>
      <button type="button" onClick={toggleFournisseursList}>
        {showFournisseursList
          ? "Fermer la liste des fournisseurs"
          : "Voir la liste des fournisseurs"}
      </button>
      {showFournisseursList ? <GestionFournisseurs /> : null}
    </div>
  );
}

export default Admin;
