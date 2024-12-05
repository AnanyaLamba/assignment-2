import "./footer.css";
import Vector from "../../Assets/Vector.png";
import instagram from "../../Assets/instagram.png";
import twitter from "../../Assets/twitter.png";
import youtube from "../../Assets/youtube.png";
import copyright from "../../Assets/copyright.png";
const Footer = () => {
    return ( 
        <div className="footer_container">
            <div className="left_footer">
                <p>@ 2024 Explorin. All rights Reserved</p>
            </div>
            <div className="right">
                <img src={Vector} alt="facebook" />
                <img src={youtube} alt="youtube" />
                <img src={instagram} alt="instagram" />
                <img src={twitter} alt="twitter" />
            </div>
        </div>
     );
}
 
export default Footer;