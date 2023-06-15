import { Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Header";
import Contact from "./pages/Contact";
import Recrutement from "./pages/Recrutement";
import Admin from "./pages/Admin";
import Login from "./pages/Login";
import Fournisseurs from "./pages/Fournisseurs";
import Accueil from "./pages/Accueil";
import Footer from "./components/footer/Footer";
import { AuthProvider, useAuth } from "./contexts/AuthContext";

function App() {
  return (
    <AuthProvider>
      <AppRoutes />
    </AuthProvider>
  );
}

function AppRoutes() {
  const { isAuthenticated } = useAuth();

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="fournisseurs" element={<Fournisseurs />} />
        <Route path="recrutement" element={<Recrutement />} />
        <Route path="contact" element={<Contact />} />
        <Route path="login" element={<Login />} />
        {isAuthenticated && <Route path="/admin" element={<Admin />} />}
        <Route path="*" element={<Accueil />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
