import React from 'react'
import "./Navbar.css"
import logo1 from "../logo1.png"
import socialmedia from "../Frame111.png"
const Navbar = () => {
  return (
    <div>
        <nav className="navbar navbar-expand-lg  navbar-custom"  >
  <div className="container-fluid ">
    <a className="navbar-brand" href="#"><img src={logo1} className='logo'/></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse shift" id="navbarSupportedContent" >
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#"><span>Platform{" "}</span></a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#"><span>Estate Upcare Coin{"   "}</span></a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#"><span>How To Buy{"   "}</span></a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#"><span>Roadmap</span></a>
        </li>
       
        <li className="nav-item">
          <a className="nav-link" href="#"><span>FAQ</span></a>
        </li>
          
   
  
       
      
      </ul>
      <button className='btn btn-light btn1'>EN</button>
      <img src={socialmedia} className='social'/>
      
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar