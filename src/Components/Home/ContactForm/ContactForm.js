import React from 'react';
import './ContactForm.css';
import { useForm } from "react-hook-form";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fab, faFacebook, faGithub, faLinkedin, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { } from '@fortawesome/free-solid-svg-icons'

const ContactForm = () => {

    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => console.log(data);
    return (

        <div className="container pb-5 mt-5 ">
            <div className="row pt-5">
            <div class="col-md-6">
            <h1 className="text-white">Send Message Us</h1>
                <form onSubmit={handleSubmit(onSubmit)}>

                    <input className="form-control" placeholder="Your Name" name="Name" ref={register({ required: true })} />
                    {errors.Name && <span>Name is required</span>}
                    <br />
                    <input className="form-control" placeholder="Your Email" name="Email" ref={register({ required: true })} />
                    {errors.Email && <span>Name is required</span>}
                    <br />
                    <input className="form-control" placeholder="Your Subject" name="Subject" ref={register({ required: true })} />
                    {errors.Subject && <span>Name is required</span>}
                    <br />
                    <textarea rows='6' col='12'  className="form-control" placeholder="Your Massage" name="Massage" ref={register({ required: true })} />
                    {errors.Massage && <span>Name is required</span>}
                    <br />

                    <input className="form-control btn btn-primary" type="submit" value="Send" />
                </form>
            </div>
            <div class="col-md-6 text-white">
                <h1 className="text-white">Get in Touch</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis dolorum dolorem soluta quidem expedita aperiam aliquid at. Totam magni ipsum suscipit amet? Autem nemo esse laboriosam ratione nobis mollitia inventore?</p>

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