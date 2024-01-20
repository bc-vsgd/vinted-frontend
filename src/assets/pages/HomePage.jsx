import { Link } from "react-router-dom";
// Components
import OffersDiv from "../components/Home/OffersDiv";

const HomePage = ({ data }) => {
  //   console.log(data);
  return (
    <div className="homepage">
      <div>
        <p>Prêts à faire du tri dans vos placards ?</p>
        <button>Commencer à vendre</button>
      </div>
      <div>{/* <Link to="/offer">Lien offre</Link> */}</div>
      <OffersDiv data={data} />
    </div>
  );
};

export default HomePage;
