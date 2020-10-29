import React from 'react';
import img1 from '../../../image/creative/c1.png';
import img2 from '../../../image/doctor/d1.png';
import img3 from '../../../image/vouinter/v1.png';
const Blog = () => {
    return (
        <div className="container">
            <h1 className="text-center text-white pt-5" > OUR BLOG</h1>
            <div class="card-deck mt-5 pb-5">
                <div class="card">
                    <img src={img1} class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">Creative agency</h5>
                        <button class="card-text btn btn-primary">see more</button>
                    </div>
                    <div class="card-footer">
                        <small class="text-muted">Last updated 2 minutes ago</small>
                    </div>
                </div>

                <div class="card">
                    <img src={img2} class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">Doctor portals</h5>
                         <button class="card-text btn btn-primary">see more</button>
                    </div>
                    <div class="card-footer">
                        <small class="text-muted">Last updated 3 mins ago</small>
                    </div>
                </div>
                <div class="card">
                    <img src={img3} class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">voilenteer network</h5>
                        <button class="card-text btn btn-primary">see more</button>
                    </div>
                    <div class="card-footer">
                        <small class="text-muted">Last updated 3 mins ago</small>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;