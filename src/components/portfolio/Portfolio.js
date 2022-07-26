import React from 'react'
import {useState} from 'react'
import data from './Data'

import Main from './main/Main'


import './Portfolio.scss'

const Portfolio = () => { 
    const[myData, setMyData] = useState(data);
    const[value,setValue] = useState(0);
    
    
    
const {id, title, description, link} = myData[value];

  return (
  <section className='section'>
        <div className='port-container'>
            <aside className="btn-container">
                {myData.map((item, index)=>{
                    return(
                        <button 
                        key={item.id}
                        onClick={()=>setValue(index)}
                        className={`port-btn ${index === value && 'active-btn'}`}
                        >
                           {item.title} 
                        </button>
                    )
                })}
                <a href="https://github.com/AnthonyZet" className="port-btn">GitHub</a>
                
            </aside>
            <Main 
             title={title}
             description={description}
             value={value}  
             link={link}      
            />
        </div>
</section>        
  )
}

export default Portfolio