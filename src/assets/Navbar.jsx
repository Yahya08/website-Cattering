import "./assets CSS/Navbar.css";
import { MdFastfood } from "react-icons/md";

function Navbar() {
  return (
    <div className="navbar">
      <h1><MdFastfood/> Kurnia Catering</h1>
      <nav>
        <a href="#">Beranda</a>
        <a href="#">Menu</a>
        <a href="#">Kontak</a>
        <a href="#">Tentang</a>
        <div className="animation start-home"></div>
      </nav>
    </div>
  );
}

export default Navbar;
