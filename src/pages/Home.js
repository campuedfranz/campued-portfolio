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