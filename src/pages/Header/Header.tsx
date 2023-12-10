import React from "react";
import "./header.scss";
import Logo from "../../features/Logo";

const Header = () => {
    return (
        <div id="header">
            <Logo />
            <p className="tag"> Welcome to your house </p>
            <div className="nav"> 
                <a href="/login"> Login </a>
                <a href="/signup"> Sign Up </a>
            </div>
        </div>
    )
}

export default Header;
