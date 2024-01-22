// Components
import OffersDiv from "../components/Home/OffersDiv";
// Images
const heroImageUrl =
  "https://static.vinted.com/assets/seller-promotion/other/banner-wide-9b45d0aa9a311c4ff6013e9cf3bc2b6646468be3d2f553192c63598685fcc177.jpg";

const Home = ({ data }) => {
  // data: {count, offers}
  return (
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
  );
};

export default Home;
