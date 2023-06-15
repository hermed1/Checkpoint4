import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import useApi from "../../services/useApi";

function DeleteFournisseurs({ idFournisseur, setIsDeleted }) {
  const [isFournisseurDeleted, setIsFournisseurDeleted] = useState(false);

  const id = idFournisseur;
  const api = useApi();
  const handleClickDeleteFournisseur = () => {
    api
      .delete(`/fournisseurs/${id}`)
      .then(() => {
        setIsFournisseurDeleted(true);
      })
      .catch((err) => console.error(err));
  };
  useEffect(() => {
    if (isFournisseurDeleted) {
      const timer = setTimeout(() => {
        setIsFournisseurDeleted(false);
        setIsDeleted(true);
      }, 1900);
      return () => {
        clearTimeout(timer);
      };
    }
    return undefined;
  }, [isFournisseurDeleted]);

  return (
    <div>
      <button type="button" onClick={handleClickDeleteFournisseur}>
        Supprimer le fournisseur
      </button>
      {isFournisseurDeleted ? "Le fournisseur a bien été supprimé" : null}
    </div>
  );
}
DeleteFournisseurs.propTypes = {
  idFournisseur: PropTypes.number.isRequired,
  setIsDeleted: PropTypes.func.isRequired,
};

export default DeleteFournisseurs;
