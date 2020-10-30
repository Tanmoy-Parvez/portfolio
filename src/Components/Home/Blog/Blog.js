import React from 'react';
import jlogo from '../../../image/jslogo.png';
import rlogo from '../../../image/reactlogo.png';
import nlogo from '../../../image/node.png';
import { Link } from 'react-router-dom';
const Blog = () => {
    return (
        <div className="container">
            <h1 className="text-center text-white pt-5" > OUR BLOG</h1>
            <div class="card-deck mt-5 pb-5">
                <div class="card">
                    <img src={jlogo} class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">JavaScript blog</h5>
                        <Link to="/blog"><button class="card-text btn btn-primary">see more</button></Link>
                    </div>
                    <div class="card-footer">
                        <small class="text-muted">comming soon</small>
                    </div>
                </div>

                <div class="card">
                    <img src={rlogo} class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">React js blog</h5>
                        <Link to="/blog"><button class="card-text btn btn-primary">see more</button></Link>
                    </div>
                    <div class="card-footer">
                        <small class="text-muted">comming soon..</small>
                    </div>
                </div>
                <div class="card">
                    <img src={nlogo} class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">Node js blog</h5>
                        <Link to="/blog"><button class="card-text btn btn-primary">see more</button></Link>
                    </div>
                    <div class="card-footer">
                        <small class="text-muted">comming soon..</small>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;