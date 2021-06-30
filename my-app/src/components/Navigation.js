import React from 'react'

const Navigation = () => {
    return (
        <nav class="navbar navbar-light">
        <ul class="nav flex-column">
            <li class="nav-item">
              <a class="about-me" aria-current="page" href="#about-me">About me</a>
            </li>
            <li class="nav-item">
              <a class="projects" href="#projects">Projects</a>
            </li>
            <li class="nav-item">
              <a class="Contact" href="#contact-me">Contact</a>
            </li>
            <li class="nav-item">
                <a class="Resume" href="file:///C:/Users/wmalo/Downloads/Resume.pdf">Resume</a>
            </li>
          </ul>
        </nav>
    )
}


export default Navigation