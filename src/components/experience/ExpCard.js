import React from 'react'

const ExpCard = (props) => {

return (
<div className='expCard-container'>
    <div className="expCover">
      {props.icon}
    </div>

    <div className="expCover">
      <h2>{props.heading}</h2>
        {props.icon2}
      <p>{props.skill}</p>
    </div>
 </div>
  )
}

export default ExpCard