// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import logo from "../../assets/images/grd_logo.png";

// function Header() {
//   const [isActive, setIsActive] = useState(false);

//   const toggleMenu = () => {
//     setIsActive(!isActive);
//   };

//   const handleKeyDown = (event) => {
//     if (event.key === "Enter" || event.key === " ") {
//       toggleMenu();
//     }
//   };

//   return (
//     <div className="header">
//       <div className={`navbar ${isActive ? "active" : ""}`}>
//         <div className="navbar__links__container">
//           <Link to="/" onClick={toggleMenu}>
//             Accueil
//           </Link>
//           <Link to="/fournisseurs" onClick={toggleMenu}>
//             Nos fournisseurs
//           </Link>
//           <Link to="/recrutement" onClick={toggleMenu}>
//             Recrutement
//           </Link>
//           <Link to="/contact" onClick={toggleMenu}>
//             Devis
//           </Link>
//         </div>
//         <div
//           className={isActive ? " burger burger--active" : "burger"}
//           onClick={toggleMenu}
//           onKeyDown={handleKeyDown}
//           role="button"
//           tabIndex={0}
//         >
//           <span />
//           <span />
//           <span />
//         </div>
//       </div>

//       <img src={logo} alt="logo_grd" className="logo-grd" />
//       <p>GARANTIE RESEAU DIRECT</p>
//       <a href="tel:+33625717765">06 25 71 77 65</a>
//       <p>Notre énergie pour vos énergies</p>
//     </div>
//   );
// }

// export default Header;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/grd_logo.png";

function Header() {
  const [isActive, setIsActive] = useState(false);

  const toggleMenu = () => {
    setIsActive(!isActive);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter" || event.key === " ") {
      toggleMenu();
    }
  };

  return (
    <div className="header">
      <div className={`navbar ${isActive ? "active" : ""}`}>
        <div className={`navbar__links__container ${isActive ? "active" : ""}`}>
          <Link to="/" onClick={toggleMenu}>
            Accueil
          </Link>
          <Link to="/fournisseurs" onClick={toggleMenu}>
            Nos fournisseurs
          </Link>
          <Link to="/recrutement" onClick={toggleMenu}>
            Recrutement
          </Link>
          <Link to="/contact" onClick={toggleMenu}>
            Devis
          </Link>
        </div>
        <div
          className={`burger ${isActive ? "active" : ""}`}
          onClick={toggleMenu}
          onKeyDown={handleKeyDown}
          role="button"
          tabIndex={0}
        >
          <div className="burger__div" />
          <div className="burger__div" />
          <div className="burger__div" />
        </div>
      </div>
      <div className="header__logo__text__container">
        <img src={logo} alt="logo_grd" className="logo-grd" />
        {/* <p>GARANTIE RESEAU DIRECT</p> */}
        {/* <a href="tel:+33625717765">06 25 71 77 65</a>
        <p>Notre énergie pour vos énergies</p> */}
      </div>
    </div>
  );
}

export default Header;
