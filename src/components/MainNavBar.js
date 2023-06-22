import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../assets/images/logo.png'

export default function MainNavBar(){

	return (
        <div>
            <nav class="main-navbar">
                <Link href ="/" as={Link} to="/">
                    <img id="logo" alt="franz-dev-logo" src={logo}></img>
                </Link>
                
                <div class="nav-links-container">
                    <div class="underline">

                        <Link className="main-nav-link-about" to="/about"> 
                            <NavLink className="" to="/about"></NavLink>about.
                        </Link>
                        <Link className="main-nav-link-projects" to="/projects">
                            <NavLink className="" to="/projects"></NavLink>projects.
                        </Link>
                        <Link className="main-nav-link-code" to="/code">
                            <NavLink className="" to="/code"></NavLink>code.
                        </Link>

                    </div>
                </div>
            </nav>
        </div>		
	)
}