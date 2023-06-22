import "./assets CSS/Footer.css"
import {FiMap,FiMail} from "react-icons/fi";
import { AiOutlinePhone,AiFillInstagram,AiFillFacebook} from "react-icons/ai";
// import Img from ".././assets/Img/Card/png1.png"
function Footer() {
  return (
   <div className="footer">
   <div className="iner-footer">
   
    <div className="fot-listt">
    <div className="judul-foot">
      <div className="spanwar">
      <h1 className="jud-fot-h1">K<span className="span-k">urnia</span></h1>
      <h1 className="jud-fot-h2">C<span className="span-k">etering</span></h1>


      </div>
    </div>
    <div className="quick-links">
      <ul className="ul-foot2">
        <li className="quick-item"><a className="afot" href="">Team</a>
         
          <p className="p-fot" >Agus Kurniawan</p>
          <p className="p-fot" >Khoirudin Yoga P</p>
          <p className="p-fot" >Angga Airul R</p>
          <p className="p-fot" >Angga Airul R</p>
          <p className="p-fot" >Angga Airul R</p>
          <p className="p-fot" >Angga Airul R</p>
        
        </li>
      </ul>
    </div>
    <div className="fot-contact">
    <ul className="ul-foot2">
        <li className="quick-item"><a className="afot" href="">Conact</a>

          <p className="p-fot" ><FiMail/> <a className="p-fot" href="">namapenggunanyagus</a></p>
          <p className="p-fot" ><AiOutlinePhone/> <a className="p-fot" href="">085870847511</a></p>
          <p className="p-fot" ><FiMap/> <a className="p-fot" href="">Location</a></p>

        </li>
      </ul>
    </div>

    <div className="fot-contact">
    <ul className="ul-foot2">
        <li className="quick-item"><a className="afot" href="">Social Media</a>
         
         
          <p className="p-fot" ><AiFillInstagram/> <a className="p-fot" href="">Instagram</a> </p>
          <p className="p-fot" ><AiFillFacebook/> <a className="p-fot" href="">Facebook</a> </p>
        </li>
      </ul>
    </div>
    

   </div>

    </div>
     
   </div>
  )
}

export default Footer