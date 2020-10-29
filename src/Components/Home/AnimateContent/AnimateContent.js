import React from 'react';
import './AnimateContent.css';
import brandLogo from "../../../image/israfil.jpg";
import Typical from 'react-typical';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fab, faFacebook, faGithub, faLinkedin, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { } from '@fortawesome/free-solid-svg-icons'


const AnimateContent = () => {
    return (
        <div className=" animateStyle">
            <div>
                <figure className="text-center mt-5">
                    <img className="img-fluid" style={{ height: "400px", width: "400px", borderRadius: "50%" }} src={brandLogo} alt="img" />
                </figure>
            </div>
            <h1 className="text-white text-center">I AM <span style={{color:"#0AB6FA"}}>ISRAFIL HOSSEN</span></h1>
            <div className="d-flex justify-content-center align-items-center">
            
                <h3 className="text-white">
                    🤍{''}
                    <Typical
                        loop={Infinity}
                        wrapper="b"
                        steps={[
                            'Web Developer',
                            1000,
                            '',
                            1000,
                            'Web Designer',
                            1000,
                            'Frontend Developer',
                            1000,
                            'Graphic Designer',
                            1000,
                        ]}

                    />
                </h3>
            </div>

            <div className="text-white d-flex justify-content-center mt-5 icons">
                <a href="https://www.facebook.com/don.israfil.9"><FontAwesomeIcon icon={faFacebook} /></a>
                <a href="www.linkedin.com/in/israfil-hossen "><FontAwesomeIcon className="mx-3" icon={faLinkedinIn} /></a>
                <a href="https://github.com/israfil-cse"><FontAwesomeIcon icon={faGithub} /></a>
                
                
            </div>
        </div>
    );
};

export default AnimateContent;


