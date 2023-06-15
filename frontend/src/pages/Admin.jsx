import React, { useState } from "react";
import GestionFournisseurs from "../components/gestionFournisseurs/GestionFournisseurs";
import AddFournisseurs from "../components/gestionFournisseurs/AddFournisseurs";

function Admin() {
  const [showFournisseursList, setShowFournisseursList] = useState(false);
  const [showAddFournisseur, setShowAddFournisseur] = useState(false);

  const toggleFournisseursList = () => {
    setShowFournisseursList(!showFournisseursList);
  };
  const toggleAddFournisseur = () => {
    setShowAddFournisseur(!showAddFournisseur);
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

      <button type="button" onClick={toggleAddFournisseur}>
        Ajouter un fournisseur
      </button>

      {showAddFournisseur ? <AddFournisseurs /> : null}
    </div>
  );
}

export default Admin;
