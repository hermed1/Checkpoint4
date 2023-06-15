import { Route, Routes } from "react-router-dom";
import Contact from "./pages/Contact";
import Recrutement from "./pages/Recrutement";
import Admin from "./pages/Admin";
import Login from "./pages/Login";
import Fournisseurs from "./pages/Fournisseurs";
import Accueil from "./pages/Accueil";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="fournisseurs" element={<Fournisseurs />} />
        <Route path="recrutement" element={<Recrutement />} />
        <Route path="contact" element={<Contact />} />
        <Route path="login" element={<Login />} />
        <Route path="admin" element={<Admin />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
