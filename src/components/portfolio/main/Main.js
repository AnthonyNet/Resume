import React from 'react'
import './Main.scss'

const Main = ({title, description, value, link}) => {
  return (
    <main className="main">
    <div className="title">
        <h2>{title}</h2>
        <p>{description}</p>
        <div className="img-cover">
            <img 
            className='port-img'
            src={require(`../img/learn${value}.png`)}
            alt="pic" />
        </div>
        
    </div>
    <div className='btn-cover'>
    <a href={link}><button className="btn-bot">Enter</button></a>
    </div>
</main>
  )
}

export default Main