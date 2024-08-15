import React from "react";
import './Navbar.css';
import Logo from "../../assets/Logo.png";

const Navbar = () =>{
    return (
    <nav>
        <div className="Logo">
        <img src={Logo} alt=""></img>
        </div>
        <div className="number">

            <p>📞 75060 00175</p>
        </div>
    </nav>)
}

export default Navbar