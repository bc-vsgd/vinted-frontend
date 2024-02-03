// Style
import "./Publish.css";
// Packages
import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import axios from "axios";
//
const Publish = ({ url, token }) => {
  const navigate = useNavigate();
  const [picture, setPicture] = useState(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [brand, setBrand] = useState("");
  const [size, setSize] = useState("");
  const [color, setColor] = useState("");
  const [condition, setCondition] = useState("");
  const [city, setCity] = useState("");
  const [price, setPrice] = useState(0);
  const [payment, setPayment] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("title", title);
      formData.append("picture", picture);
      formData.append("description", description);
      formData.append("brand", brand);
      formData.append("size", size);
      formData.append("color", color);
      formData.append("condition", condition);
      formData.append("city", city);
      formData.append("price", price);
      formData.append("payment", payment);

      const response = await axios.post(`${url}/offer/publish`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      });
      console.log(response.data);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  return token ? (
    <div className="publish-div">
      <h1>Vends ton article</h1>
      <form onSubmit={handleSubmit}>
        {/* Picture(s) */}
        <div>
          <div>
            <label>
              Ajoute une photo
              <input
                type="file"
                name="picture"
                id="picture"
                onChange={(e) => {
                  console.log(e.target.files);
                  setPicture(e.target.files[0]);
                }}
              />
            </label>
            {picture && <img src={URL.createObjectURL(picture)} alt="Image" />}
          </div>
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
    <Navigate to="/login" />
  );
};

export default Publish;
