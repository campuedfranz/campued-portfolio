import React from 'react';
import Typewriter from "typewriter-effect";
import { Link } from 'react-router-dom';



export default function Home() {
    return (
        <div class="canvas">
                <div class="text-section">
                    <p class="intro-message">My name is</p>
                    <p class="name">Franz Campued</p>
                    <Typewriter className="typewriter"
                                
                        onInit={(typewriter) => {
                            typewriter
                                .typeString("a <strong>full-stack developer.</strong>")
                                .pauseFor(500)
                                .start();
                        }}
                    />
                    <div class="download-cv-container">
                        <a  class="download-link" href="https://export-download.canva.com/dZhQk/DAFfBJdZhQk/188/0-4185364343913345512.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJHKNGJLC2J7OGJ6Q%2F20230623%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20230623T231943Z&X-Amz-Expires=17151&X-Amz-Signature=882d975cc7dd7a508203e5034db522c9db0cdd06ee1e59b6366d65ae49028279&X-Amz-SignedHeaders=host&response-content-disposition=attachment%3B%20filename%2A%3DUTF-8%27%27FRANZ%2520CAMPUED_FSD_RESUME.pdf&response-expires=Sat%2C%2024%20Jun%202023%2004%3A05%3A34%20GMT">
                            <button class="button" type="button">
                                <div class="button__text">DOWNLOAD CV</div>
                                <span class="button__icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 35 35" id="bdd05811-e15d-428c-bb53-8661459f9307" data-name="Layer 2" class="svg"><path d="M17.5,22.131a1.249,1.249,0,0,1-1.25-1.25V2.187a1.25,1.25,0,0,1,2.5,0V20.881A1.25,1.25,0,0,1,17.5,22.131Z"></path><path d="M17.5,22.693a3.189,3.189,0,0,1-2.262-.936L8.487,15.006a1.249,1.249,0,0,1,1.767-1.767l6.751,6.751a.7.7,0,0,0,.99,0l6.751-6.751a1.25,1.25,0,0,1,1.768,1.767l-6.752,6.751A3.191,3.191,0,0,1,17.5,22.693Z"></path><path d="M31.436,34.063H3.564A3.318,3.318,0,0,1,.25,30.749V22.011a1.25,1.25,0,0,1,2.5,0v8.738a.815.815,0,0,0,.814.814H31.436a.815.815,0,0,0,.814-.814V22.011a1.25,1.25,0,1,1,2.5,0v8.738A3.318,3.318,0,0,1,31.436,34.063Z"></path></svg></span>
                            </button>
                        </a>
                    </div>
                </div>

                <nav class="nav-bar">
                    <Link href="/about" to="/about" class="about">about.</Link>
                    <Link href="/projects" to="/projects" class="projects">projects.</Link>
                    <Link href="/code" to="/code" class="code">code.</Link>
                    <div class="nav-underline">nav-underline</div>
                </nav>
        </div>
    )
}