import React from 'react'
import { works } from '../data/works'
import { IconExternalLink, IconGithub, IconProjects } from '../icons/icons'
import './css/Works.css'

const Works = () => {
    const Resume = "https://docs.google.com/document/d/1-dfXyR29heMUpy799-6tu2a5vLLyJunxQGDsPOcEJJE/edit?usp=sharing"
    // const Resume = "https://firebasestorage.googleapis.com/v0/b/wolz-portfolio.appspot.com/o/Adewole%20Joel%20Resume.pdf?alt=media&token=fbe6435b-550d-4f55-811e-4a69728a7b62"

    return (
        <div className='Works'>
            <h1 className='title'>Works <IconProjects /> </h1>
            <div className="pdf">
                {/* <iframe src={Resume} title='Resume' frameborder="0"></iframe> */}
                <a href={Resume} download target="_blank" rel='noopener noreferrer'>Download Resume</a>
            </div>
            <div className="gallery">
                {works.map(work => (
                    <div className="card" style={{ backgroundImage: `url(${work.thumbnail})` }} key={work.title}>
                        <div className="info">
                            <div className="header_links">
                                <a href={work.link} target="_blank" rel="noopener noreferrer"><IconExternalLink /></a>
                                {work.source&& <a href={`https://github.com/${work.source}`} target="_blank" rel="noopener noreferrer"><IconGithub /></a>}
                            </div>

                            <h1>{ work.title }</h1>
                            <p>{ work.desc }</p>
                            <div className="techs">
                                {work.tools.map(tool => (<span key={tool}>{tool}</span>))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Works
