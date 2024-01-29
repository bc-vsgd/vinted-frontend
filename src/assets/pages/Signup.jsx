// Packages
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";

const Signup = ({ url, setToken }) => {
  // Hooks
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [newsletter, setNewsletter] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();
  // Form submit
  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      if (username && email && password) {
        const response = await axios.post(`${url}/user/signup`, {
          username,
          email,
          password,
          newsletter,
        });
        const { account } = response.data;
        const userToken = account.token;
        Cookies.set("token", userToken);
        setToken(userToken);
        navigate("/");
      } else {
        setErrorMessage("Veuillez remplir tous les champs");
      }
    } catch (error) {
      console.log(error.response);
    }
  };
  return (
    <div className="signup-div">
      <h1>S'inscrire</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          id="username"
          placeholder="Nom d'utilisateur"
          value={username}
          onChange={(e) => {
            setErrorMessage("");
            setUsername(e.target.value);
          }}
        />
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Email"
          value={email}
          onChange={(e) => {
            setErrorMessage("");
            setEmail(e.target.value);
          }}
        />
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Mot de passe"
          value={password}
          onChange={(e) => {
            setErrorMessage("");
            setPassword(e.target.value);
          }}
        />
        <div>
          <div>
            <input
              id="newsletter"
              name="newsletter"
              type="checkbox"
              value={newsletter}
              onChange={(e) => {
                setNewsletter(!newsletter);
              }}
            />
            <label htmlFor="newsletter">S'inscrire à notre newsletter</label>
          </div>
          <p>
            En m'inscrivant je confirme avoir lu et accepté les Termes &
            Conditions et Politique de Confidentialité de Vinted. Je confirme
            avoir au moins 18 ans.
          </p>
        </div>
        {errorMessage && <p>{errorMessage}</p>}
        <button>S'inscrire</button>
        <p>
          Tu as déjà un compte ? <Link to="/login">Connecte-toi !</Link>
        </p>
      </form>
    </div>
  );
};

export default Signup;
