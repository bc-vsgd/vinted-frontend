// Style
import "./Publish.css";
// Packages
import { useState } from "react";
import { Navigate } from "react-router-dom";
//
const Publish = ({ token }) => {
  const [images, setImages] = useState(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [brand, setBrand] = useState("");
  const [size, setSize] = useState("");
  const [color, setColor] = useState("");
  const [condition, setCondition] = useState("");
  const [city, setCity] = useState("");
  const [price, setPrice] = useState(0);
  // console.log(title);
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log("submit");
    console.log(title, description, brand, size, color, condition, city, price);
  };
  return token ? (
    // return (
    <div className="publish-div">
      <h1>Vends ton article</h1>
      <form onSubmit={handleSubmit}>
        {/* Image(s) */}
        <div
          onClick={() => {
            console.log("clic photo");
          }}
        >
          Div photo
        </div>
        {/* title, description */}
        <div>
          <div>
            <label>
              Titre
              <input
                type="text"
                name="title"
                id="description"
                placeholder="ex: Chemise Sézane verte"
                onChange={(e) => {
                  setTitle(e.target.value);
                }}
              />
            </label>
          </div>
          <div>
            <label>
              Décris ton article
              <input
                type="text"
                name="description"
                id="description"
                placeholder="ex: porté quelques fois, taillé correctement"
                onChange={(e) => {
                  setDescription(e.target.value);
                }}
              />
            </label>
          </div>
        </div>
        {/* product_details */}
        <div>
          <div>
            <label>
              Marque
              <input
                type="text"
                name="brand"
                id="brand"
                placeholder="ex: Zara"
                onChange={(e) => {
                  setBrand(e.target.value);
                }}
              />
            </label>
          </div>
          <div>
            <label>
              Taille
              <input
                type="text"
                name="size"
                id="size"
                placeholder="ex: L / 40 / 12"
                onChange={(e) => {
                  setSize(e.target.value);
                }}
              />
            </label>
          </div>
          <div>
            <label>
              Couleur
              <input
                type="text"
                name="color"
                id="color"
                placeholder="ex: Fuchsia"
                onChange={(e) => {
                  setColor(e.target.value);
                }}
              />
            </label>
          </div>
          <div>
            <label>
              Etat
              <input
                type="text"
                name="condition"
                id="condition"
                placeholder="Neuf avec étiquette"
                onChange={(e) => {
                  setCondition(e.target.value);
                }}
              />
            </label>
          </div>
          <div>
            <label>
              Lieu
              <input
                type="text"
                name="city"
                id="city"
                placeholder="ex: Paris"
                onChange={(e) => {
                  setCity(e.target.value);
                }}
              />
            </label>
          </div>
        </div>
        {/* price */}
        <div>
          <div>
            <label>
              Prix
              <input
                type="text"
                name="price"
                id="price"
                placeholder="0,00 €"
                onChange={(e) => {
                  setPrice(e.target.value);
                }}
              />
            </label>
          </div>
          <div>
            <label>
              <input type="checkbox" />
              Je suis intéressé(e) par les échanges
            </label>
          </div>
        </div>
        {/* Button */}
        <div>
          <button>Ajouter</button>
        </div>
      </form>
    </div>
  ) : (
    // );
    // <div>Pas token</div>
    <Navigate to="/login" />
  );
};

export default Publish;
