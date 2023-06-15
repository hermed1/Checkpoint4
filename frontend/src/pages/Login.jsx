import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import Signup from "../components/adminManager/Signup";
import useApi from "../services/useApi";

function Login() {
  const { setIsAuthenticated } = useAuth();
  const api = useApi();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showSignup, setShowSignup] = useState(false);
  const navigate = useNavigate();

  const handleSubmitLogin = (event) => {
    event.preventDefault();
    api
      .post("/login", { email, password })
      .then((response) => {
        console.warn(response);
        setIsAuthenticated(true);
        localStorage.setItem("token", response.data.token);
        navigate("/admin");
      })
      .catch((err) => console.error(err));
  };

  const handleClickShowSignup = () => {
    setShowSignup(!showSignup);
  };

  return (
    <div>
      <button type="button" onClick={handleClickShowSignup}>
        {showSignup ? "retour" : "Créer un compte"}
      </button>
      {showSignup ? (
        <Signup />
      ) : (
        <form onSubmit={handleSubmitLogin}>
          <label>
            Email:
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <label>
            Mot de passe:
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <button type="submit">Login</button>
        </form>
      )}
    </div>
  );
}

export default Login;
