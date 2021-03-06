import React from "react";
import { Link } from "gatsby";
import Search from './search';
import "./styles/nav.scss";

const Nav = () => {
    return (
        <div className="nav-bar">
            <div className="nav">
                <div className="left">
                    <Link activeClassName="active" to={'/'}>
                        <span id="home">Home</span>
                    </Link>
                    <Link activeClassName="active" to={'/recipes'}>
                        <span id="recipes">Recipes</span>
                    </Link>
                </div>
                <h1 className="nav-title playfairBold"> Lapa</h1>
                <div className="right">
                    <Link activeClassName="active" to={'/about'}>
                        <span id="about">About</span>
                    </Link>
                    <Link activeClassName="active" to={'/contact'}>
                        <span id="contact">Contact</span>
                    </Link>
                </div>
            </div>
            <div className="search">
                <Search />
            </div>
        </div>
    );
}

export default Nav;
