import React from 'react';
import MainNavBar from '../components/MainNavBar';
import MongoDB from '../assets/images/MongoDB.png';
import Express from '../assets/images/Express.png';
import Node from '../assets/images/Node.png';
import ReactImg from '../assets/images/React.png';
import Git from '../assets/images/Git.png';
import HTML from '../assets/images/HTML.png';
import CSS from '../assets/images/CSS.png';
import Bootstrap from '../assets/images/Bootstrap.png';
import JS from '../assets/images/JS.png';
import Sublime from '../assets/images/Sublime.png';
import VSCode from '../assets/images/VSCode.png';
import Postman from '../assets/images/Postman.png';
import REST from '../assets/images/REST.png';
import NPM from '../assets/images/NPM.png';
import JQeury from '../assets/images/JQuery.png';
import Footer from '../components/Footer';










export default function About() {
    return (
        <div class="">
           <MainNavBar />
            
           <div class="about-me-container">
                <div class="name-container">
                    <h1 class="main-app-name">I am Franz.</h1>
                    <div class="name-underline">underline</div>
                </div>
                <div class="description-container">
                     
                    Full-stack developer and a lifelong learner. Someone with a strong passion for a career in the tech industry. 
                    I have always been captivated by the endless possibilities that technology presents, which is why I have continued to pursue my passion for technology.
                    
                    <br></br>
                    <br></br>

                    My journey took an exciting turn when I ventured into freelancing in the web3 industry. 
                    It was here that my enthusiasm for tech reignited and propelled me to new heights. 
                    Through my experiences working on a multitude of contracts in freelancing, 
                    I have not only showcased my ability to adapt and learn quickyly but also demonstrated my determination as a lifelong learner.    

                    <br></br>
                    <br></br>
                    My favorite ingredients and my current tech stack are MongoDB, Express.js, React.js and Node.js. I also often like to mix Vanilla Javascript, HTML and CSS.

                    <div class="tech-stack-container">
                    
                        <div class="language-container">
                            <img class="tech-stack-images" src={MongoDB}></img>
                            <span>No-SQL Database</span>
                        </div>
                        <div class="language-container">
                            <img class="tech-stack-images" src={Express}></img>
                            <span>Server Side</span>
                        </div>
                        <div class="language-container">
                            <img class="tech-stack-images" src={ReactImg}></img>
                            <span>Client Side</span>
                        </div>
                        <div class="language-container">
                            <img class="tech-stack-images" src={Node}></img>
                            <span>Server Environment</span>
                        </div>

                    </div>

                    <br></br>
                    <br></br>

                    Some other tools and concepts I use to brew my applications.

                    <div class="tech-stack-container">
                    
                        <div class="language-container">
                            <img class="tech-stack-images" src={Git}></img>
                            <span>Version Control</span>
                        </div>
                        <div class="language-container">
                            <img class="tech-stack-images" src={HTML}></img>
                            <span>Web Structure</span>
                        </div>
                        <div class="language-container">
                            <img class="tech-stack-images" src={CSS}></img>
                            <span>Styling</span>
                        </div>
                        <div class="language-container">
                            <img class="tech-stack-images" src={JS}></img>
                            <span>Scripting</span>
                        </div>
                        <div class="language-container">
                            <img class="tech-stack-images" src={JQeury}></img>
                            <span>DOM Manipulation</span>
                        </div>
                        <div class="language-container">
                            <img class="tech-stack-images" src={Bootstrap}></img>
                            <span>Material Design</span>
                        </div>
                        <div class="language-container">
                            <img class="tech-stack-images" src={Sublime}></img>
                            <span>Code Editor</span>
                        </div>
                        <div class="language-container">
                            <img class="tech-stack-images" src={VSCode}></img>
                            <span>Code Editor</span>
                        </div>
                        <div class="language-container">
                            <img class="tech-stack-images" src={REST}></img>
                            <span>Architecture</span>
                        </div>
                        <div class="language-container">
                            <img class="tech-stack-images" src={Postman}></img>
                            <span>API Testing</span>
                        </div>
                        <div class="language-container">
                            <img class="tech-stack-images" src={NPM}></img>
                            <span>Package Manager</span>
                        </div>
                    </div>

                </div>
            </div>
            
            <div class="experience-container">
                <div class="job-header-cotainer">
                    <div class="job-underline">underline</div>
                    <div class="job-title">Freelance Rockstar</div>
                    <div class="job-company">My Room</div>
                    <div class="job-timeline">January 2022 till the day I die</div>
                </div>
                <div class="job-description-container">
                    Freelancer in the web3 industry, I have gained valuable expertise in various roles, contributing to the success of multiple projects and communities. 
                    With a strong focus on community management, I have excelled as a Discord tech support and social media manager, 
                    ensuring smooth communication and addressing user inquiries effectively.
                    <br></br>
                    <br></br>
                    My skill set extends beyond community management. I possess a keen eye for design and copywriting, 
                    allowing me to create compelling sales copy and graphics that capture attention and drive conversions. 
                    Through content management and analytics reporting, I have effectively optimized digital platforms, 
                    enhancing user engagement and improving overall performance.
                    <br></br>
                    <br></br>
                    Overall, my diverse experience in the web3 industry, coupled with my proficiency in community management, 
                    content creation, and marketing, makes me a valuable asset for any project or organization seeking to thrive in this dynamic digital landscape.
                </div>
            </div>

            <div class="experience-container">
                <div class="job-header-cotainer">
                    <div class="job-underline">underline</div>
                    <div class="job-title">Masterdata Analyst</div>
                    <div class="job-company">Accenture Philippines</div>
                    <div class="job-timeline">May 2021 till December 2021</div>
                </div>
                <div class="job-description-container">
                    Throughout my career, I have successfully managed clients' information systems and database systems, 
                    ensuring smooth and error-free reporting cycles. This involved overseeing user access, inventories, financial transactions, troubleshooting, reviews, 
                    and generating accurate reports. By effectively maintaining these systems, I contributed to improved operational efficiency and 
                    decision-making within the organizations I worked with.
                    <br></br>
                    <br></br>
                    One of my key responsibilities was maintaining multinational company exchange rates. By regularly updating and monitoring exchange rates, 
                    I facilitated seamless daily, weekly, and monthly cash and non-cash transactions. This crucial task played a vital role in ensuring accurate 
                    financial calculations and streamlined international operations.
                    <br></br>
                    <br></br>
                    I also took an active role in reviewing and optimizing automated processes and scripts. 
                    By thoroughly evaluating these processes on a weekly and monthly basis, I identified areas for improvement and implemented necessary changes. 
                    This proactive approach resulted in increased efficiency, reduced errors, and enhanced overall system performance.
                    <br></br>
                    <br></br>
                    Throughout these experiences, I developed strong analytical skills, attention to detail, and the ability to manage complex data sets effectively.

                </div>
            </div>
            <Footer />
        </div>
    )
}