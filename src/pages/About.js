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
                    I am <a href="mailto:joeladewole3@gmail.com" title="Joel Adewole" className='highlighted'>Joel Adewole</a> a proficient web developer with about {`${new Date().getFullYear() - 2014}+`} years of experience and {`${new Date().getFullYear() - 2019}+`} years working experience with full-stack web technologies such as <a href="http://github.com/wolz-CODElife" target="_blank" rel="noopener noreferrer" title="GitHub" className='highlighted'>JavaScript(React), Python(Flask), HTML and CSS</a>. I've worked as a contractor for a various <a href="https://www.linkedin.com/in/wolz-codelife/" target="_blank" rel="noopener noreferrer" title="LinkedIn" className='highlighted'>companies</a> across the world.
                    I usually focus on developing single-page applications (SPAs), and I also like transforming UI/UX designs into smoothly functional solutions.
                    I've written and edited various technical articles, including white papers, tutorials, user manuals, and developer documentation, in my previous jobs and present job as a contractor.
                    I'm currently migrating towards the blockchain sector, where I'm learning more about cryptocurrency, web3, and decentralized technologies.
                    <br></br>
                    For our mutual benefit, I'd love to contribute my experience to your company. I believe I can grow and develop while contributing my expertise and skills to your team's success. 
                    I'd appreciate the opportunity of a chat at your earliest convenience so we can talk about how I can contribute my experience to your company.
                </q>
            </code>
        </div>
    )
}

export default About
