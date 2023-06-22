import "./Component CSS/Page1.css";
import hero from "../../src/assets/Img/hero.png";
import ingredients1 from "../../src/assets/Img/spices1.png";
import ingredients2 from "../../src/assets/Img/spices2.png";
import ingredients3 from "../../src/assets/Img/spices3.png";
import imgbox from "../../src/assets/Img/nasilemak.jpg";

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

          <div className="ingredients">
            <img className="ingredients-1" src={ingredients1} alt="" />
            <img className="ingredients-2" src={ingredients2} alt="" />
            <img className="ingredients-3" src={ingredients3} alt="" />
          </div>

          <div className="img-kiri">
            <img className="img-box" src={imgbox} alt="" />
            <h1>Tingkatkan Acara Anda dengan Keajaiban Kuliner Kami!</h1>
          </div>
        </div>

        <div className="beranda-kanan">
          <img className="hero-img" src={hero} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Page1;
