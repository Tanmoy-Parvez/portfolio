import React from 'react';
import ContactForm from '../Home/ContactForm/ContactForm';
import Navbar from '../Home/Navbar/Navbar';

const ContactUs = () => {

    const contactus = {
        paddingTop:"100px",
    }
    return (
        <div style={{background:"#111430", height:"100vh"}}>
            <Navbar></Navbar>
            <div style={contactus}>
            <ContactForm></ContactForm>
            </div>
        </div>
    );
};

export default ContactUs;