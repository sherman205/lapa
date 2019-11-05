import React, { Component } from 'react';
import { Link } from "gatsby";
// import Search from '../../components/search/search'

// import './navMobile.scss';

export default class NavMobile extends Component {
    state = {
        visible: 'hide'
    }

    toggleMenu = () => {
        if (this.state.visible === 'show'){
            this.setState({
                visible: 'hide'
            });
            document.body.classList.remove("noScroll");
        }
        if (this.state.visible === 'hide') {
            this.setState({
                visible: 'show'
            });
            document.body.classList.add("noScroll");
        }
    }
    closeMenu = () => {
        if (this.state.visible === 'show'){
            this.setState({
                visible: 'hide'
            });
            document.body.classList.remove("noScroll");
        }
    }

    render() {
        return (
            <>
                <div className="nav-mobile" onClick={this.closeMenu}>
                    <div className="hamburg" onClick={this.toggleMenu}>
                        <div className="top" />
                        <div className="bottom" />
                    </div>
                    <span className="nav-mobile-title playfair">lapa</span>
                    <div className="search">
                        {/* <Search /> */}
                    </div>
                </div>
                <div className={`slide-menu ${this.state.visible}`}>
                    <div className="links">
                        <Link className="playfair" activeClassName="active" to={'/'} onClick={this.toggleMenu}>
                            <span id="home">Home</span>
                        </Link>
                        <Link className="playfair" activeClassName="active" to={'/recipes'} onClick={this.toggleMenu}>
                            <span id="recipes">Recipes</span>
                        </Link>
                        <Link className="playfair" activeClassName="active" to={'/about'} onClick={this.toggleMenu}>
                            <span id="about">About</span>
                        </Link>
                        <Link className="playfair" activeClassName="active" to={'/contact'} onClick={this.toggleMenu}>
                            <span id="contact">Contact</span>
                        </Link>
                    </div>
                </div>
            </>
        );
    }
    
}