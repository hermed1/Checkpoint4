import React, { useEffect, useState } from "react";
import useApi from "../../services/useApi";
import DeleteFournisseurs from "./DeleteFournisseurs";

function GestionFournisseurs() {
  const api = useApi();
  const [fournisseursList, setFournisseursList] = useState([]);
  const [isDeleted, setIsDeleted] = useState(false);

  useEffect(() => {
    api
      .get("/fournisseurs")
      .then((resp) => {
        setFournisseursList(resp.data);
        setIsDeleted(false); // On réinitialise isDeleted à false pour être prêt pour la prochaine suppression
      })
      .catch((err) => console.error(err));
  }, [isDeleted]);

  return (
    <div>
      <h2>Gérer mes fournisseurs</h2>
      <div>
        {fournisseursList.length > 0 ? (
          fournisseursList.map((fournisseur) => (
            <div key={fournisseur.id}>
              <p>{fournisseur.nom}</p>
              <img src={fournisseur.logo} alt="" />
              <p>{fournisseur.description}</p>
              <button type="button">Modifier</button>
              <DeleteFournisseurs
                idFournisseur={fournisseur.id}
                setIsDeleted={setIsDeleted}
              />
            </div>
          ))
        ) : (
          <p>problème de chargement</p>
        )}
      </div>
      ;
    </div>
  );
}

export default GestionFournisseurs;
