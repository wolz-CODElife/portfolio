import React from 'react'
import { articles } from '../data/articles'
import { IconArticles, IconExternalLink } from '../icons/icons'
import './css/Articles.css'

const Articles = () => {
    
    return (
        <div className='Articles'>
            <h1 className='title'>My Articles <IconArticles /> </h1>
            <div className="gallery">
                {articles.map(article => (
                    <div className="card" style={{ backgroundImage: `url(${article.thumbnail})` }} key={article.title}>
                        <div className="info">
                            <div className="header_links">
                                <a href={article.link} target="_blank" rel="noopener noreferrer"><IconExternalLink /></a>
                            </div>

                            <h1>{ article.title }</h1>
                            <p>{ article.desc }</p>
                            <div className="techs">
                                {article.tools.map(tool => (<span key={tool}>{tool}</span>))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Articles
