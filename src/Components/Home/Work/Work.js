import React from 'react';
import './Work.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


// full stack
import img1 from '../../../image/alpha.png';
import img2 from '../../../image/traveller.png';
import img3 from '../../../image/doctors.png';




import { Link } from 'react-router-dom';
import { faDotCircle } from '@fortawesome/free-solid-svg-icons';

const Work = () => {
    return (
        <div className="container">
            <h1 className="text-center text-white mb-5 " > MY PROJECTS</h1>
            <div className="card-deck pb-5">
                <div className="card img-hover-zoom">
                    <img src={img1} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Alpha Sunglasses Yard</h5>
                        <Link to="/project"><button className="card-text btn btn-primary">More Details</button></Link>
                    </div>
                    <div className="card-footer d-flex justify-content-between">
                        <small className="text-danger"><a href="https://alpha-sunglasses-yard.web.app/" target="_blank"><FontAwesomeIcon className="iconStyle" icon={faDotCircle} />View Site</a></small>
                    </div>
                </div>

                <div className="card img-hover-zoom">
                    <img src={img2} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Traveller.Com</h5>
                        <Link to="/project"><button className="card-text btn btn-primary">More Details</button></Link>
                    </div>
                    <div className="card-footer d-flex justify-content-between">
                        <small className="text-danger"><a href="https://traveller-dotcom.web.app/" target="_blank"><FontAwesomeIcon className="iconStyle" icon={faDotCircle} />View Site</a></small>
                    </div>
                </div>
                <div className="card img-hover-zoom">
                    <img src={img3} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Doctors Lab Medical Center</h5>
                        <Link to="/project"><button className="card-text btn btn-primary">More Details</button></Link>
                    </div>
                    <div className="card-footer d-flex justify-content-between">
                        <small className="text-danger"><a href="https://doctors-lab-medical-center-21.web.app/" target="_blank"><FontAwesomeIcon className="iconStyle" icon={faDotCircle} />View Site</a></small>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Work;