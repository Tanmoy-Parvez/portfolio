import React from "react";
import './Project.css';

import creative1 from '../../image/creative/c1.png';
import creative2 from '../../image/creative/c2.png';
import creative22 from '../../image/creative/c-2.png';
import creative3 from '../../image/creative/c3.png';
import creative4 from '../../image/creative/c4.png';
import creative6 from '../../image/creative/c6.png';
import creative7 from '../../image/creative/c7.png';
import creative8 from '../../image/creative/c8.png';
import creative9 from '../../image/creative/c9.png';

import doctor1 from '../../image/doctor/d1.png';
import doctor2 from '../../image/doctor/d2.png';
import doctor3 from '../../image/doctor/d3.png';
import doctor4 from '../../image/doctor/d4.png';
import doctor5 from '../../image/doctor/d5.png';
import doctor6 from '../../image/doctor/d6.png';
import doctor7 from '../../image/doctor/d7.png';
import doctor8 from '../../image/doctor/d8.png';

import volunteer1 from '../../image/vouinter/v1.png';
import volunteer2 from '../../image/vouinter/v2.png';
import volunteer3 from '../../image/vouinter/v3.png';
import volunteer4 from '../../image/vouinter/v4.png';
import volunteer5 from '../../image/vouinter/v5.png';
import volunteer6 from '../../image/vouinter/v6.png';

// html css 
import wp1 from '../../image/html and css/p1.png';
import wp2 from '../../image/html and css/p2.png';

import wpt1 from '../../image/html and css/pt1.png';
import wpt2 from '../../image/html and css/pt2.png';
import wpt3 from '../../image/html and css/pt3.png';

//bootstrap
import pd1 from '../../image/bootsrap/pd1.png';
import pd2 from '../../image/bootsrap/pd2.png';
import pd3 from '../../image/bootsrap/pd3.png';

import hg1 from '../../image/bootsrap/hg1.png';
import hg2 from '../../image/bootsrap/hg2.png';
import hg3 from '../../image/bootsrap/hg3.png';


import es1 from '../../image/bootsrap/es1.png';
import es2 from '../../image/bootsrap/es2.png';
import es3 from '../../image/bootsrap/es3.png';






import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import Navbar from "../Home/Navbar/Navbar";

