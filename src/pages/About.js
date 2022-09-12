import React from 'react'
import { IconAbout } from '../icons/icons'
import './css/About.css'

const About = () => {
    return (
        <div className='About'>
            <h1 className='title'>About Me <IconAbout /> </h1>
            <div className='img_logo'>
                <img src="https://i.postimg.cc/kGBXT6Zt/Picture7.jpg" alt="wolz CODElife" />
            </div>
            <br />
            <code>
                <q>
                    I am <a href="mailto:joeladewole3@gmail.com" title="Joel Adewole" className='highlighted'>Joel Adewole</a> a proficient technical writer and developer advocate with about {`${new Date().getFullYear() - 2014}+`} years of experience and {`${new Date().getFullYear() - 2019}+`} years working experience with full-stack web technologies such as <a href="http://github.com/wolz-CODElife" target="_blank" rel="noopener noreferrer" title="GitHub" className='highlighted'>JavaScript(React), Python(Flask), HTML and CSS</a>. I've worked as a contractor for various <a href="https://www.linkedin.com/in/wolz-codelife/" target="_blank" rel="noopener noreferrer" title="LinkedIn" className='highlighted'>companies</a> across the world.
                    I usually focus on developing single-page applications (SPAs), and I also enjoy transforming UI/UX designs into smoothly functional applications.
                    I've written and edited various technical articles, including white papers, tutorials, user manuals, and developer documentation.
                    Besides offering the finest customer experience, I want to create the best developer experience. 
                    In my capacity as a contributor to several developer communities, I gave back to GDSC (Google Developer Student Club), UNILAG, where I was a major part of the core team organizing hackathons and training classes, OSCA (Open Source Community Africa), where I gave public talks on technical writing and open source contributions, Ethereum, where I improved and created blog contents for the official documentation, Polygon, where I created developer documentation, and on social media platforms like Twitter, Linkedin and Discord which enables me to network with other developers and learn how to create resources for them.
                    <br></br>
                    I'd appreciate the opportunity of a chat at your earliest convenience so we can discuss how we can work together.
                </q>
            </code>
        </div>
    )
}

export default About
