import React from "react";
import Ampoule from "../assets/images/Ampoule.jpg";

function Accueil() {
  return (
    <div>
      <main className="main">
        <p className="main__company-name">Garantie Réseau Direct</p>
        <h1 className="main__h1">
          Spécialistes du courtage en énergie pour les professionnels à Lorient
        </h1>
        <h2 className="main__h2">
          Des solutions d'énergie fiables et rentables pour les entreprises de
          Bretagne.
        </h2>
        <p className="main__p">
          Garantie Réseau Direct est depuis 2018 votre expert de confiance en
          courtage d'énergie pour les professionnels en Bretagne. Nous sommes
          spécialisés dans la fourniture de solutions énergétiques sur mesure
          pour chaque type d'activité professionnelle, y compris les
          collectivités, les artisans, les bâtiments industriels et les
          agriculteurs.
        </p>
        <p className="main__p">
          Grâce à une analyse précise de votre consommation et à une
          connaissance approfondie du marché de l'énergie, nous proposons des
          solutions et des alternatives fiables pour optimiser votre
          consommation d'énergie et réduire vos coûts.
        </p>
      </main>
      <section>
        <div className="image__text__container">
          <img
            src={Ampoule}
            alt="économies d'énergie avec ampoule"
            className="main__image"
          />
          <div className="h3__p__container">
            <h3 className="image__text__element main__h3">
              Comment optimisons-nous vos factures d'énergie ?
            </h3>
            <p className="image__text__element main__paragraph">
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
      <section className="also__section">
        <h3 className="image__text__element main__h3">
          Garantie Réseau Direct c'est aussi :
        </h3>
        <ul>
          <li className="home__li">
            Des bornes de recharge pour voitures électriques à des prix
            compétitifs.
          </li>
          <li className="home__li">
            Un accès direct et privilégié aux offres des fournisseurs d'énergie,
            grâce à nos partenariats.
          </li>
          <li className="home__li">
            Un renouvellement de vos contrats avec les offres les plus adaptées
            à votre entreprise et ce, au moment opportun.
          </li>
          <li className="home__li">
            Un accompagnement professionnel gratuit et efficace tout au long du
            processus.
          </li>
          <li className="home__li">
            Des équipes disponibles pour répondre à vos questions
          </li>
          <li className="home__li">
            La satisfaction client au coeur de nos préoccupations. Nous nous
            engageons à vous fournir un service exceptionnel à chaque étape.
          </li>
        </ul>
      </section>
    </div>
  );
}

export default Accueil;
