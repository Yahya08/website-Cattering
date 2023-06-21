import "../Component/Component CSS/Zenn.css"
import Img from "../assets/Img/Card/2b28d9c2-703d-4430-a653-3c971bdf0ce4.jpg"
import Promo from "../assets/Img/Card/png1.png"

function Zennchi() {
  return (
   <div className="bodyzeen">
    <div className="judul-pg">
      <h1>ggg</h1>
      <div className="style">

    <div className="card-makanan">
        <img className="card-img" src={Img} alt="" />
        <div className="card-text">
            <h1 className="menu-judul">Judul</h1>
            <p className="deskripsi-judul">Blablabla</p>
        </div>
    </div>
    <div className="card-makanan">
        <img className="card-img" src={Img} alt="" />
        <div className="card-text">
            <h1 className="menu-judul">Judul</h1>
            <p className="deskripsi-judul">Blablabla</p>
        </div>
    </div>
    <div className="card-makanan">
        <img className="card-img" src={Img} alt="" />
        <div className="card-text">
            <h1 className="menu-judul">Judul</h1>
            <p className="deskripsi-judul">Blablabla</p>
        </div>
    </div>
    <div className="card-makanan">
        <img className="card-img" src={Img} alt="" />
        <div className="card-text">
            <h1 className="menu-judul">Judul</h1>
            <p className="deskripsi-judul">Blablabla</p>
        </div>
    </div>
    <div className="card-makanan">
        <img className="card-img" src={Img} alt="" />
        <div className="card-text">
            <h1 className="menu-judul">Judul</h1>
            <p className="deskripsi-judul">Blablabla</p>
        </div>
    </div>
      </div>
    
   <div className="page5slide">
    <h1>judul</h1>
    <div className="card-anim">
      <div className="cardanimimg"></div>
      <div className="deskripsipromo">
        <h1>Judull</h1>
        <p>aku juga mau</p>
        <a href="">Hubungi kami</a>
      </div>
      <img className="promo-img" src={Promo} alt="" />
    </div>
   </div>

   </div>
    </div>
  )
}

export default Zennchi
