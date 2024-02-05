// Style
import "./Login.css";

// Packages
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";

const Login = ({ url, setToken }) => {
  // Hooks
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();
  // Form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (email && password) {
        const response = await axios.post(`${url}/user/login`, {
          email,
          password,
        });
        console.log("response log in >>>>> ", response.data.foundUser.token);
        const user = response.data.foundUser;
        const token = user.token;
        console.log("Log in >> token >> ", token);
        Cookies.set("token", token);
        setToken(token);
        navigate("/");
      } else {
        setErrorMessage("Veuillez remplir tous les champs");
      }
    } catch (error) {
      console.log(error.response);
    }
  };

  return (
    <div className="login-div">
      <h1>Se connecter</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          id="login-email"
          placeholder="Adresse email"
          value={email}
          onChange={(e) => {
            setErrorMessage("");
            setEmail(e.target.value);
          }}
        />
        <input
          type="password"
          id="login-password"
          placeholder="Mot de passe"
          value={password}
          onChange={(e) => {
            setErrorMessage("");
            setPassword(e.target.value);
          }}
        />
        {errorMessage && <p>{errorMessage}</p>}
        <button>Se connecter</button>
        <p>
          Pas encore de compte ? <Link to="/signup">Inscris-toi !</Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
