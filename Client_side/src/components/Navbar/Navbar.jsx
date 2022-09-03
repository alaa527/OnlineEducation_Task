import React from 'react'
import style from "./Navbar.module.css"
import logo from "../../img/bulb.PNG"
function Navbar() {
  return (
    <div>
    
    <nav className={`navbar navbar-expand-lg bg-light ${style.Navstyle}`}>
  <div className="container">
    <a className="navbar-brand" href="#">
        <img src={logo} className={style.bulblogo}></img> Education</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav m-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active text-primary" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link " aria-current="page" href="#">Words</a>
        </li>
        <li className="nav-item">
          <a className="nav-link " aria-current="page" href="#">Rank</a>
        </li>
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-primary" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>

    </div>
  )
}

export default Navbar