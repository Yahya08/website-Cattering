import "./Component CSS/Page1.css"
// import Subpage1 from "./Subpage1"
import Back from "../assets/Img/Makanan.jpg"

function Page1() {
    return (
     
    <div className="hal-satu">
      <div className="subpage1">

       <div className="hal-kiri">
          <div className="text-hal">
          <li><h1>K</h1><span>urnia</span></li>
          <li><h1>K</h1><span>urnia</span></li>
          <li><h1>K</h1><span>urnia</span></li>


          </div>
          <div className="ling">

          <div className="ling-kiri">
               
          </div>
          <div className="ling-kiri">
              
          </div>
          <div className="ling-kiri">
              
          </div>
          </div>
          <div className="home-kolom">
         
       </div>
       </div>
       <div className="hal-kanan">
            
          <div className="lingkaran">
             <img className="back" src={Back} alt="" />
             <img className="back1" src={Back} alt="" />

             <img className="back2" src={Back} alt="" />

          </div>
       </div>
       
      </div>

    </div>
    )
  }
  
  export default Page1