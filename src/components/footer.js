import React from "react";
import FooterImage from '../images/logo.png';
import "./styles/footer.scss";

const Footer = () => {
    let imageStyle = {
        width: '100%',
        maxWidth:'500px',
        backgroundImage: `url("${FooterImage}")`,
        backgroundSize: 'contain',
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat'
    };

    return (
        <div className="footer">
            <div style={{ ...imageStyle}}/>
        </div>
    );
}

export default Footer;
