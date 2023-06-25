import "./Component CSS/Tentang.css"
import Footer from "../assets/Footer"
import Navbar from "../assets/Navbar"
import Tim from "./Tim.jsx"

function Tentang() {
  return (
    <div className="tentang">
      <div className="tentang-nav">

      </div>

      <Navbar/>
      <div className="tentang-body">
        <Tim/>
      </div>
      <Footer/>
    </div>
  )
}

export default Tentang