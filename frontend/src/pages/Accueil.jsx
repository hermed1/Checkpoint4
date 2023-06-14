// import React from "react";
// import Ampoule from "../assets/images/Ampoule.jpg";

// function Accueil() {
//   return (
//     <div>
//       <main>
//         <h1>
//           Courtage en énergie pour les professionnels à Lorient - Garantie
//           Réseau Direct
//         </h1>
//         <h2>
//           Nos équipes de conseillers en énergie sont à la disposition des
//           professionnels de toute la Bretagne !
//         </h2>
//         <p>
//           Garantie réseau Direct est une entreprise spécialisée dans le marché
//           porteur de l'énergie et présent sur le secteur de la Bretagne depuis
//           2018. Notre objectif : Vous présenter des solutions adaptées à votre
//           consommation. Conscients que les professionnels doivent faire
//           fonctionner leurs secteurs d'activité en priorité, nous vous
//           conseillons énergétiquement tout en restant à votre écoute. Nous nous
//           adaptons à chaque activité professionnelle en proposant des solutions
//           et des alternatives fiables, en accord avec votre profession. Nos
//           services s’adressent à tous les corps de métier notamment les
//           collectivités, les artisans, les bâtiments, les industriels et les
//           agriculteurs. Nous mettons également à votre disposition des
//           alternatives plus écologiques grâce à l’énergie verte afin d’œuvrer
//           dans la préservation de l’environnement. Nous sommes à l’affût des
//           dernières mises à jour et nous fournissons des solutions économiques
//           sur le court et le long terme.
//         </p>
//       </main>
//       <section>
//         <div>
//           <img src={Ampoule} alt="Ampoule économies d'énergie" />
//           <div>
//             <h3>Que faisons-nous ?</h3>
//             <p>
//               Garantie Réseau Direct vous offre un service simple et gratuit
//               afin de comparer les offres des fournisseurs. Parce que chaque
//               entreprise consomme différemment, GRD s'engage à respecter les
//               besoins de ses clients. Nous avons instauré des clauses
//               temporelles et économiques qui impliquent le respect des
//               préférences spécifiques du client (énergie renouvelable, mode de
//               facturation, paiement) mais également la structuration de tarif
//               que ce soit en prix unique ou en horosaisonnalité. Vous pouvez
//               également profiter de prix fixes ou indexés en fonction de l’offre
//               à laquelle vous avez souscrit.
//             </p>
//           </div>
//         </div>
//       </section>
//       <section>
//         <h3>Garantie Réseau Dirrect c'est aussi :</h3>
//         <ul>
//           <li>
//             Des bornes de recharge pour voitures électriqus au meilleur prix
//           </li>
//           <li>
//             Un renouvellement de contrat avec les offres les plus adaptées à
//             votre entreprise
//           </li>
//           <li>
//             Un renouvellement de contrat au moment opportun, c'est-à-dire quand
//             les prix sont à la baisse
//           </li>
//           <li>Un accompagnement professionnel, gratuit et efficace</li>
//           <li>Des équipes disponibles pour répondre à vos questions</li>
//           <li>
//             Une garantie de satisfaction totale : votre satisfaction est notre
//             priorité absolue, et nous nous engageons à vous offrir une
//             expérience de service exceptionnelle à chaque étape.
//           </li>
//         </ul>
//       </section>
//     </div>
//   );
// }

// export default Accueil;
import React from "react";
import Ampoule from "../assets/images/Ampoule.jpg";

function Accueil() {
  return (
    <div>
      <main>
        <h1>
          Spécialistes du courtage en énergie pour les professionnels à Lorient
          | Garantie Réseau Direct
        </h1>
        <h2>
          Des solutions d'énergie fiables et rentables pour les entreprises en
          Bretagne.
        </h2>
        <p>
          Garantie Réseau Direct, établie en 2018, est votre expert de confiance
          en courtage d'énergie pour les professionnels en Bretagne. Nous sommes
          spécialisés dans la fourniture de solutions énergétiques sur mesure
          pour chaque type d'activité professionnelle, y compris les
          collectivités, les artisans, les bâtiments industriels et les
          agriculteurs.
        </p>
        <p>
          Grâce à une analyse précise de votre consommation et à une
          connaissance approfondie du marché de l'énergie, nous proposons des
          solutions et des alternatives fiables pour optimiser votre
          consommation d'énergie et réduire vos coûts.
        </p>
      </main>
      <section>
        <div>
          <img
            src={Ampoule}
            alt="Concept d'économies d'énergie avec une ampoule"
          />
          <div>
            <h3>Comment optimisons-nous votre consommation d'énergie ?</h3>
            <p>
              Nous comparons de manière exhaustive les offres de différents
              fournisseurs d'énergie pour vous proposer la meilleure option en
              fonction de votre consommation et de vos besoins spécifiques.
              Notre service inclut également la gestion des clauses temporelles
              et économiques, le choix entre des tarifs uniques ou en
              horosaisonnalité, et l'option de tarifs fixes ou indexés.
            </p>
          </div>
        </div>
      </section>
      <section>
        <h3>Garantie Réseau Direct c'est aussi</h3>
        <ul>
          <li>
            Des bornes de recharge pour voitures électriques à des prix
            compétitifs.
          </li>
          <li>
            Un accès direct et privilégié aux offres des fournisseurs d'énergie,
            grâce à nos partenariats.
          </li>
          <li>
            Un renouvellement de vos contrats avec les offres les plus adaptées
            à votre entreprise et ce, au moment opportun.
          </li>
          <li>
            Un accompagnement professionnel gratuit et efficace tout au long du
            processus.
          </li>
          <li>Des équipes disponibles pour répondre à vos questions</li>
          <li>
            La satisfaction client au coeur de nos préoccupations. Nous nous
            engageons à vous fournir un service exceptionnel à chaque étape.
          </li>
        </ul>
      </section>
    </div>
  );
}

export default Accueil;
