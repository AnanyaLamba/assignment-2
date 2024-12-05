import "./searchbar.css";
import search from "../../Assets/fi_search.png";
import MapPin from "../../Assets/MapPin.png";
import Crosshair from "../../Assets/Crosshair.png";
const Searchbar = () => {
  return (
    <div className="search_container">
      <div className="searchbar">
        <img src={search} alt="search" />
        <p>Search By: job , title , position , Keyword...</p>
      </div>
      <div className="location">
        <img src={MapPin} alt="Map" />
        <p>City , State or country</p>
        <img src={Crosshair} alt="Crosshair" />
      </div>
    </div>
  );
};

export default Searchbar;
