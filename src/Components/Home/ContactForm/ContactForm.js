import React from 'react';
import './ContactForm.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faGithub, faLinkedin, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { } from '@fortawesome/free-solid-svg-icons';

import emailjs from 'emailjs-com';



const ContactForm = () => {

    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('gmail', 'template_xcqmp4c', e.target, 'user_qjifYZv9EWZnfa7uCwRqQ')

            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    }

    return (

        <div className="container ">
            <div className="row pt-5">
                <div class="col-md-6">
                    <h1 className="text-white">Send Message Us</h1>

                    <form className="contact-form pb-5" onSubmit={sendEmail}>
                        
                        <label>Name</label>
                        <input className="form-control" placeholder="Your Name"  type="text" name="user_name" />
                        <label>Email</label>
                        <input className="form-control" placeholder="Your Email"  type="email" name="user_email" />
                        <label>Message</label>
                        <textarea rows='6' col='12' className="form-control" placeholder="Your Massage"  name="message" />
                        <br/>
                        <input className="form-control btn btn-primary" type="submit" value="Send" />
                    </form>
                   
                </div>
                <div class="col-md-6 text-white">
                    <h1 className="text-white pt-5 mt-4">Get in Touch</h1>
                    <p className="pt-4">Please feel free to contact me if you need any further information. Please let me know if you have any questions. I hope the above is useful to you.</p>

                    <div className="text-white d-flex justify-content-center mt-5 icons">
                        <a href="https://www.facebook.com/don.israfil.9"><FontAwesomeIcon icon={faFacebook} /></a>
                        <a href="www.linkedin.com/in/israfil-hossen "><FontAwesomeIcon className="mx-3" icon={faLinkedinIn} /></a>
                        <a href="https://github.com/israfil-cse"><FontAwesomeIcon icon={faGithub} /></a>


                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactForm;