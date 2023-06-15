// import React, { useEffect, useState } from "react";
// import useApi from "../../services/useApi";
// import DeleteFournisseurs from "./DeleteFournisseurs";
// import EditFournisseurs from "./EditFournisseurs";

// function GestionFournisseurs() {
//   const api = useApi();
//   const [fournisseursList, setFournisseursList] = useState([]);
//   const [isDeleted, setIsDeleted] = useState(false);
//   const [editFournisseurId, setEditFournisseurId] = useState(null);
//   const [confirmMessage, setConfirmMessage] = useState("");

//   useEffect(() => {
//     api
//       .get("/fournisseurs")
//       .then((resp) => {
//         setFournisseursList(resp.data);
//         setIsDeleted(false);
//       })
//       .catch((err) => console.error(err));
//   }, [isDeleted]);

//   return (
//     <div>
//       <h2>Gérer mes fournisseurs</h2>
//       <div>
//         {fournisseursList.length > 0 ? (
//           fournisseursList.map((fournisseur) => (
//             <div key={fournisseur.id}>
//               <p>{fournisseur.nom}</p>
//               <img src={fournisseur.logo} alt="" />
//               <p>{fournisseur.description}</p>
//               {/* Transmission de l'ID du fournisseur à modifier et de la fonction setEditFournisseurId */}
//               <EditFournisseurs
//                 idFournisseur={fournisseur.id}
//                 setEditFournisseurId={setEditFournisseurId}
//                 isEditing={editFournisseurId === fournisseur.id}
//               />
//               <DeleteFournisseurs
//                 idFournisseur={fournisseur.id}
//                 setIsDeleted={setIsDeleted}
//               />
//             </div>
//           ))
//         ) : (
//           <p>problème de chargement</p>
//         )}
//       </div>
//     </div>
//   );
// }

// export default GestionFournisseurs;

import React, { useEffect, useState } from "react";
import useApi from "../../services/useApi";
import DeleteFournisseurs from "./DeleteFournisseurs";
import EditFournisseurs from "./EditFournisseurs";

function GestionFournisseurs() {
  const api = useApi();
  const [fournisseursList, setFournisseursList] = useState([]);
  const [isDeleted, setIsDeleted] = useState(false);
  const [editFournisseurId, setEditFournisseurId] = useState(null);
  const [confirmMessageEdit, setConfirmMessageEdit] = useState(false);

  useEffect(() => {
    api
      .get("/fournisseurs")
      .then((resp) => {
        setFournisseursList(resp.data);
        setIsDeleted(false);
      })
      .catch((err) => console.error(err));
  }, [isDeleted, confirmMessageEdit]);

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
              <EditFournisseurs
                idFournisseur={fournisseur.id}
                setEditFournisseurId={setEditFournisseurId}
                isEditing={editFournisseurId === fournisseur.id}
                setConfirmMessageEdit={setConfirmMessageEdit}
              />
              <DeleteFournisseurs
                idFournisseur={fournisseur.id}
                setIsDeleted={setIsDeleted}
              />
            </div>
          ))
        ) : (
          <p>problème de chargement</p>
        )}
        {confirmMessageEdit ? <p>modifié</p> : null}
      </div>
    </div>
  );
}

export default GestionFournisseurs;
