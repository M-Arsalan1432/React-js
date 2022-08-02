import React from "react";
import logo from './logo.jpg';
import './Style.css';


function Header(){
    return (
      <div>
        <img src={logo} />
        <h1> Catalyic Tech</h1>
      </div>

    );
}

export default Header;