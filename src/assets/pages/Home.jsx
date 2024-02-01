// Packages
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import axios from "axios";
// Components
import OffersDiv from "../components/Home/OffersDiv";
// Images
const heroImageUrl =
  "https://static.vinted.com/assets/seller-promotion/other/banner-wide-9b45d0aa9a311c4ff6013e9cf3bc2b6646468be3d2f553192c63598685fcc177.jpg";

const Home = ({ url, sort, setSort, priceMin, setPriceMin }) => {
  let [searchParams, setSearchParams] = useSearchParams();
  setSort(searchParams.get("sort") || "price-asc");
  setPriceMin(searchParams.get("priceMin") || "0");

  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async (url) => {
      try {
        const response = await axios.get(
          `${url}/offers?sort=${sort}&priceMin=${priceMin}`
        );
        // console.log("Home - page > response > ", response);
        setData(response);
      } catch (error) {
        console.log(error.response);
      }
      setIsLoading(false);
    };
    fetchData(url);
  }, [sort, priceMin]);

  return (
    <>
      {!isLoading && (
        <div className="homepage">
          <div className="hero">
            <div>
              <div className="container">
                <div>
                  <p>Prêts à faire du tri dans vos placards ?</p>
                  <button>Commencer à vendre</button>
                </div>
              </div>
              <img src={heroImageUrl} alt="Hero image" />
            </div>
          </div>

          <OffersDiv data={data} />
        </div>
      )}
    </>
  );
};

export default Home;
