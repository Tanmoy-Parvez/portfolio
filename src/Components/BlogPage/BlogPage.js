import React from 'react';
import Navbar from '../Home/Navbar/Navbar';
import './BlogPage.css';

import internet from "../../image/blogimg/inter.jpg";
import seo from "../../image/blogimg/sco.jpg";
import web from "../../image/blogimg/web.jpg";
import html from "../../image/blogimg/html.png";
import htmlcss from "../../image/blogimg/htmlcss.png";
import animation from "../../image/blogimg/an.jpg";
const BlogPage = () => {
    return (
        <div className="blogPage">
            <Navbar></Navbar>
            <h2 className="text-center text-danger mt-5 pt-5">📺 YouTube Videos</h2>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-4">
                        <div class="card" style={{ width: "18rem" }}>
                            <img class="card-img-top" src={internet} />
                            <div class="card-body">
                                <h5 class="card-title">Internet Vs web</h5>
                                <a href="https://youtu.be/iHa7xD8z6iE?list=PLuD_QmoSQDwRQDd3QtYYarquoQTyBngyY" target="_blank" class="btn btn-primary">Go somewhere 😇</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div class="card" style={{ width: "18rem" }}>
                            <img class="card-img-top" src={seo} />
                            <div class="card-body">
                                <h5 class="card-title">what is SEO</h5>
                                <a href="https://youtu.be/SA1IVQSS0WQ?list=PLuD_QmoSQDwRQDd3QtYYarquoQTyBngyY" target="_blank" class="btn btn-primary">Go somewhere 😇</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div class="card" style={{ width: "18rem" }}>
                            <img class="card-img-top" src={web} />
                            <div class="card-body">
                                <h5 class="card-title">what is web design</h5>
                                <a href="https://youtu.be/uhsPtV5S7JA?list=PLuD_QmoSQDwRQDd3QtYYarquoQTyBngyY" target="_blank" class="btn btn-primary">Go somewhere 😇</a>
                            </div>
                        </div>
                    </div>
                </div>
                <br/>

                <div className="row mt-5">
                    <div className="col-md-4">
                        <div class="card" style={{ width: "18rem" }}>
                            <img class="card-img-top" src={html} />
                            <div class="card-body">
                                <h5 class="card-title">Html</h5>
                                <a href="https://www.youtube.com/watch?v=P9V0gFSmxpg&list=PLuD_QmoSQDwRQDd3QtYYarquoQTyBngyY&index=4" target="_blank" class="btn btn-primary">Go somewhere 😇</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div class="card" style={{ width: "18rem" }}>
                            <img class="card-img-top" src={htmlcss} />
                            <div class="card-body">
                                <h5 class="card-title">Html introduction</h5>
                                <a href="https://www.youtube.com/watch?v=7i7F3OMv8xg&list=PLuD_QmoSQDwRQDd3QtYYarquoQTyBngyY&index=5" target="_blank" class="btn btn-primary">Go somewhere 😇</a>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div class="card" style={{ width: "18rem" }}>
                            <img class="card-img-top" src={animation} />
                            <div class="card-body">
                                <h5 class="card-title">Css3 animation</h5>
                                <a href="https://youtu.be/KP1Q718MXPw?list=PLuD_QmoSQDwSx6eawsKhhDvkU1ribfAHa" target="_blank" class="btn btn-primary">Go somewhere 😇</a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default BlogPage;







