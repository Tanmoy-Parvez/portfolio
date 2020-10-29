import React from 'react';
import './Home.css';
import Navbar from '../Navbar/Navbar';
import AnimateContent from '../AnimateContent/AnimateContent';
import Work from '../Work/Work';
import Blog from '../Blog/Blog';
import ContactForm from '../ContactForm/ContactForm';

const Home = () => {
    return (
        <div className="homeSection">
            <Navbar></Navbar>
            <AnimateContent></AnimateContent>
            <Work></Work>
            <Blog></Blog>
            <ContactForm></ContactForm>
        </div>
    );
};

export default Home;