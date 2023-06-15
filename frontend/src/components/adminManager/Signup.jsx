import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useApi from "../../services/useApi";

function Signup() {
  const api = useApi();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const navigate = useNavigate();

  const handleSubmitSignup = (event) => {
    event.preventDefault();

    api
      .post("/signup", { firstname, lastname, email, password })
      .then((response) => {
        console.warn(response);
        localStorage.setItem("token", response.data.token);
        navigate("/admin");
      })
      .catch((err) => console.error(err));
  };

  const handleBlur = () => {
    if (password !== confirmPassword) {
      setErrorMsg("Les mots de passe ne correspondent pas !");
    }
  };

  useEffect(() => {
    if (errorMsg) {
      const timer = setTimeout(() => {
        setErrorMsg("");
      }, 1000);

      return () => clearTimeout(timer);
    }
    return undefined;
  }, [errorMsg]);

  return (
    <form onSubmit={handleSubmitSignup}>
      <label>
        Prénom:
        <input
          type="text"
          value={firstname}
          onChange={(e) => setFirstname(e.target.value)}
        />
      </label>
      <label>
        Nom:
        <input
          type="text"
          value={lastname}
          onChange={(e) => setLastname(e.target.value)}
        />
      </label>
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
      <label>
        Confirmer le mot de passe:
        <input
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          onBlur={handleBlur}
        />
      </label>
      {errorMsg && <p>{errorMsg}</p>}
      <button type="submit">Sign Up</button>
    </form>
  );
}

export default Signup;
