import React from 'react';
import './AnimateContent.css';
import brandLogo from "../../../image/tanmoy_parvez2.png";
import Typical from 'react-typical';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { } from '@fortawesome/free-solid-svg-icons'


const AnimateContent = () => {
    return (
        <div className=" animateStyle">
            <div>
                <figure className="text-center mt-5">
                    <img className="img-fluid" style={{ height: "300px", width: "300px", borderRadius: "50%" }} src={brandLogo} alt="img" />
                </figure>
            </div>
            <h1 className="text-white text-center textH1">I AM <span style={{ color: "#276cec" }}>TANMOY PARVEZ</span></h1>
            <div className="d-flex justify-content-center align-items-center">

                <h3 className="text-white">
                    💙{''}
                    <Typical
                        loop={Infinity}
                        wrapper="b"
                        steps={[
                            'Mern Stack Developer',
                            1000,
                            'Frontend Developer',
                            1000,
                            'JavaScript Developer',
                            1000,
                        ]}

                    />
                </h3>
            </div>

            <div className="text-white d-flex justify-content-center mt-5 icons">
                <a href="https://www.facebook.com/TanmoyParvez23/" target="-blank"><FontAwesomeIcon icon={faFacebook} /></a>
                <a href="https://www.linkedin.com/in/tanmoy-parvez/" target="-blank"><FontAwesomeIcon className="mx-5" icon={faLinkedinIn} /></a>
                <a href="https://github.com/Tanmoy-Parvez" target="-blank"><FontAwesomeIcon icon={faGithub} /></a>


            </div>
        </div>
    );
};

export default AnimateContent;


