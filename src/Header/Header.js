import React from 'react';
import './Header.css';

function Header(props) {
    return (

        <div className="Header">
            <div>{props.logo}:</div>
            <h1>{props.appName}:</h1>
            <h2>{props.autor.slogan}</h2>

        </div>


    );
}
export default Header;