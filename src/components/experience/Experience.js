import React from 'react'
import ExpCard from './ExpCard';

import data from "./data"

import {TiHtml5} from "react-icons/ti";
import { DiCss3, DiSass, DiResponsive, DiJavascript1, DiNodejsSmall, DiReact, DiJqueryLogo, DiPhp, DiGithubBadge, DiStackoverflow, DiPhonegap  } from "react-icons/di";
import { SiGimp } from "react-icons/si";


import './Experience.scss'

const Experience = () => {
  const dataX = data.map(item=>item);

  return (
    
<div className='experience' id="techs">
  <div className="container">
        <h2 className='title'>Technologies</h2>
    <div className="card-container">
    
        <div className="card">
            <ExpCard 
            icon={<TiHtml5 className='icon'
            />}
            heading={dataX[0].heading}
            skill={dataX[0].skill} 
            />
        </div>
        <div className="card">
            <ExpCard 
            icon={<DiCss3 className='icon'/>}
            heading={dataX[1].heading}
            skill={dataX[1].skill}  
            />
        </div>
        <div className="card">
            <ExpCard icon={<DiSass className='icon'/>}
            heading={dataX[2].heading}
            skill={dataX[2].skill}  
            />
        </div>
        <div className="card">
            <ExpCard icon={<DiPhonegap className='icon'/>}
              heading={dataX[3].heading}
              skill={dataX[3].skill} 
            />
        </div>
        <div className="card">
            <ExpCard icon={<DiJavascript1 className='icon'/>}
              heading={dataX[4].heading}
              skill={dataX[4].skill} 
            />
        </div>
        <div className="card">
            <ExpCard icon={<DiNodejsSmall className='icon'/>}
              heading={dataX[5].heading}
              skill={dataX[5].skill} 
            />
        </div>
        <div className="card">
            <ExpCard icon={<DiReact className='icon'/>}
              heading={dataX[6].heading}
              skill={dataX[6].skill} 
            />
        </div>
        
        <div className="card">
            <ExpCard icon={<DiJqueryLogo className='icon'/>}
              heading={dataX[7].heading}
              skill={dataX[7].skill} 
            />
        </div>
        <div className="card">
            <ExpCard icon={<DiPhp className='icon'/>}
              heading={dataX[8].heading}
              skill={dataX[8].skill} 
            />
        </div> 
        <div className="card">
            <ExpCard icon={<SiGimp className='icon'/>}
              heading={dataX[9].heading}
              skill={dataX[9].skill} 
            />
        </div> 
        <div className="card">
            <ExpCard icon={<DiGithubBadge className='icon'/>}
              heading={dataX[10].heading}
              skill={dataX[10].skill} 
            />
        </div> 
        <div className="card">
            <ExpCard icon={<DiStackoverflow className='icon'/>}
              heading={dataX[11].heading}
              skill={dataX[11].skill} 
            />
        </div> 
              <a href="/" className='btn btn-exp'>➤Visit My GitHub</a>
    </div> 

  </div>
</div>
  )
}

export default Experience