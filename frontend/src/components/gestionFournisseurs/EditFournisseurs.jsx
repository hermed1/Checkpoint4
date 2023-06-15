import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import useApi from "../../services/useApi";

function EditFournisseurs({
  idFournisseur,
  setEditFournisseurId,
  isEditing,
  setConfirmMessageEdit,
}) {
  const api = useApi();
  const [fournisseur, setFournisseur] = useState(null);
  const [isFormChanged, setIsFormChanged] = useState(false);
  const [isFournisseurUpdated, setIsFournisseurUpdated] = useState(false);

  useEffect(() => {
    if (isEditing) {
      api
        .get(`/fournisseurs/${idFournisseur}`)
        .then((resp) => {
          setFournisseur(resp.data);
        })
        .catch((err) => console.error(err));
    }
  }, [isEditing]);

  useEffect(() => {
    if (isFournisseurUpdated) {
      const timer = setTimeout(() => {
        setConfirmMessageEdit(false);
        isFournisseurUpdated(false);
      }, 1900);
      return () => {
        clearTimeout(timer);
      };
    }
    return undefined;
  }, [isFournisseurUpdated]);

  if (!isEditing || !fournisseur) {
    return (
      <button type="button" onClick={() => setEditFournisseurId(idFournisseur)}>
        Modifier le fournisseur
      </button>
    );
  }

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFournisseur({ ...fournisseur, [name]: value });
    setIsFormChanged(true);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const updatedFournisseur = {
      nom: fournisseur.nom,
      logo: fournisseur.logo,
      description: fournisseur.description,
    };
    api
      .put(`/fournisseurs/${idFournisseur}`, updatedFournisseur)
      .then(() => {
        setEditFournisseurId(null);
        setIsFournisseurUpdated(true);
        setConfirmMessageEdit(true);
      })
      .catch((err) => console.error(err));
  };

  const handleCancel = () => {
    setEditFournisseurId(null);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Nom :
          <input
            type="text"
            name="nom"
            value={fournisseur.nom}
            onChange={handleChange}
          />
        </label>
        <label>
          Logo :
          <input
            type="text"
            name="logo"
            value={fournisseur.logo}
            onChange={handleChange}
          />
        </label>
        <label>
          Description :
          <textarea
            name="description"
            rows="10"
            cols="50"
            value={fournisseur.description}
            onChange={handleChange}
          />
        </label>
        <button type="button" onClick={handleCancel}>
          Retour
        </button>
        {isFormChanged && <button type="submit">Valider</button>}
      </form>
    </div>
  );
}

EditFournisseurs.propTypes = {
  idFournisseur: PropTypes.number.isRequired,
  setEditFournisseurId: PropTypes.func.isRequired,
  isEditing: PropTypes.bool.isRequired,
  setConfirmMessageEdit: PropTypes.func.isRequired,
};

export default EditFournisseurs;
