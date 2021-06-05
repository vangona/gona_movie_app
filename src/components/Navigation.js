import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";
 
function Navigation(){
    return (
    <div class="navigation__container">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
    </div>
    );
}

export default Navigation;