import React, { Component } from 'react';
import NavSmall from '../components/navSmall';
import NavMobile from '../components/navMobile';
import FooterSmall from '../components/footerSmall';
// import FormValidator from '../../validators/FormValidator';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faPinterestP } from '@fortawesome/free-brands-svg-icons'
import '../styles/contact.scss';

export default class Contact extends Component {
    constructor(props) {
        super(props);

        // this.validator = new FormValidator([
        //     { 
        //         field: 'email', 
        //         method: 'isEmpty', 
        //         validWhen: false, 
        //         message: 'Email is required.' 
        //     },
        //     { 
        //         field: 'email',
        //         method: 'isEmail', 
        //         validWhen: true, 
        //         message: 'That is not a valid email.'
        //     },
        //     { 
        //         field: 'name', 
        //         method: 'isEmpty', 
        //         validWhen: false, 
        //         message: 'Pleave provide your name.'
        //     },
        //     { 
        //         field: 'subject', 
        //         method: 'isEmpty', 
        //         validWhen: false, 
        //         message: 'Pleave provide a subject.'
        //     },
        //     { 
        //         field: 'message', 
        //         method: 'isEmpty', 
        //         validWhen: false, 
        //         message: 'Please write a message.'
        //     }
        // ]);
        const width = typeof window !== `undefined` ? window.innerWidth : null;
        this.state = {
            width: width,
            isLoaded: false,
            // title: '',
            // contact_text: '',
            // name: '',
            // email: '',
            // subject: '',
            // message: '',
            // validation: this.validator.valid(),
            // result: '',
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

    // handleChange = (e) => {
    //     this.setState({[e.target.name]: e.target.value})
    // }

    // handleSubmit = (e) => {
    //     e.preventDefault();

    //     const validation = this.validator.validate(this.state);
    //     this.setState({ validation });

    //     if (validation.isValid) {
    //         this.setState({
    //             name: e.target.name.value,
    //             email: e.target.email.value,
    //             subject: e.target.subject.value,
    //             message: e.target.message.value
    //         });

    //         axios.get(CONSTANTS.BASE_URL + '/session/token').then(result => {
    //             if (result.status === 200) {
    //                 const csrfToken = result.data;
    //                 fetch(CONSTANTS.BASE_URL + '/webform_rest/submit?_format=json', {
    //                     method: 'POST',
    //                     headers: {
    //                         'Content-Type': 'application/json',
    //                         'X-CSRF-Token': csrfToken
    //                     },
    //                     body: JSON.stringify({
    //                         // webform_id is the id name of the webform template
    //                         'webform_id': 'contact',
    //                         'entity_type': null,
    //                         'entity_id': null,
    //                         'in_draft': false,
    //                         'uri': ['/webform/webform_id/api'],
    //                         'name': this.state.name,
    //                         'email': this.state.email,
    //                         'subject': this.state.subject,
    //                         'message': this.state.message,
    //                     }),
    //                 })
    //                     .then(response => {
    //                         this.setState({
    //                             name: "",
    //                             email: "",
    //                             subject: "",
    //                             message: "",
    //                             result: "Success! Message sent."
    //                         });
    //                         console.log('Success!', response);
    //                     })
    //                     .catch(error => {
    //                         this.setState({
    //                             result: "Oops -- an error occured"
    //                         });
    //                         console.log('An error occurred', error);
    //                     });
    //             }
    //         });
            
    //     }
    // }

    render() {
        const { width, isLoaded } = this.state;
        const isMobile = width <= 650;

        // let validation = this.state.validation;
        const contact_info = `<p>Questions, suggestions, concerns? We would love to hear from you!</p>
        <p>We love answering questions and working on a variety of projects with organizations and individuals. 
        Reach out if you want to chat about food photography (or photography in general), recipe development, sponsored posts, 
        or website development. We look forward to connecting with you soon!</p>`

        if (isLoaded) {
            if (!isMobile) {
                return (
                    <>
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
            else {
                return (
                    <>
                        <NavMobile />
                        <div className="mobile-contact">
                            <div className="contact-content">
                                <p className="header playfair">Contact Us</p>
                                <div className="content" dangerouslySetInnerHTML={{ __html: contact_info }} />
                            </div>
                            <div className="mobile-contact-form">
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
