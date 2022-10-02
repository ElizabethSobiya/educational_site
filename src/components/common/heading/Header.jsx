import React from 'react'
import Head from './Head'
import './Header.css'
import {Link} from 'react-router-dom'
import { useState } from 'react'

function Header() {

const [click, setClick] = useState(false);

  return (
    <>
      <Head/>
      <header>
        <nav className='flexSB'>
            <ul className={click ? 'mobile-nav' : 'flexSB'} onClick={()=> setClick(false)}>
                <li><Link to ='/'>Home</Link></li>
                <li><Link to ='/courses'>All Courses</Link></li>
                <li><Link to ='/about'>About</Link></li>
                <li><Link to ='/team'>Team</Link></li>
                <li><Link to ='/pricing'>Pricing</Link></li>
                <li><Link to ='/journal'>Journal</Link></li>
                <li><Link to ='/contact'>Contact</Link></li>
            </ul>
            <div className="start">
                <div className="button">
                    GET CERTIFICATION
                </div>
            </div>
            <button className='toggle' onClick={()=> setClick(!click)}>
                  {click ? <i className='fa fa-times'></i> : <li className='fa fa-bars'></li>}
                </button>
        </nav>
      </header>
    </>
  )
}

export default Header
