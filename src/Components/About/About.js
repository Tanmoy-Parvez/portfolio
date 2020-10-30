import React from 'react';
import './About.css';
import israfil from '../../image/israfil.jpg';
import Navbar from '../Home/Navbar/Navbar';
import ContactForm from '../Home/ContactForm/ContactForm';

const About = () => {
    return (
        <div className="aboutus text-white">
            <Navbar></Navbar>
            <div class="container">
                <div class="row mt-5">
                    <div class="col-sm-12">
                        <div class="box-shadow-full">
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="row">
                                        <div class="col-sm-6 col-md-5">
                                            <div class="about-img">
                                                <img src={israfil} class="img-fluid rounded b-shadow-a" alt="" />
                                            </div>
                                        </div>
                                        <div class="col-sm-6 col-md-7">
                                            <div class="about-info">
                                                <p><span class="title-s">Name: </span> <span className="title-v">Israfil Hossen</span></p>
                                                <p><span class="title-s">Profile: </span> <span className="title-v">full stack developer</span></p>
                                                <p><span class="title-s">Email: </span> <span className="title-v">israfilhossen10750@gmail.com</span></p>
                                                <p><span class="title-s">Phone: </span> <span className="title-v">+880 01791882050</span></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="skill-mf">
                                        <p class="title-s">Skill</p>
                                        <span className='text-white'>HTML</span> <span class="pull-right text-white">95%</span>
                                        <div class="progress">
                                            <div class="progress-bar" role="progressbar" style={{ width: "95%" }} aria-valuenow="95" aria-valuemin="0"
                                                aria-valuemax="100"></div>
                                        </div>
                                        <span className='text-white'>CSS3</span> <span class="pull-right text-white">90%</span>
                                        <div class="progress">
                                            <div class="progress-bar" role="progressbar" style={{ width: "90%" }} aria-valuenow="90" aria-valuemin="0"
                                                aria-valuemax="100"></div>
                                        </div>
                                        <span className='text-white'>JAVASCRIPT</span> <span class="pull-right text-white">70%</span>
                                        <div class="progress">
                                            <div class="progress-bar" role="progressbar" style={{ width: "70%" }} aria-valuenow="70" aria-valuemin="0"
                                                aria-valuemax="100"></div>
                                        </div>

                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="about-me pt-4 pt-md-0">
                                        <div class="title-box-2">
                                            <h5 class="title-left">
                                                About me
                                             </h5>
                                        </div>
                                        <p class="lead">
                                            I've been trying to learn programming for 2 years, at this time Looking back in my past, I can't find any other chapter except coding
                                          </p>
                                        <p class="lead">
                                            I have become so involved with programming that coding has become an addiction. That's why when I finish a project at the right time, then I feel full of peace, joy, and a smile to
                                          </p>
                                        <p class="lead">
                                            Finally,Dedicated and efficient full stack developer with 8+ months of experience in application layers, presentation layers, and databases.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default About;