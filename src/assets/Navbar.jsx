import "./assets CSS/Navbar.css"

function Navbar() {
  return (
    <nav>
      <a href="#">Home</a>
      <a href="#">About</a>
      <a href="#">Blog</a>
      <a href="#">Portfolio</a>
      <a href="#">Contact</a>
      <div className="animation start-home"></div>
    </nav>
  )
}

export default Navbar