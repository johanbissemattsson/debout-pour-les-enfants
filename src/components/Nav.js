import React from 'react'
import Link from 'gatsby-link'

import logo from '../img/logo.svg'

const Nav = () => (
  <div className='site-nav-container'>
    <nav className='site-nav'>
      <div className='nav-brand'>
        <Link to='/' className='nav-item'>
          <figure className='image'>
            <img src={logo} alt='Kaldi' style={{ width: '88px' }} />
          </figure>
        </Link>
      </div>
      <div className='nav-items'>
        <div className='nav-lang'>
          <Link className='nav-item' to='/about' activeClassName='active'>
            Sv
          </Link>
          <Link className='nav-item' to='/about' activeClassName='active'>
            Fr
          </Link>
          <Link className='nav-item' to='/about' activeClassName='active'>
            En
          </Link>
        </div>
        <div className='nav-start'>
          <Link className='nav-item' to='/about' activeClassName='active'>
            Om oss
          </Link>
          <Link className='nav-item' to='/posts' activeClassName='active'>
            Aktuellt
          </Link>
          <Link className='nav-item' to='/about' activeClassName='active'>
            Bidrag
          </Link>
          <Link className='nav-item' to='/about' activeClassName='active'>
            Volontär
          </Link>
          <Link className='nav-item' to='/about' activeClassName='active'>
            Om Sénegal
          </Link>
          <Link className='nav-item' to='/about' activeClassName='active'>
            Kontakt
          </Link>
        </div>
      </div>
    </nav>
  </div>
)

export default Nav
