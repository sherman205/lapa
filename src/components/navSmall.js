import React from "react";
import { Link } from "gatsby";
import Search from './search';
import './styles/navSmall.scss';

const NavSmall = () => {
    return (
        <div className="navSmall">
            <div className="links">
                <Link activeClassName="active" to={'/'}>
                    <span id="home">Home</span>
                </Link>
                <Link activeClassName="active" to={'/recipes'}>
                    <span id="recipes">Recipes</span>
                </Link>
                <Link activeClassName="active" to={'/about'}>
                    <span id="about">About</span>
                </Link>
                <Link activeClassName="active" to={'/contact'}>
                    <span id="contact">Contact</span>
                </Link>
            </div>
            <div className="search">
                <Search />
            </div>
        </div>
    );
}

export default NavSmall;
