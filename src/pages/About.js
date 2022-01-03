import React from 'react'
import { IconAbout } from '../icons/icons'
import './css/About.css'

const About = () => {
    return (
        <div className='About'>
            <h1 className='title'>About Me <IconAbout /> </h1>
            <code>
                <q>
                    I am a web developer with {`${new Date().getFullYear() - 2014}`}+ years of experience in full-stack web technologies like <a href="http://github.com/wolz-CODElife" target="_blank" rel="noopener noreferrer" title="GitHub" className='highlighted'>JavaScript(React), Python(Flask), HTML, CSS, Git, Firebase</a>. Recently, I have been working remotely as a contractor for various <a href="https://www.linkedin.com/in/wolz-codelife/" target="_blank" rel="noopener noreferrer" title="LinkedIn" className='highlighted'>companies</a> worldwide. And I specialize in building single-page applications (SPAs) and enjoy transforming beautiful designs into smoothly-working products used by many people. And also, writing technical content for blog platforms.
                    <br></br>
                    I am currently learning Web3 and Typescript.
                    <br></br>
                    And I am open to full-time or freelance jobs as a front-end web developer, full-stack web developer or technical writer.
                </q>
            </code>
        </div>
    )
}

export default About
