// Components
import OffersDiv from "../components/Home/OffersDiv";

const Home = ({ data }) => {
  // data: {count, offers}
  return (
    <div className="homepage">
      <div>
        <p>Prêts à faire du tri dans vos placards ?</p>
        <button>Commencer à vendre</button>
      </div>
      <OffersDiv data={data} />
    </div>
  );
};

export default Home;
