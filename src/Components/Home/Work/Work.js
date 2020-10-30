import React from 'react';
import './Work.css';
import img1 from '../../../image/creative/c1.png';
import img2 from '../../../image/doctor/d1.png';
import img3 from '../../../image/vouinter/v1.png';


import { Link } from 'react-router-dom';

const Work = () => {
    return (
        <div className="container">
            <h1 className="text-center text-white " > OUR PROJECTS</h1>
            <div class="card-deck mt-5 pb-5">
                <div class="card img-hover-zoom">
                    <img src={img1} class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">Creative agency</h5>
                        <Link to="/project"><button class="card-text btn btn-primary">see more</button></Link>
                    </div>
                    <div class="card-footer">
                        <small class="text-muted">Last updated 2 minutes ago</small>
                    </div>
                </div>

                <div class="card img-hover-zoom">
                    <img src={img2} class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">Doctor portals</h5>
                        <Link to="/project"><button class="card-text btn btn-primary">see more</button></Link>
                    </div>
                    <div class="card-footer">
                        <small class="text-muted">Last updated 3 mins ago</small>
                    </div>
                </div>
                <div class="card img-hover-zoom">
                    <img src={img3} class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">voilenteer network</h5>
                        <Link to="/project"><button class="card-text btn btn-primary">see more</button></Link>
                    </div>
                    <div class="card-footer">
                        <small class="text-muted">Last updated 3 mins ago</small>
                    </div>
                </div>
            </div>

            
        </div>
    );
};

export default Work;