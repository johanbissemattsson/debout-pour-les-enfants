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
          <Link className='nav-item' to='/products'>
            Sv
          </Link>
          <Link className='nav-item' to='/products'>
            Fr
          </Link>
          <Link className='nav-item' to='/products'>
            En
          </Link>
        </div>
        <div className='nav-start'>
          <Link className='nav-item' to='/about'>
            Om oss
          </Link>
          <Link className='nav-item' to='/products'>
            Aktuellt
          </Link>
          <Link className='nav-item' to='/products'>
            Bidrag
          </Link>
          <Link className='nav-item' to='/products'>
            Volontär
          </Link>
          <Link className='nav-item' to='/products'>
            Om Sénegal
          </Link>
          <Link className='nav-item' to='/products'>
            Kontakt
          </Link>
        </div>
      </div>
    </nav>
  </div>
)

export default Nav
