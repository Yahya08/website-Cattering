import "./Component CSS/Page1.css";
import hero from "../../src/assets/Img/hero.png"

// import Subpage1 from "./Subpage1"
import Back from "../assets/Img/Makanan.jpg";

function Page1() {
  return (
    <div className="beranda">
      <div className="sub-beranda">

        <div className="beranda-kiri">
          <div className="headline-hero">
            <li>
              <span>Catering Andalan,</span>
            </li>
            <li>
              <span>Sesuai dengan</span>
            </li>
            <li>
              <span>Harapan!</span>
            </li>
          </div>
        </div>

        <div className="beranda-kanan">
         <div className="hero">
            <img className="hero-img" src={hero} alt="" />
         </div>
        </div>
      </div>
    </div>
  );
}

export default Page1;
