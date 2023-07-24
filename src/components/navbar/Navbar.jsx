import React from 'react'
import "./Navbar.css"
import logo from '../../assets/logo.svg';


const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='left-parent'>
            <div className='logo-parent'>
                <img className="image" alt="Check" src={logo}></img>
            </div>
            <div className='drop-parent'>
                    <select className='drop'>
                        <option className="options" value="Courses">Courses</option>
                    </select>
                    <select className='drop'>
                        <option className="options" value="Programs">Programs</option>
                    </select>
            </div>
        </div>
        <div className='right-parent'>
            <div className="search">
                <span class="material-symbols-outlined">
                    search
                </span>
            </div>
            <div className="log-in">
                <button>Log in</button>
            </div>
            <div className="join-now">
                <button>JOIN NOW</button>
            </div>
        </div>
    </div>
 
  )
}

export default Navbar