import React from 'react';
import './Work.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fab, faFacebook, faGithub, faLinkedin, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'

// full stack
import img1 from '../../../image/creative/c1.png';
import img2 from '../../../image/doctor/d1.png';
import img3 from '../../../image/vouinter/v1.png';

// html and css
import h1 from "../../../image/html and css/protfolio-html-css.png";
import h2 from "../../../image/html and css/portfolio-2.png";

// bootstrap
import b1 from '../../../image/bootsrap/panda.png';
import b2 from '../../../image/bootsrap/E-school.png';
import b3 from '../../../image/bootsrap/hot-gadest.png';

// pure javascript
import ps1 from '../../../image/pure js/pin matcher.png';
import ps2 from '../../../image/pure js/shopping cart.png';
import ps3 from '../../../image/pure js/bank.png';

// rest api 
import rp1 from '../../../image/rest api js/rock song.png';
import rp2 from '../../../image/rest api js/temparetor.png';

// react and api 
import ra1 from '../../../image/react router/ecomarce school.png';
import ra2 from '../../../image/react router/router-mata.png';
import ra3 from '../../../image/react router/Screenshot 2020-10-31 162611.png';

//react final
import rf1 from '../../../image/full stack/travel.png';
import rf2 from '../../../image/full stack/emaJonh.png';
 
// icon 
import gifIcon from '../../../image/play.png';


import { Link } from 'react-router-dom';
import { faDotCircle } from '@fortawesome/free-solid-svg-icons';

