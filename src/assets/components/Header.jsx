// import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// Image
import vinted_logo from "../img/vinted_logo.png";
// Cookies
import Cookies from "js-cookie";

const Header = ({ token, setToken }) => {
  const navigate = useNavigate();
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
          {!token ? (
            <>
              <Link to="/signup">
                <button className="sign-up-button">S'inscrire</button>
              </Link>
              <Link to="/login" token={token}>
                <button className="login-button">Se connecter</button>
              </Link>
            </>
          ) : (
            <button
              className="logout-button"
              onClick={() => {
                Cookies.remove("token");
                setToken("");
                navigate("/");
              }}
            >
              Se déconnecter
            </button>
          )}
        </div>
        <Link to="/publish" token={token}>
          <button className="publish-button">Vends tes articles</button>
        </Link>
      </div>
    </header>
  );
};

export default Header;
