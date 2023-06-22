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
                    Responsive website portfolio across mobile, tablet, and desktop platforms. By utilizing React.js, HTML, and JavaScript, 
                    the website dynamically adapted to different screen sizes, providing an optimal user experience. 
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
                    An e-commerce API using REST architecture. Built on Node.js and Express.js, the API seamlessly handled requests and responses, 
                    enabling smooth communication between the client-side and server-side. MongoDB was utilized as the database, and 
                    various Node packages were incorporated to enhance functionality and streamline development processes. 
                    The project is a robust and scalable e-commerce API.
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
                    An e-commerce front-end application using React.js, Bootstrap, and several Node packages. Leveraging React.js's component-based architecture and Bootstrap's responsive design, 
                    the application provided a user-friendly and visually appealing interface for online shopping. 
                    Through the integration of various Node packages, the project delivered enhanced functionality and efficient development processes, 
                    resulting in a robust and engaging e-commerce front-end application.
                </div>
            </div>
                
           <Footer />
            
        </div>
    )
}