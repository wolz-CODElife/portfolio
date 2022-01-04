import React from 'react'
import { works } from '../data/works'
import { IconExternalLink, IconGithub, IconProjects } from '../icons/icons'
import './css/Works.css'

const Works = () => {
    
    return (
        <div className='Works'>
            <h1 className='title'>Works <IconProjects /> </h1>
            <div className="gallery">
                {works.map(work => (
                    <div className="card" style={{ backgroundImage: `url(${work.thumbnail})` }} key={work.title}>
                        {work.video &&
                        // <img src={work.video} alt={work.title} id="background-video" />
                            <video autoPlay={true} controls={false} loop="2" muted poster={work.thumbnail} id="background-video">
                                <source src={work.video} type="video/mp4" />
                            </video>
                        }
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
