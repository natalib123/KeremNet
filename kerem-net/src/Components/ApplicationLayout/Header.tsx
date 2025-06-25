import React from "react";
import keremNet from '../../Assets/keremnet.png';

const Header: React.FC = () => {
    return(
    <header>
        <img src= {keremNet}/>
        <h1>Welcome to Kerem Net!</h1>
    </header>
    );
}

export default Header;