import { FaInstagram } from "react-icons/fa";
import Quetzcode from "../assets/quetzcode.svg";
import Adventurista from "../assets/adventurista.webp";

export default function Footer() {
  return (
    <footer>
      <div className="box-adventurista">
        <img src={Adventurista} alt="Adventurista" />
        <p>
          Calzada Tecnológico No. 27, C.P. 62780, Zacatepec de Hidalgo, Morelos.
          A.P. 45
        </p>
      </div>
      <div className="box-quetzcode">
        <img src={Quetzcode} alt="Quetzcode" />
        <a href="https://www.instagram.com/quetzcode/" target="_blank">
          Instagram
        </a>
      </div>
    </footer>
  );
}
