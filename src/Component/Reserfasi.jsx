import "./Component CSS/Reserfasi.css";
import Navbar from "../assets/Navbar";
// import Cover from "../assets/Img/Card/cover.jpg"
import Footer from "../assets/Footer";
function Reserfasi() {
  return (
    <div className="loginlagi">
        <div className="div-nav">

        <Navbar/>
        </div>
        <div className="fot-rese">

        <form className="forn-container">
          <h2>Register</h2>
          <div className="name">
            <input type="text-login" placeholder="First Name" required />
            <input type="text-login" placeholder="Last Name" required />
          </div>
          <input type="email" placeholder="Email" required />
          <div className="name">
            <input type="text-login" placeholder="Number Phon" required />
            <input type="date" placeholder="Last Name" required />
          </div>
          <button>Register</button>
        </form>
      <div className="login-kiri">
      <div className="home1-txt">
            <h2>Kurnia Catering <span>Nih bos</span></h2>
            <p>Dengan melayani askaakhkahsdshdjkhsdxcx
                jhg
            </p>
            <a href="">Hubungi</a>
          </div>
      </div>

        </div>
          <Footer/>
        
      </div>
    
  );
}

export default Reserfasi;
