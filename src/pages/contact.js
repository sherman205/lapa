import React from 'react';
import NavSmall from '../components/navSmall';
import FooterSmall from '../components/footerSmall';
// import FormValidator from '../../validators/FormValidator';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faPinterestP } from '@fortawesome/free-brands-svg-icons'
import '../styles/contact.scss';


const Contact = () => {
    return (
        <>
            <NavSmall />
            <div className="contact">
                <div className="contact-left">
                    <div className="contact-content">
                        <p className="title playfair">Contact Us</p>
                        <div className="content">
                        <p>Questions, suggestions, concerns? We would love to hear from you!</p>
                        <p>We love answering questions and working on a variety of projects with organizations and individuals. 
                            Reach out if you want to chat about food photography (or photography in general), recipe development, sponsored posts, 
                            or website development. We look forward to connecting with you soon!</p>
                        </div>
                        <div className="contact-social-media">
                            <div className="fb-icon">
                                <a href="https://www.facebook.com/lapa.eats" target="_blank" rel="noopener noreferrer">
                                    <FontAwesomeIcon icon={faFacebookF} />
                                    <span className="fb">lapa.eats</span>
                                </a>
                            </div>
                            <div className="ig-icon">
                                <a href="https://www.instagram.com/lapa.eats" target="_blank" rel="noopener noreferrer">
                                    <FontAwesomeIcon icon={faInstagram} />
                                    <span className="ig">lapa.eats</span>
                                </a>
                            </div>
                            <div className="pin-icon">
                                <a href="https://www.pinterest.com/lapaeats" target="_blank" rel="noopener noreferrer">
                                    <FontAwesomeIcon icon={faPinterestP} />
                                    <span className="pin">lapaeats</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="contact-right">
                    <form>
                        <p>Your Email</p>
                        <input type="text" name="email" />
                        {/* <span className="help-block">{validation.email.message}</span> */}
                        <p>Your Name</p>
                        <input type="text" name="name" />
                        {/* <span className="help-block">{validation.name.message}</span> */}
                        <p>Subject</p>
                        <input type="text" name="subject" />
                        {/* <span className="help-block">{validation.subject.message}</span> */}
                        <p>Message</p>
                        <textarea name="message" />
                        {/* <span className="help-block help-message">{validation.message.message}</span> */}
                        <button type="submit" className="primary">Submit</button>
                        {/* <span className="form-submit-success">{this.state.result}</span> */}
                    </form>
                </div>
            </div>
            <FooterSmall />
        </>
    );
}

export default Contact;
