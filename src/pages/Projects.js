import React from 'react';
import MainNavBar from '../components/MainNavBar';
import Footer from '../components/Footer';





export default function Projects() {
    return (
        <div class="">
           <MainNavBar />
           <div class="project-container">
                <div class="project-display-container">
                    <div class="card">
                        <div class="bg capstone1"></div>
                        <div class="blob"></div>
                        
                    </div>
                </div>
                <div class="project-description-container">
                    Responsive website portfolio across mobile, tablet, and desktop platforms for optimal user experience. 
                    <br></br>
                    <br></br>
                    Technology: #React.js #HTML #CSS #Javascript
                </div>
            </div>
            <div class="project-container">
                <div class="project-display-container">
                    <div class="card">
                        <div class="bg capstone2"></div>
                        <div class="blob"></div>
                    </div>
                </div>
                <div class="project-description-container">
                    An E-Commerce Application Programming interface
                    <br></br>
                    <br></br>
                    Technology: #REST Architecture #Node.js #Express.js #Javascript #MongoDB 
                    <br></br>
                    <br></br>
                    Scalable API for handling requests and responses for dynamic content rendering which utulizes No-SQL database for horizontal scalalable data sets.
                </div>
            </div>
            <div class="project-container">
                <div class="project-display-container">
                    <div class="card">
                        <div class="bg capstone3"></div>
                        <div class="blob"></div>
                    </div>
                </div>
                <div class="project-description-container">
                    An e-commerce front-end application 
                    <br></br>
                    <br></br>
                    Technology: #React.js, #HTML #CSS #Javascript #Bootstrap #NodePackages
                    <br></br>
                    <br></br>
                    Leveraging React.js's component-based architecture and Bootstrap's responsive design, 
                    the application provided a user-friendly and visually appealing interface for online shopping. 
                </div>
            </div>
            <div class="project-container">
                <div class="project-display-container">
                    <div class="card">
                        <div class="bg pattern-game"></div>
                        <div class="blob"></div>
                    </div>
                </div>
                <div class="project-description-container">
                    Color pattern game 
                    <br></br>
                    <br></br>
                    Technology: #HTML #CSS #Javascript #DOM #JQuery
                    <br></br>
                    <br></br>
                    
                    Test the player's memory and pattern recognition skills. It utilizes DOM manipulation and event listeners to create an 
                    interactive experience.
                </div>
            </div>
            <div class="project-container">
                <div class="project-display-container">
                    <div class="card">
                        <div class="bg mini-projects"></div>
                        <div class="blob"></div>
                    </div>
                </div>
                <div class="project-description-container">
                    Mini projects 
                    <br></br>
                    <br></br>
                    Technology: #HTML #CSS #Javascript #Python #PHP #Java
                    <br></br>
                    <br></br>
                    Collection of mini-projects from learning various technologies which include a quote generator, an accordion, a to-do list, and more each showcasing 
                    different aspects of web development and interactivity. Implementation of Fetch API concepts to use various publicly available API like Mailchimp, Weather API and alike
                    the project offered dynamic content generation functionalities, providing valuable hands-on experience.
                </div>
            </div>

                
           <Footer />
            
        </div>
    )
}