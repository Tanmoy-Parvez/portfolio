import React from 'react';
import './ContactForm.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { } from '@fortawesome/free-solid-svg-icons';

import emailjs from 'emailjs-com';



const ContactForm = () => {

    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('gmail', 'template_xcqmp4c', e.target, 'user_qjifYZv9EWZnfa7uCwRqQ')

            .then((result) => {
                console.log(result.text);
                alert('your message has been submitted')
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset();
    }

    return (

        <div className="container ">
            <div className="row pt-5">
                <div className="col-md-6">
                    <h1 className="text-white text-uppercase">Send Message Us</h1>

                    <form className="contact-form pb-5 mt-3" onSubmit={sendEmail}>
                        <input className="form-control" placeholder="Your Name" type="text" name="user_name" />
                        <input className="form-control my-3" placeholder="Your Email" type="email" name="user_email" />
                        <textarea rows='6' col='12' className="form-control" placeholder="Your Massage" name="message" />
                        <br />
                        <input className="form-control btn btn-primary" type="submit" value="Send" />
                    </form>

                </div>
                <div className="col-md-6 text-white">
                    <h1 className="text-white pt-5 mt-4 text-uppercase">Get in Touch</h1>
                    <p className="pt-4" style={{ textAlign: 'justify' }}>Please feel free to contact me if you need any further information. Please let me know if you have any questions. I hope the above is useful to you.</p>

                    <div className="text-white d-flex justify-content-center mt-5 icons">
                        <a href="https://www.facebook.com/TanmoyParvez23/"><FontAwesomeIcon icon={faFacebook} /></a>
                        <a href="https://www.linkedin.com/in/tanmoy-parvez/"><FontAwesomeIcon className="mx-3" icon={faLinkedinIn} /></a>
                        <a href="https://github.com/Tanmoy-Parvez"><FontAwesomeIcon icon={faGithub} /></a>


                    </div>
                </div>
                <h6 className="mx-auto mb-3 text-white">Copyright &copy; All rights reserved.</h6>
            </div>
        </div>
    );
};

export default ContactForm;