import React from 'react'
import { Parallax } from 'react-parallax';
import Roll from 'react-reveal/Roll';
import './Education.scss'
import Tre from './../../assets/4normal.jpg'



    class Education extends React.Component {
        render() {
  return (
    <div className='education-cover' id="education">

         <Parallax className='image' bgImage={Tre} strength={200}>
         <div className="content">
            <div className="container-grid">
            <Roll left>
                <div className="items-a">
                <Roll left cascade>
                    <div className="box item1">
                        <h2>Education</h2>
                        <p>2013-2015</p>
                        <p>Highschool of economics and tourism Rantířovská 9 Jihlava</p>
                        <br></br>
                        <p>Business of small companies</p>
                        <p><strong>Graduation</strong></p>
                    </div>
                 </Roll>  

                 <Roll right cascade>
                    <div className="box item1">
                    <h2>Last Job</h2>
                        <p><strong>Freelancer Německo</strong></p>
                        <p>Welder</p>
                        <p>Leader of groups</p>
                        <p>Project manager´s representative</p>
                        <p>5 years</p>
                    </div>
                
                    <div className="box item1">
                       <h2><strong>Work experience</strong></h2>
                        <p>Specialist&shop assistant of elektronics</p>
                        <p>Reconstruction of apartment cores</p>
                        <p>Irrigation sprinkler system installer</p>
                        <p>Storekeeper etc...</p>
                    </div>
                  </Roll>
                </div>
                </Roll>
                <Roll right cascade>
                <div className="box items-b">
                <h2><strong>Achievments</strong></h2>
                <p>Project manager´s representative</p>
                    <p>8 International welding certifications of the highest level</p>
                    <p>International piping certification</p>
                    <p>Driving class class B</p>
                    <p>Subtitles for german show MySpass</p>
                    <p>Abroad experienced</p>
                </div>
                

                <div className="box items-c">
                <h2><strong>Languages</strong></h2>
                    <p>English language</p>
                    <p>Advanced B2</p>
                    <p>German language</p>
                    <p>Advanced B2</p>
                </div>  
                </Roll>
               
            </div>
    
            </div>
     </Parallax>
    
 </div>

  )
}
    }
export default Education