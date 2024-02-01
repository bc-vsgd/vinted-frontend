// import { useState, useEffect } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";

import axios from "axios";
// Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// Image
import vinted_logo from "../../img/vinted_logo.png";
// Style
import "./Header.css";
// Cookies
import Cookies from "js-cookie";

const Header = ({ token, setToken, sort, setSort, priceMin, setPriceMin }) => {
  let [searchParams, setSearchParams] = useSearchParams();

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
          <div>
            <input type="text" placeholder="          Recherche des articles" />
            <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" />
          </div>
          <div>
            <div>
              <label>Trier par prix</label>
              <select
                onChange={(e) => {
                  console.log(e.target.value);
                  setSort(e.target.value);
                  setSearchParams({ sort: e.target.value });
                }}
              >
                <option value={"price-asc"}>Croissant</option>
                <option value={"price-desc"}>Décroissant</option>
              </select>
            </div>
            <div>
              <label className="price-min-label">
                Prix min.
                <input
                  type="text"
                  name="price-min"
                  id="price-min"
                  value={priceMin}
                  onChange={(e) => {
                    console.log(e.target.value);
                    setPriceMin(e.target.value);
                    setSearchParams({ priceMin: e.target.value });
                  }}
                />
              </label>
            </div>
          </div>
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
