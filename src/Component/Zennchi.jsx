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
    <h1 className="judulpage5slide">judul</h1>
    <div className="sideside">

    <div className="card-anim">
      <div className="cardanimimg"></div>
      <div className="deskripsipromo">
        <h1 className="judul-anim">Judull</h1>
        <p className="text-anim">aku juga mau</p>
        <a className="text-anim" href="">Hubungi kami </a>
      </div>
      <img className="promo-img" src={Promo} alt="" />
      
    </div>


    <div className="page5kanan">
      <div className="kananfoto1">

      <img className="promokanan"src={Promo} alt="" />
        <div className="kanandeskripsi">
          <h1 className="h1-detail">Haloo</h1>
        </div>
        <div className="desdeta">
         <a className="hub-btn" href="">Hubungi Kami</a>
          <div className="detail">
            <h1 className="h1-detail1">Nasi lemak</h1>
            <p className="h1-detail1">Nasilemak untuk awokawok</p>
            <h2 className="h1-detail1">Harga <span>20K</span></h2>
          </div>
        </div>
      </div>
      <div className="kananfoto1">

<img className="promokanan"src={Promo} alt="" />
  <div className="kanandeskripsi">
    <h1 className="h1-detail">Haloo</h1>
  </div>
  <div className="desdeta">
   <a className="hub-btn" href="">Hubungi Kami</a>
    <div className="detail">
      <h1 className="h1-detail1">Nasi lemak</h1>
      <p className="h1-detail1">Nasilemak untuk awokawok</p>
      <h2 className="h1-detail1">Harga <span>20K</span></h2>
    </div>
  </div>
</div>
      
    </div>
   </div>

   </div>
    </div>
   
    </div>
  )
}

export default Zennchi