const Project = () => {

    return (
        <div  className="Projects text-white"> 
            <Navbar></Navbar>
            <h1 className="text-center mt-3" >PROJECTS</h1>
            <div className="mt-5 ml-5">
                <h3>Creative Agency </h3>
                <a className="text-white btn btn-primary" href="https://creative-agency-b0aab.web.app/" target="_blank">🔗Open project</a>
            </div>

            <div id="work" className="carousel_parent">
                <div className="container">

                    <div>
                        <h3 className="text-center py-5">Project <span style={{ color: '#7AB259' }}>overview</span></h3>
                    </div>
                    <CarouselProvider
                        naturalSlideWidth={100}
                        naturalSlideHeight={40}
                        totalSlides={9}
                    >
                        <Slider className="carouselImg">
                            <Slide index={0}><img src={creative1} alt="" /></Slide>
                            <Slide index={0}><img src={creative22} alt="" /></Slide>
                            <Slide index={1}><img src={creative2} alt="" /></Slide>
                            <Slide index={2}><img src={creative3} alt="" /></Slide>
                            <Slide index={3}><img src={creative4} alt="" /></Slide>
                            <Slide index={5}><img src={creative6} alt="" /></Slide>
                            <Slide index={6}><img src={creative7} alt="" /></Slide>
                            <Slide index={7}><img src={creative8} alt="" /></Slide>
                            <Slide index={8}><img src={creative9} alt="" /></Slide>
                           

                        </Slider>
                        <div className="d-flex justify-content-center  mt-5 pb-5">
                            <div className="carouselBtn">
                                <ButtonBack>Back</ButtonBack>
                                <ButtonNext>Next</ButtonNext>
                            </div>
                        </div>
                    </CarouselProvider>
                </div>
            </div>
            <h2 className="ml-5 mt-2">Project Documentation</h2>
            <div className="ml-5 mb-5 pb-5">
                <li className=" documnet">A single-page web app with a dashboard where people can select a service order.if you want to Check order and review, click the Service list and review. admin can add service if he wants.</li>
                <h3 className="mt-3">
                Technology used : React.js, Node.js, Express.js,firebase ,MongoDB, Bootstrap4, css ,html
                </h3>
            </div>


           
            <div className="mt-5 ml-5">
                <h3>Doctor Portal </h3>
                <a className="text-white btn btn-primary" href="https://doctors-portal-a45b5.web.app/ " target="_blank">🔗Open project</a>
            </div>

            <div id="work" className="carousel_parent">
                <div className="container">

                    <div>
                        <h3 className="text-center py-5">Project <span style={{ color: '#7AB259' }}>overview</span></h3>
                    </div>
                    <CarouselProvider
                        naturalSlideWidth={100}
                        naturalSlideHeight={40}
                        totalSlides={8}
                    >
                        <Slider className="carouselImg">
                            <Slide index={0}><img src={doctor1} alt="" /></Slide>
                            <Slide index={0}><img src={doctor2} alt="" /></Slide>
                            <Slide index={1}><img src={doctor3} alt="" /></Slide>
                            <Slide index={2}><img src={doctor4} alt="" /></Slide>
                            <Slide index={3}><img src={doctor5} alt="" /></Slide>
                            <Slide index={5}><img src={doctor6} alt="" /></Slide>
                            <Slide index={6}><img src={doctor7} alt="" /></Slide>
                            <Slide index={7}><img src={doctor8} alt="" /></Slide>
                           

                        </Slider>
                        <div className="d-flex justify-content-center  mt-5 pb-5">
                            <div className="carouselBtn">
                                <ButtonBack>Back</ButtonBack>
                                <ButtonNext>Next</ButtonNext>
                            </div>
                        </div>
                    </CarouselProvider>
                </div>
            </div>
            <h2 className="ml-5 mt-2">Project Documentation</h2>
            <div className="ml-5 pb-5">
                <li className=" documnet"> A single-page web app with a dashboard where people can click the appointment button and pick the date and time and fix an appointment. A doctor can review his appointments and prescribe medicine to a Patient from his dashboard.</li>

                <h3 className="mt-3">Technology used ​: React.js, Node.js, Express.js,firebase , MongoDB, Bootstrap4, css , html </h3>
            </div>



           
            <div className="mt-5 ml-5">
                <h3>Volunteer network​</h3>
                <a className="text-white btn btn-primary" href="https://volunteer-network-8dcbb.web.app/ " target="_blank">🔗Open project</a>
            </div>

            <div id="work" className="carousel_parent">
                <div className="container">

                    <div>
                        <h3 className="text-center py-5">Project <span style={{ color: '#7AB259' }}>overview</span></h3>
                    </div>
                    <CarouselProvider
                        naturalSlideWidth={100}
                        naturalSlideHeight={40}
                        totalSlides={6}
                    >
                        <Slider className="carouselImg">
                            <Slide index={0}><img src={volunteer1} alt="" /></Slide>
                            <Slide index={1}><img src={volunteer2} alt="" /></Slide>
                            <Slide index={2}><img src={volunteer3} alt="" /></Slide>
                            <Slide index={3}><img src={volunteer4} alt="" /></Slide>
                            <Slide index={4}><img src={volunteer5} alt="" /></Slide>
                            <Slide index={5}><img src={volunteer6} alt="" /></Slide>
                        </Slider>
                        <div className="d-flex justify-content-center  mt-5 pb-5">
                            <div className="carouselBtn">
                                <ButtonBack>Back</ButtonBack>
                                <ButtonNext>Next</ButtonNext>
                            </div>
                        </div>
                    </CarouselProvider>
                </div>
            </div>
            <h2 className="ml-5 mt-2">Project Documentation</h2>
            <div className="ml-5">
                <li className=" documnet">A single-page web app where people can select a category and if he wants to help. </li>
                <h3 className="mt-3">Technology used : React.js, Node.js, Express.js,firebase ,MongoDB, Bootstrap4, css, html</h3>
            </div>








            <div className="mt-5 ml-5">
                <h3>Web protfolio​</h3>
                <a className="text-white btn btn-primary" href="https://israfil-cse.github.io/web-portfolio/" target="_blank">🔗Open project</a>
            </div>

            <div id="work" className="carousel_parent">
                <div className="container">

                    <div>
                        <h3 className="text-center py-5">Project <span style={{ color: '#7AB259' }}>overview</span></h3>
                    </div>
                    <CarouselProvider
                        naturalSlideWidth={100}
                        naturalSlideHeight={40}
                        totalSlides={2}
                    >
                        <Slider className="carouselImg">
                            <Slide index={0}><img src={wp1} alt="" /></Slide>
                            <Slide index={1}><img src={wp2} alt="" /></Slide>


                        </Slider>
                        <div className="d-flex justify-content-center  mt-5 pb-5">
                            <div className="carouselBtn">
                                <ButtonBack>Back</ButtonBack>
                                <ButtonNext>Next</ButtonNext>
                            </div>
                        </div>
                    </CarouselProvider>
                </div>
            </div>
            <h2 className="ml-5 mt-2">Project Documentation</h2>
            <div className="ml-5">
                <li className=" documnet">This is a web page </li>
                <h3 className="mt-3">Technology used : html & css</h3>
            </div>



            <div className="mt-5 ml-5">
                <h3>Personal blog</h3>
                <a className="text-white btn btn-primary" href="https://israfil-cse.github.io/personal-website/ " target="_blank">🔗Open project</a>
            </div>

            <div id="work" className="carousel_parent">
                <div className="container">

                    <div>
                        <h3 className="text-center py-5">Project <span style={{ color: '#7AB259' }}>overview</span></h3>
                    </div>
                    <CarouselProvider
                        naturalSlideWidth={100}
                        naturalSlideHeight={40}
                        totalSlides={3}
                    >
                        <Slider className="carouselImg">
                            <Slide index={0}><img src={wpt1} alt="" /></Slide>
                            <Slide index={1}><img src={wpt2} alt="" /></Slide>
                            <Slide index={2}><img src={wpt3} alt="" /></Slide>

                        </Slider>
                        <div className="d-flex justify-content-center  mt-5 pb-5">
                            <div className="carouselBtn">
                                <ButtonBack>Back</ButtonBack>
                                <ButtonNext>Next</ButtonNext>
                            </div>
                        </div>
                    </CarouselProvider>
                </div>
            </div>
            <h2 className="ml-5 mt-2">Project Documentation</h2>
            <div className="ml-5">
                <li className=" documnet">This is a web page </li>
                <h3 className="mt-3">Technology used : html & css</h3>
            </div>


            <div className="mt-5 ml-5">
                <h3>Panda-commarce</h3>
                <a className="text-white btn btn-primary" href="https://israfil-cse.github.io/panda-commarce/ " target="_blank">🔗Open project</a>
            </div>

            <div id="work" className="carousel_parent">
                <div className="container">

                    <div>
                        <h3 className="text-center py-5">Project <span style={{ color: '#7AB259' }}>overview</span></h3>
                    </div>
                    <CarouselProvider
                        naturalSlideWidth={100}
                        naturalSlideHeight={40}
                        totalSlides={3}
                    >
                        <Slider className="carouselImg">
                            <Slide index={0}><img src={pd1} alt="" /></Slide>
                            <Slide index={1}><img src={pd2} alt="" /></Slide>
                            <Slide index={2}><img src={pd3} alt="" /></Slide>

                        </Slider>
                        <div className="d-flex justify-content-center  mt-5 pb-5">
                            <div className="carouselBtn">
                                <ButtonBack>Back</ButtonBack>
                                <ButtonNext>Next</ButtonNext>
                            </div>
                        </div>
                    </CarouselProvider>
                </div>
            </div>
            <h2 className="ml-5 mt-2">Project Documentation</h2>
            <div className="ml-5">
                <li className=" documnet">This is a E-commarce web page </li>
                <h3 className="mt-3">Technology used : Bootstrap & html,css</h3>
            </div>
            



            <div className="mt-5 ml-5">
                <h3>Hot-gadgets</h3>
                <a className="text-white btn btn-primary" href="https://israfil-cse.github.io/hot-gadgets/" target="_blank">🔗Open project</a>
            </div>

            <div id="work" className="carousel_parent">
                <div className="container">

                    <div>
                        <h3 className="text-center py-5">Project <span style={{ color: '#7AB259' }}>overview</span></h3>
                    </div>
                    <CarouselProvider
                        naturalSlideWidth={100}
                        naturalSlideHeight={40}
                        totalSlides={3}
                    >
                        <Slider className="carouselImg">
                            <Slide index={0}><img src={hg1} alt="" /></Slide>
                            <Slide index={1}><img src={hg2} alt="" /></Slide>
                            <Slide index={2}><img src={hg3} alt="" /></Slide>

                        </Slider>
                        <div className="d-flex justify-content-center  mt-5 pb-5">
                            <div className="carouselBtn">
                                <ButtonBack>Back</ButtonBack>
                                <ButtonNext>Next</ButtonNext>
                            </div>
                        </div>
                    </CarouselProvider>
                </div>
            </div>
            <h2 className="ml-5 mt-2">Project Documentation</h2>
            <div className="ml-5">
                <li className=" documnet">This is a E-commarce web page </li>
                <h3 className="mt-3">Technology used : Bootstrap & html,css</h3>
            </div>


            <div className="mt-5 ml-5">
                <h3>E-school</h3>
                <a className="text-white btn btn-primary" href="https://israfil-cse.github.io/E-school/" target="_blank">🔗Open project</a>
            </div>

            <div id="work" className="carousel_parent">
                <div className="container">

                    <div>
                        <h3 className="text-center py-5">Project <span style={{ color: '#7AB259' }}>overview</span></h3>
                    </div>
                    <CarouselProvider
                        naturalSlideWidth={100}
                        naturalSlideHeight={40}
                        totalSlides={3}
                    >
                        <Slider className="carouselImg">
                            <Slide index={0}><img src={es1} alt="" /></Slide>
                            <Slide index={1}><img src={es2} alt="" /></Slide>
                            <Slide index={2}><img src={es3} alt="" /></Slide>
                        </Slider>
                        <div className="d-flex justify-content-center  mt-5 pb-5">
                            <div className="carouselBtn">
                                <ButtonBack>Back</ButtonBack>
                                <ButtonNext>Next</ButtonNext>
                            </div>
                        </div>
                    </CarouselProvider>
                </div>
            </div>
            <h2 className="ml-5 mt-2">Project Documentation</h2>
            <div className="ml-5">
                <li className=" documnet">This is a E-commarce web page </li>
                <h3 className="mt-3">Technology used : Bootstrap & html,css</h3>
            </div>




        </div>

    );
};
export default Project;