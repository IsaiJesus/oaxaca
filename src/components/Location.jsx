import { Link } from "react-router-dom";
import { FaShare, FaStar } from "react-icons/fa";
import imageLocation from "../assets/oaxaca.jpg";

export default function Location() {
  return (
    <div className="box-location">
      <div className="box-img-location">
        <img src={imageLocation} />
      </div>
      <div className="box-info-location">
        <div className="semibox-info-location">
          <h2>Oaxaca de Juárez</h2>
          <div className="location-rank">
            <p>4.5</p>
            <div className="location-rank-stars">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
          </div>
        </div>
        <Link to="/map">Llévame <FaShare/></Link>
      </div>
    </div>
  );
}
