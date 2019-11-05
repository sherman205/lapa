import React from "react";
import { Link } from "gatsby";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faPinterestP } from '@fortawesome/free-brands-svg-icons'
import './styles/mobileSplash.scss';


export default function MobileSplash() {
    return (
        <div className="mobile-splash">
            <div className="circle"></div>
            <div className="welcome">
                <p className="playfair">Welcome to</p>
                <p className="playfairBold"> Lapa</p>
            </div>
            <p className="summary">Your go-to place for finding creative and slightly nostalgic recipes. We take requests, so let's connect! Check out the feed below for our most recent content. Bon appetit!</p>
            <div className="what-do">
                <p className="nexaLight">recipes</p>
                <p className="nexaLight">web design</p>
                <p className="nexaLight">photography</p>
            </div>
            <div className="buttons">
                <Link to={'/recipes'}>
                    <button className="primary">recipes</button>
                </Link>
                <Link to={'/contact'}>
                    <button className="light">say hi</button>
                </Link>
            </div>
            <div className="links">
                <div className="fb-icon">
                    <a href="https://www.facebook.com/lapa.eats" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faFacebookF} />
                    </a>
                </div>
                <div className="ig-icon">
                    <a href="https://www.instagram.com/lapa.eats" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faInstagram} />
                    </a>
                </div>
                <div className="pin-icon">
                    <a href="https://www.pinterest.com/lapaeats" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faPinterestP} />
                    </a>
                </div>
            </div>
        </div>
    );
}
