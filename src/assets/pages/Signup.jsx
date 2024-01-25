import { Link, useNavigate } from "react-router-dom";
// Packages
import axios from "axios";
import Cookies from "js-cookie";

const Signup = ({ url, setToken }) => {
  const navigate = useNavigate();
  return (
    <div className="signup-div">
      <h1>S'inscrire</h1>
      <form
        onSubmit={async (e) => {
          try {
            e.preventDefault();
            const username = document.querySelector("#username").value;
            const email = document.querySelector("#email").value;
            const password = document.querySelector("#password").value;
            const newsletter = document.querySelector("#newsletter").checked;
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
          } catch (error) {
            console.log(error.message);
          }
        }}
      >
        <input type="text" id="username" placeholder="Nom d'utilisateur" />
        <input type="email" id="email" placeholder="Email" />
        <input type="text" id="password" placeholder="Mot de passe" />
        <div>
          <div>
            <input id="newsletter" type="checkbox" />
            <label>S'inscrire à notre newsletter</label>
          </div>
          <p>
            En m'inscrivant je confirme avoir lu et accepté les Termes &
            Conditions et Politique de Confidentialité de Vinted. Je confirme
            avoir au moins 18 ans.
          </p>
        </div>
        <button>S'inscrire</button>
        <p>
          Tu as déjà un compte ? <Link to="/login">Connecte-toi !</Link>
        </p>
      </form>
    </div>
  );
};

export default Signup;
