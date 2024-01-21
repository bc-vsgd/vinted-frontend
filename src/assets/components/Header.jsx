import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// Image
import vinted_logo from "../img/vinted_logo.png";

const Header = () => {
  return (
    <header>
      <div className="container">
        <div>
          <Link to="/">
            <img src={vinted_logo} alt="Logo Vinted" />
          </Link>
        </div>
        <div>
          <input type="text" placeholder="          Recherche des articles" />
          <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" />
        </div>
        <div>
          <button className="sign-up-button">S'inscrire</button>
          <button className="log-in-button">Se connecter</button>
        </div>
        <button className="publish-button">Vends tes articles</button>
      </div>
    </header>
  );
};

export default Header;
