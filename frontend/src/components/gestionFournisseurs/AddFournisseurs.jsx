import React, { useState, useEffect } from "react";
import useApi from "../../services/useApi";

function AddFournisseurs() {
  const api = useApi();
  const [nom, setNom] = useState("");
  const [logo, setLogo] = useState("");
  const [description, setDescription] = useState("");
  const [confirmAdd, setConfirmAdd] = useState(false);

  const handleClickSubmit = (e) => {
    e.preventDefault();
    const newFournisseur = { nom, logo, description };
    api
      .post("fournisseurs", newFournisseur)
      .then((resp) => {
        console.warn(resp);
        setConfirmAdd(true);
      })
      .catch((err) => console.error(err));
  };
  useEffect(() => {
    if (confirmAdd) {
      const timer = setTimeout(() => {
        setConfirmAdd(false);
      }, 1900);
      return () => {
        clearTimeout(timer);
      };
    }
    return undefined;
  }, [confirmAdd]);

  return (
    <div>
      <form action="post">
        <label htmlFor="nom">Nom du fournisseur</label>
        <input
          type="text"
          name="nom"
          placeholder="nom du fournisseur"
          onChange={(e) => {
            setNom(e.target.value);
          }}
        />
        <label htmlFor="logo">Logo du fournisseur</label>
        <input
          type="text"
          name="logo"
          placeholder="logo"
          onChange={(e) => setLogo(e.target.value)}
        />
        <label htmlFor="description">Description</label>
        <textarea
          name="description"
          id=""
          cols="50"
          rows="10"
          placeholder="Entrez la description qui sera visible sur le site."
          onChange={(e) => setDescription(e.target.value)}
        />
        <input type="submit" value="Valider" onClick={handleClickSubmit} />
      </form>
      {confirmAdd ? <p>Fournisseur enregistré</p> : null}
    </div>
  );
}

export default AddFournisseurs;
