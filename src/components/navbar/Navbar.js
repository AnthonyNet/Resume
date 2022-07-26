import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'
import './Navbar.scss'

const Navbar = () => {
    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)
    if(click){
      document.body.style.overflow = 'hidden'
    } else{
      document.body.style.overflow = 'scroll'
    }
    
  return (
    <nav className='navbar'>
          
        <div className="container">
              <h1>AZ</h1>

            <ul className={click ? 'nav active' : 'nav'}>
              
              <Link onClick={handleClick} to='/' className='link'>Home</Link>
              <Link onClick={handleClick} to='/experience' className='link'>Experience</Link>
              <Link onClick={handleClick} to='/education' className='link'>Education</Link>
              <Link onClick={handleClick} to='/portfolio' className='link'>Projects</Link>
             
             </ul>
                <div onClick={handleClick} className="hamburger">
                    {click ? (<AiOutlineClose className='icon' />) : (<AiOutlineMenu className='icon' />)}
                </div>
        </div>

    </nav>
  )
}

export default Navbar