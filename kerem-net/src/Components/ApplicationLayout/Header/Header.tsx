import React from "react";
import keremNet from '../../../Assets/keremnet.png';
import './Header.css'

const Header: React.FC = () => {
    return(
    <header>
        <img className="logo" src= {keremNet}/>
        <h1>Welcome to Kerem Net!</h1>
    </header>
    );
}

export default Header;