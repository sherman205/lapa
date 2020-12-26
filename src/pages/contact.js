import React, { Component } from 'react';
import axios from 'axios';
import SEO from '../components/seo';
import NavSmall from '../components/navSmall';
import NavMobile from '../components/navMobile';
import FooterSmall from '../components/footerSmall';
import FormValidator from '../validators/formValidator';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faPinterestP } from '@fortawesome/free-brands-svg-icons'
import '../styles/contact.scss';


export default class Contact extends Component {
    constructor(props) {
        super(props);

        this.validator = new FormValidator([
            { 
                field: 'email', 
                method: 'isEmpty', 
                validWhen: false, 
                message: 'Email is required.' 
            },
            { 
                field: 'email',
                method: 'isEmail', 
                validWhen: true, 
                message: 'That is not a valid email.'
            },
            { 
                field: 'name', 
                method: 'isEmpty', 
                validWhen: false, 
                message: 'Pleave provide your name.'
            },
            { 
                field: 'subject', 
                method: 'isEmpty', 
                validWhen: false, 
                message: 'Pleave provide a subject.'
            },
            { 
                field: 'message', 
                method: 'isEmpty', 
                validWhen: false, 
                message: 'Please write a message.'
            }
        ]);

        const width = typeof window !== `undefined` ? window.innerWidth : null;
        this.state = {
            width: width,
            isLoaded: false,
            validation: this.validator.valid(),
            result: '',
            name: '',
            email: '',
            subject: '',
            message: ''
        };
    };

    componentDidMount = () => {
        this.setState({ isLoaded: true });
    }

    componentWillMount = () => {
        if (typeof window !== `undefined`) {
          window.addEventListener('resize', this.handleWindowSizeChange);
        }
    }

    componentWillUnmount = () => {
        if (typeof window !== `undefined`) {
          window.removeEventListener('resize', this.handleWindowSizeChange);
        }
    }

    handleWindowSizeChange = () => {
          const width = typeof window !== `undefined` ? window.innerWidth : null;
          this.setState({ width: width });
    }

    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    handleSubmit = (e) => {
        const validation = this.validator.validate(this.state);
        this.setState({ validation });

        const payload = {
            name: this.state.name,
            email: this.state.email,
            subject: this.state.subject,
            message: this.state.message
        };

        e.preventDefault();
        if (validation.isValid) {
            axios({
                method: 'POST',
                url: 'https://formspree.io/mvooggnn',
                data: { ...payload}
            })
            .then(response => {
                this.setState({
                    name: "",
                    email: "",
                    subject: "",
                    message: "",
                    result: "Success! Message sent."
                });
                console.log('Success!', response);
            })
            .catch(error => {
                this.setState({
                    result: "Oops -- an error occured"
                });
                console.log('An error occurred', error);
            });
        }
    }

    render() {
        const { width, isLoaded, validation, name, email, subject, message } = this.state;
        const isMobile = width <= 650;
        const contact_info = `<p>Questions, suggestions, concerns? We would love to hear from you!</p>
        <p>We love answering questions and working on a variety of projects with organizations and individuals. 
        Reach out if you want to chat about food photography (or photography in general), recipe development, sponsored posts, 
        or website development. We look forward to connecting with you soon!</p>`

        if (isLoaded) {
            if (!isMobile) {
                return (
                    <>
                        <SEO title="Contact" pathname={this.props.location.pathname}/>
                        <NavSmall />
                        <div className="contact">
                            <div className="contact-left">
                                <div className="contact-content">
                                    <p className="title playfair">Contact Us</p>
                                    <div className="content" dangerouslySetInnerHTML={{ __html: contact_info }} />
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
                                <form name="contact" onSubmit={this.handleSubmit}>
                                    <input type="hidden" name="form-name" value="contact" />
                                    <p>Your Email</p>
                                    <input type="_replyto" value={email} name="email" onChange={this.handleChange}/>
                                    <span className="help-block">{validation.email.message}</span>
                                    <p>Your Name</p>
                                    <input type="text" value={name} name="name" onChange={this.handleChange}/>
                                    <span className="help-block">{validation.name.message}</span>
                                    <p>Subject</p>
                                    <input type="text" value={subject} name="subject" onChange={this.handleChange}/>
                                    <span className="help-block">{validation.subject.message}</span>
                                    <p>Message</p>
                                    <textarea value={message} name="message" onChange={this.handleChange}/>
                                    <span className="help-block help-message">{validation.message.message}</span>
                                    <button type="submit" className="primary">Submit</button>
                                    <span className="form-submit-success">{this.state.result}</span>
                                </form>
                            </div>
                        </div>
                        <FooterSmall />
                    </>
                );
            }
            else {
                return (
                    <>
                        <SEO title="Contact" pathname={this.props.location.pathname}/>
                        <NavMobile />
                        <div className="mobile-contact">
                            <div className="contact-content">
                                <p className="header playfair">Contact Us</p>
                                <div className="content" dangerouslySetInnerHTML={{ __html: contact_info }} />
                            </div>
                            <div className="mobile-contact-form">
                                <form name="contact" onSubmit={this.handleSubmit}>
                                    <input type="hidden" name="form-name" value="contact" />
                                    <p>Your Email</p>
                                    <input type="_replyto" value={email} name="email" onChange={this.handleChange}/>
                                    <span className="help-block">{validation.email.message}</span>
                                    <p>Your Name</p>
                                    <input type="text" value={name} name="name" onChange={this.handleChange}/>
                                    <span className="help-block">{validation.name.message}</span>
                                    <p>Subject</p>
                                    <input type="text" value={subject} name="subject" onChange={this.handleChange}/>
                                    <span className="help-block">{validation.subject.message}</span>
                                    <p>Message</p>
                                    <textarea value={message} name="message" onChange={this.handleChange}/>
                                    <span className="help-block help-message">{validation.message.message}</span>
                                    <button type="submit" className="primary">Submit</button>
                                    <span className="form-submit-success">{this.state.result}</span>
                                </form>
                            </div>
                            <FooterSmall />
                        </div>
                    </>
                );
            }
        }
        else {
            return(
              <p>Loading...</p>
            );
        }
    }
}
