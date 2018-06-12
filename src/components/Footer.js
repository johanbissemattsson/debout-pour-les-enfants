import React from 'react'
import Link from 'gatsby-link'

const Footer = () => (
  <div className='site-footer-container'>
    <footer className='site-footer'>
      <div className='content'>
        <h3 className='footer-title'>Debout pour les Enfants Senegal</h3>
        <div className='nav-items'>
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
          </div>
          </div>
      </footer>
  </div>
)
/*
const Footer = () => (
  <div className='site-nav-container'>
    <nav className='site-nav'>
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
*/

export default Footer
