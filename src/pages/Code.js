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
import JQuery from '../assets/images/JQuery.png';
import PHP from '../assets/images/PHP.png';
import Python from '../assets/images/Python.png';
import Java from '../assets/images/Java.png';







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
                    <a href='https://github.com/campuedfranz/campued-portfolio' target='_blank' class="link-project-repo">
                        <div class="repo-title">My Portfolio Website</div>
                        <div class="repo-tools">
                            <img class="repo-tools-image" src={HTML}></img>
                            <img class="repo-tools-image" src={CSS}></img>
                            <img class="repo-tools-image" src={ReactImg}></img>
                        </div>
                    </a>
                </div>

                <div class="project-repo">
                    <a href='https://github.com/campuedfranz/e-commerce-api' target='_blank' class="link-project-repo">
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
                    <a href='https://github.com/campuedfranz/e-commerce-react-app' target='_blank' class="link-project-repo">
                        <div class="repo-title">React Ecommerce App</div>
                        <div class="repo-tools">
                            <img class="repo-tools-image" src={ReactImg}></img>
                            <img class="repo-tools-image" src={NPM}></img>
                            <img class="repo-tools-image" src={JS}></img>
                            <img class="repo-tools-image" src={Bootstrap}></img>
                        </div>
                    </a>
                </div>

                <div class="project-repo">
                    <a href='https://github.com/campuedfranz/color-pattern-game' target='_blank' class="link-project-repo">
                        <div class="repo-title">Color Pattern Game</div>
                        <div class="repo-tools">
                            <img class="repo-tools-image" src={HTML}></img>
                            <img class="repo-tools-image" src={CSS}></img>
                            <img class="repo-tools-image" src={JS}></img>
                            <img class="repo-tools-image" src={JQuery}></img>

                        </div>
                    </a>
                </div>

                <div class="project-repo">
                    <a href='https://github.com/campuedfranz/mini-projects' target='_blank' class="link-project-repo">
                        <div class="repo-title">Mini Projects</div>
                        <div class="repo-tools">
                            <img class="repo-tools-image" src={HTML}></img>
                            <img class="repo-tools-image" src={CSS}></img>
                            <img class="repo-tools-image" src={JS}></img>
                            <img class="repo-tools-image" src={PHP}></img>
                            <img class="repo-tools-image" src={Python}></img>
                            <img class="repo-tools-image" src={Java}></img>
                        </div>
                    </a>
                </div>

            </div>
           
           <Footer />
            
        </div>
    )
}