const Work = () => {
    return (
        <div className="container">
            <h1 className="text-center text-white " > OUR PROJECTS</h1>
            <h5 className="text-white mt-5 pt-5 pb-5">Full Stack Project</h5>
            <div class="card-deck pb-5">
                <div class="card img-hover-zoom">
                    <img src={img1} class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">Creative agency</h5>
                        <Link to="/project"><button class="card-text btn btn-primary">see more</button></Link>
                    </div>
                    <div class="card-footer d-flex justify-content-between">
                         <small class="text-muted">Last updated 2 minutes ago</small>
                         <small className="text-danger"><a href="https://creative-agency-b0aab.web.app/" target="_blank"><FontAwesomeIcon className="iconStyle" icon={faDotCircle}/>live</a></small>
                    </div>
                </div>

                <div class="card img-hover-zoom">
                    <img src={img2} class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">Doctor portals</h5>
                        <Link to="/project"><button class="card-text btn btn-primary">see more</button></Link>
                    </div>
                    <div class="card-footer d-flex justify-content-between">
                         <small class="text-muted">Last updated 2 minutes ago</small>
                        <small className="text-danger"><a href="https://doctors-portal-a45b5.web.app/" target="_blank"><FontAwesomeIcon className="iconStyle" icon={faDotCircle}/>live</a></small>
                    </div>
                </div>
                <div class="card img-hover-zoom">
                    <img src={img3} class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">voilenteer network</h5>
                        <Link to="/project"><button class="card-text btn btn-primary">see more</button></Link>
                    </div>
                    <div class="card-footer d-flex justify-content-between">
                         <small class="text-muted">Last updated 2 minutes ago</small>
                        <small className="text-danger"><a href="https://volunteer-network-8dcbb.web.app/" target="_blank"><FontAwesomeIcon className="iconStyle" icon={faDotCircle}/>live</a></small>
                    </div>
                </div>
            </div>





            <h5 className="text-white mt-5 pt-5 pb-5">Html & CSS Project</h5>
            <div class="card-deck pb-5">
                <div class="card img-hover-zoom">
                    <img src={h1} class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">web-protfolio</h5>
                        <Link to="/project"><button class="card-text btn btn-primary">see more</button></Link>
                    </div>
                    <div class="card-footer d-flex justify-content-between">
                         <small class="text-muted">Last updated 2 minutes ago</small>
                        <small className="text-danger"><a href="https://israfil-cse.github.io/web-portfolio/" target="_blank"><FontAwesomeIcon className="iconStyle" icon={faDotCircle}/>live</a></small>
                    </div>
                </div>

                <div class="card img-hover-zoom">
                    <img src={h2} class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">personal-blog</h5>
                        <Link to="/project"><button class="card-text btn btn-primary">see more</button></Link>
                    </div>
                    <div class="card-footer d-flex justify-content-between">
                         <small class="text-muted">Last updated 2 minutes ago</small>
                        <small className="text-danger"><a href="https://israfil-cse.github.io/personal-website/" target="_blank"><FontAwesomeIcon className="iconStyle" icon={faDotCircle}/>live</a></small>
                    </div>
                </div>
                <div class="card img-hover-zoom">
                    <img src={h1} class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">protfolio</h5>
                        <Link to="/project"><button class="card-text btn btn-primary">see more</button></Link>
                    </div>
                    <div class="card-footer d-flex justify-content-between">
                         <small class="text-muted">Last updated 2 minutes ago</small>
                        <small className="text-danger"><a href="https://israfil-cse.github.io/web-portfolio/" target="_blank"><FontAwesomeIcon className="iconStyle" icon={faDotCircle}/>live</a></small>
                    </div>
                </div>
            </div>




            <h5 className="text-white mt-5 pt-5 pb-5">Bootstrap Project</h5>
            <div class="card-deck pb-5">
                <div class="card img-hover-zoom">
                    <img src={b1} class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">Panda-commarce</h5>
                        <Link to="/project"><button class="card-text btn btn-primary">see more</button></Link>
                    </div>
                    <div class="card-footer d-flex justify-content-between">
                         <small class="text-muted">Last updated 2 minutes ago</small>
                        <small className="text-danger"><a href="https://israfil-cse.github.io/panda-commarce/" target="_blank"><FontAwesomeIcon className="iconStyle" icon={faDotCircle}/>live</a></small>
                    </div>
                </div>

                <div class="card img-hover-zoom">
                    <img src={b2} class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">E-school</h5>
                        <Link to="/project"><button class="card-text btn btn-primary">see more</button></Link>
                    </div>
                    <div class="card-footer d-flex justify-content-between">
                         <small class="text-muted">Last updated 2 minutes ago</small>
                        <small className="text-danger"><a href="https://israfil-cse.github.io/E-school/" target="_blank"><FontAwesomeIcon className="iconStyle" icon={faDotCircle}/>live</a></small>
                    </div>
                </div>
                <div class="card img-hover-zoom">
                    <img src={b3} class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">Hot-gadgest</h5>
                        <Link to="/project"><button class="card-text btn btn-primary">see more</button></Link>
                    </div>
                    <div class="card-footer d-flex justify-content-between">
                         <small class="text-muted">Last updated 2 minutes ago</small>
                        <small className="text-danger"><a href="https://israfil-cse.github.io/hot-gadgets/" target="_blank"><FontAwesomeIcon className="iconStyle" icon={faDotCircle}/>live</a></small>
                    </div>
                </div>
            </div>




            <h5 className="text-white mt-5 pt-5 pb-5">Pure js Project</h5>
            <div class="card-deck pb-5">
                <div class="card img-hover-zoom">
                    <img src={ps1} class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">Pin-matcher</h5>
                        <Link to="/project"><button class="card-text btn btn-primary">see more</button></Link>
                    </div>
                    <div class="card-footer d-flex justify-content-between">
                         <small class="text-muted">Last updated 2 minutes ago</small>
                        <small className="text-danger"><a href="https://israfil-cse.github.io/pin-matcher-master/" target="_blank"><FontAwesomeIcon className="iconStyle" icon={faDotCircle}/>live</a></small>
                    </div>
                </div>

                <div class="card img-hover-zoom">
                    <img src={ps2} class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">Shopping-cart</h5>
                        <Link to="/project"><button class="card-text btn btn-primary">see more</button></Link>
                    </div>
                    <div class="card-footer d-flex justify-content-between">
                         <small class="text-muted">Last updated 2 minutes ago</small>
                        <small className="text-danger"><a href="https://israfil-cse.github.io/shopping-cart/" target="_blank"><FontAwesomeIcon className="iconStyle" icon={faDotCircle}/>live</a></small>
                    </div>
                </div>
                <div class="card img-hover-zoom">
                    <img src={ps3} class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">Bank-system</h5>
                        <Link to="/project"><button class="card-text btn btn-primary">see more</button></Link>
                    </div>
                    <div class="card-footer d-flex justify-content-between">
                         <small class="text-muted">Last updated 2 minutes ago</small>
                        <small className="text-danger"><a href="https://israfil-cse.github.io/computer-tech-doctor-blank/" target="_blank"><FontAwesomeIcon className="iconStyle" icon={faDotCircle}/>live</a></small>
                    </div>
                </div>
            </div>



            <h5 className="text-white mt-5 pt-5 pb-5">REST API js Project</h5>
            <div class="card-deck pb-5">
                <div class="card img-hover-zoom">
                    <img src={rp1} class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">Rock-song-lyrice</h5>
                        <Link to="/project"><button class="card-text btn btn-primary">see more</button></Link>
                    </div>
                    <div class="card-footer d-flex justify-content-between">
                         <small class="text-muted">Last updated 2 minutes ago</small>
                        <small className="text-danger"><a href="https://israfil-cse.github.io/hard-rock-master/" target="_blank"><FontAwesomeIcon className="iconStyle" icon={faDotCircle}/>live</a></small>
                    </div>
                </div>

                <div class="card img-hover-zoom">
                    <img src={rp2} class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">Tempareture-find</h5>
                        <Link to="/project"><button class="card-text btn btn-primary">see more</button></Link>
                    </div>
                    <div class="card-footer d-flex justify-content-between">
                         <small class="text-muted">Last updated 2 minutes ago</small>
                        <small className="text-danger"><a href="https://israfil-cse.github.io/temperature-hot-master/" target="_blank"><FontAwesomeIcon className="iconStyle" icon={faDotCircle}/>live</a></small>
                    </div>
                </div>
                <div class="card img-hover-zoom">
                    <img src={rp1} class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">Song</h5>
                        <Link to="/project"><button class="card-text btn btn-primary">see more</button></Link>
                    </div>
                    <div class="card-footer d-flex justify-content-between">
                         <small class="text-muted">Last updated 2 minutes ago</small>
                        <small className="text-danger"><a href="https://israfil-cse.github.io/hard-rock-master/" target="_blank"><FontAwesomeIcon className="iconStyle" icon={faDotCircle}/>live</a></small>
                    </div>
                </div>
            </div>



            <h5 className="text-white mt-5 pt-5 pb-5">React simple Project</h5>
            <div class="card-deck pb-5">
                <div class="card img-hover-zoom">
                    <img src={ra1} class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">Online school</h5>
                        <Link to="/project"><button class="card-text btn btn-primary">see more</button></Link>
                    </div>
                    <div class="card-footer d-flex justify-content-between">
                         <small class="text-muted">Last updated 2 minutes ago</small>
                        <small className="text-danger"><a href="https://cocky-joliot-62d1d3.netlify.app/" target="_blank"><FontAwesomeIcon className="iconStyle" icon={faDotCircle}/>live</a></small>
                    </div>
                </div>

                <div class="card img-hover-zoom">
                    <img src={ra2} class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">User find</h5>
                        <Link to="/project"><button class="card-text btn btn-primary">see more</button></Link>
                    </div>
                    <div class="card-footer d-flex justify-content-between">
                         <small class="text-muted">Last updated 2 minutes ago</small>
                        <small className="text-danger"><a href="https://romantic-lumiere-8edc1e.netlify.app/" target="_blank"><FontAwesomeIcon className="iconStyle" icon={faDotCircle}/>live</a></small>
                    </div>
                </div>
                <div class="card img-hover-zoom">
                    <img src={ra3} class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">online school</h5>
                        <Link to="/project"><button class="card-text btn btn-primary">see more</button></Link>
                    </div>
                    <div class="card-footer d-flex justify-content-between">
                         <small class="text-muted">Last updated 2 minutes ago</small>
                        <small className="text-danger"><a href="https://cocky-joliot-62d1d3.netlify.app/" target="_blank"><FontAwesomeIcon className="iconStyle" icon={faDotCircle}/>live</a></small>
                    </div>
                </div>
            </div>




            <h5 className="text-white mt-5 pt-5 pb-5">React Final Project</h5>
            <div class="card-deck pb-5">
                <div class="card img-hover-zoom">
                    <img src={rf2} class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">Ema-jonh</h5>
                        <Link to="/project"><button class="card-text btn btn-primary">see more</button></Link>
                    </div>
                    <div class="card-footer d-flex justify-content-between">
                         <small class="text-muted">Last updated 2 minutes ago</small>
                        <small className="text-danger"><a href="https://ema-john-simple-9e756.web.app/" target="_blank"><FontAwesomeIcon className="iconStyle" icon={faDotCircle}/>live</a></small>
                    </div>
                </div>

                <div class="card img-hover-zoom">
                    <img src={rf1} class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">Travel-ticket-book</h5>
                        <Link to="/project"><button class="card-text btn btn-primary">see more</button></Link>
                    </div>
                    <div class="card-footer d-flex justify-content-between">
                         <small class="text-muted">Last updated 2 minutes ago</small>
                        <small className="text-danger"><a href="https://romantic-hawking-160acc.netlify.app/" target="_blank"><FontAwesomeIcon className="iconStyle" icon={faDotCircle}/>live</a></small>
                    </div>
                </div>
                <div class="card img-hover-zoom">
                    <img src={rf1} class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">travel-guru</h5>
                        <Link to="/project"><button class="card-text btn btn-primary">see more</button></Link>
                    </div>
                    <div class="card-footer d-flex justify-content-between">
                         <small class="text-muted">Last updated 2 minutes ago</small>
                        <small className="text-danger"><a href="https://romantic-hawking-160acc.netlify.app/" target="_blank"><FontAwesomeIcon className="iconStyle" icon={faDotCircle}/>live</a></small>
                    </div>
                </div>
            </div>


            
        </div>
    );
};

export default Work;