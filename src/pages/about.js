import React from 'react';
import NavSmall from '../components/navSmall';
import FooterSmall from '../components/footerSmall';
import '../styles/about.scss';

const About = () => {
    return (
        <div className="about">
            <div className="about-left">
                <NavSmall />
                <div className="about-content">
                    <p className="title playfair"></p>
                    
                    <h3>What Is Lapa</h3>
                    
                    <h3>Who We Are</h3>
                    
                    <h3>The Site And Beyond</h3>
                    
                </div>
                <FooterSmall />
            </div>
            <div className="about-right">
            </div>
        </div>
    );
}

export default About;