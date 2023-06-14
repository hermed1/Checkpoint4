import React, { useEffect, useState } from "react";
import useApi from "../services/useApi";

function Fournisseurs() {
  const api = useApi();
  const [fournisseursList, setFournisseursList] = useState([]);
  useEffect(() => {
    api
      .get("/fournisseurs")
      .then((resp) => {
        setFournisseursList(resp.data);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      {fournisseursList.length > 0 ? (
        fournisseursList.map((fournisseur) => (
          <div key={fournisseur.id}>
            <p>{fournisseur.nom}</p>
            <img src={fournisseur.logo} alt="" />
            <p>{fournisseur.description}</p>
          </div>
        ))
      ) : (
        <p>problème de chargement</p>
      )}
    </div>
  );
}

export default Fournisseurs;
