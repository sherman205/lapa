import React from "react";
import { Link } from "gatsby";
import './styles/navSmall.scss';

const NavSmall = () => {
    return (
        <div className="navSmall">
            <div className="links">
                <Link exact activeClassName="active" to={'/'}>
                    <span id="home">Home</span>
                </Link>
                <Link exact activeClassName="active" to={'/recipes'}>
                    <span id="recipes">Recipes</span>
                </Link>
                <Link exact activeClassName="active" to={'/about'}>
                    <span id="about">About</span>
                </Link>
                <Link exact activeClassName="active" to={'/contact'}>
                    <span id="contact">Contact</span>
                </Link>
            </div>
            <div className="search">
            </div>
        </div>
    );
}

export default NavSmall;
