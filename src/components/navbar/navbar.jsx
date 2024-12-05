import briefcase from "../../Assets/briefcase.png";
import job from "../../Assets/job.png";
import BellRinging from "../../Assets/BellRinging.png";
import Ellipse from "../../Assets/Ellipse.png";
import "./navbar.css";
const Navbar = () => {
  return (
    <div className="container">
      {/* <h1>hello</h1> */}
      <div className="left">
        <img src={briefcase} alt="briefcase" />
        <h3>Explorin Solutions</h3>
      </div>
      <div className="nav_right">
        <div className="my_job">
          <img src={job} alt="job" />
          <h2>My saved jobs only</h2>
        </div>
        <div className="bell">
          <img src={BellRinging} alt="bell" />
          <img src={Ellipse} alt="img" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
