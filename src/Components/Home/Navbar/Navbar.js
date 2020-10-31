import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {

    return (

        <div className=" navSectio">
            <nav class="navbar navbar-expand-lg navbar-dark fixed-top">
               <div  className="container">
               <a style={{color:"#111430"}} class="navbar-brand  btn btn-light text-dark" href="https://pdfhost.io/v/bkHHX6NQ2_Israfil_HossenWeb_Developerresumepdf.pdf" target="-blank">Download Resume</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav ml-auto ">
                        <li class="nav-item  ">
                            <Link to="/Home" class="nav-link" >Home <span class="sr-only">(current)</span></Link>
                        </li>
                        <li class="nav-item">
                            <Link to="/project" class="nav-link" >Project</Link>
                        </li>
                        <li class="nav-item">
                            <Link to="/blog" class="nav-link" >Blog</Link>
                        </li>
                        <li class="nav-item">
                            <Link to="/about" class="nav-link" >About</Link>
                        </li>
                     
                        <li class="nav-item">
                            <Link to="/contact" class="nav-link">Contact</Link>
                        </li>

                    </ul>
                </div>
               </div>
            </nav>
            
        </div>

    );
};

export default Navbar;
