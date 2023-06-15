import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useApi from "../services/useApi";

function Login() {
  const api = useApi();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmitLogin = (event) => {
    event.preventDefault();
    api
      .post("/login", { email, password })
      .then((response) => {
        console.warn(response);
        localStorage.setItem("token", response.data.token);
        navigate("/admin");
      })
      .catch((err) => console.error(err));
  };

  return (
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
  );
}

export default Login;
