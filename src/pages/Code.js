import React from 'react';
import MainNavBar from '../components/MainNavBar';
import Footer from '../components/Footer';
import MongoDB from '../assets/images/MongoDB.png';
import Express from '../assets/images/Express.png';
import Node from '../assets/images/Node.png';
import ReactImg from '../assets/images/React.png';
import HTML from '../assets/images/HTML.png';
import CSS from '../assets/images/CSS.png';
import Bootstrap from '../assets/images/Bootstrap.png';
import JS from '../assets/images/JS.png';
import Postman from '../assets/images/Postman.png';
import REST from '../assets/images/REST.png';
import NPM from '../assets/images/NPM.png';





export default function Code() {
    return (
        <div class="">
           <MainNavBar />

           <div class="code-page-header">
                <div class="code-page-title">code repos</div>
                <div class="code-page-description">This is a small section of my projects and open-source repos that is more to come available in GitHub.</div>
           </div>
            
            <div class="code-repo-container">

                <div class="project-repo">
                    <a href='https://github.com/campuedfranz' target='_blank' class="link-project-repo">
                        <div class="repo-title">My Portfolio Website</div>
                        <div class="repo-tools">
                            <img class="repo-tools-image" src={HTML}></img>
                            <img class="repo-tools-image" src={CSS}></img>
                            <img class="repo-tools-image" src={ReactImg}></img>
                        </div>
                    </a>
                </div>

                <div class="project-repo">
                    <a href='https://github.com/campuedfranz' target='_blank' class="link-project-repo">
                        <div class="repo-title">E-commerce-API</div>
                        <div class="repo-tools">
                            <img class="repo-tools-image" src={REST}></img>
                            <img class="repo-tools-image" src={Node}></img>
                            <img class="repo-tools-image" src={Express}></img>
                            <img class="repo-tools-image" src={JS}></img>
                            <img class="repo-tools-image" src={MongoDB}></img>
                            <img class="repo-tools-image" src={Postman}></img>
                            <img class="repo-tools-image" src={NPM}></img>
                        </div>
                    </a>
                </div>

                <div class="project-repo">
                    <a href='https://github.com/campuedfranz' target='_blank' class="link-project-repo">
                        <div class="repo-title">React Ecommerce App</div>
                        <div class="repo-tools">
                            <img class="repo-tools-image" src={ReactImg}></img>
                            <img class="repo-tools-image" src={NPM}></img>
                            <img class="repo-tools-image" src={JS}></img>
                            <img class="repo-tools-image" src={Bootstrap}></img>
                        </div>
                    </a>
                </div>
                
            </div>
           
           <Footer />
            
        </div>
    )
}