import React from 'react';
import './Home.css';
import AnimateContent from '../AnimateContent/AnimateContent';
import Work from '../Work/Work';
import ContactForm from '../ContactForm/ContactForm';
import About from '../../About/About';


const Home = () => {
    return (
        <div className="homeSection">
            <AnimateContent></AnimateContent>
            <About></About>
            <Work></Work>
            <ContactForm></ContactForm>
        </div>
    );
};

export default Home;