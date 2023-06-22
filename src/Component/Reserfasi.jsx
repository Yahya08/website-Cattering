import "./Component CSS/Reserfasi.css"
// import { Link } from "react-router-dom"
function Reserfasi() {
  return (
   <div className="loginlagi">

       <div className="login-kanan">
        <div className="login-body">

        
        <form className="forn-container">
            
            <h2>Make a  Reservation</h2>
            <div className="name">
               
                <input type="text-login" placeholder="First Name"  required />
                <input type="text-login" placeholder="Last Name"  required/>

            </div>
            <input type="email" placeholder="Email" required/>
            <input type="Number Phon" placeholder="Number Phon" required/>
            <div className="name">
               
               <input type="tgl" placeholder="Tanggal"  required />
               <input type="jam" placeholder="PM/AM"  required/>

           </div>
            
            <button className="sub-btn">Register</button>
        </form>
        </div>
       </div>

      
   </div>
  
  )
}

export default Reserfasi