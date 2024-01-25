import axios from "axios";
import Cookies from "js-cookie";

const Login = ({ url, setToken }) => {
  return (
    <div className="login-div">
      <h1>Se connecter</h1>
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          const email = document.querySelector("#login-email").value;
          const password = document.querySelector("#login-password").value;
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
        }}
      >
        <input type="email" id="login-email" placeholder="Adresse email" />
        <input type="text" id="login-password" placeholder="Mot de passe" />
        <button>Se connecter</button>
        <p>Pas encore de compte ? Inscris-toi !</p>
      </form>
    </div>
  );
};

export default Login;
