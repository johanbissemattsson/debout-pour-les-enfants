import React from 'react'
import Link from 'gatsby-link'

import logo from '../img/logo.svg'

export default class Nav extends React.Component {
  render() {
    const { language } = this.props;
    return(
      <div className='site-nav-container'>
        <nav className='site-nav'>
          <div className='nav-brand'>
            {language === 'en' ?
              <Link to='/en' className='nav-item'>
                <figure className='image'>
                  <img src={logo} alt='Kaldi' style={{ width: '88px' }} />
                </figure>
              </Link>
            : language === 'fr' ?
              <Link to='/fr' className='nav-item'>
                <figure className='image'>
                  <img src={logo} alt='Kaldi' style={{ width: '88px' }} />
                </figure>
              </Link>
            :
              <Link to='/' className='nav-item'>
                <figure className='image'>
                  <img src={logo} alt='Kaldi' style={{ width: '88px' }} />
                </figure>
              </Link>                  
            }
          </div>
          <div className='nav-items'>
            <div className='nav-lang'>           
              <Link className={language === 'sv' || language === null ? 'nav-item active' : 'nav-item'} to='/'>
                Sv
              </Link>
              <Link className={language === 'fr' ? 'nav-item active' : 'nav-item'} to='/fr'>
                Fr
              </Link>
              <Link className={language === 'en' ? 'nav-item active' : 'nav-item'} to='/en'>
                En
              </Link>
            </div>
            {language === 'en' ?
              <div className='nav-start'>
                <Link className='nav-item' to='/en/about-us' activeClassName='active'>
                  About us
                </Link>
                <Link className='nav-item' to='/en/news' activeClassName='active'>
                  News
                </Link>
                <Link className='nav-item' to='/en/contribution' activeClassName='active'>
                  Contribution
                </Link>
                <Link className='nav-item' to='/en/volunteer' activeClassName='active'>
                  Volunteer
                </Link>
                <Link className='nav-item' to='/en/about-senegal' activeClassName='active'>
                  About Sénégal
                </Link>
                <Link className='nav-item' to='/en/contact' activeClassName='active'>
                  Contact
                </Link>
              </div>
            : language === 'fr' ?
              <div className='nav-start'>
                <Link className='nav-item' to='/fr/a-propos-de-nous' activeClassName='active'>
                  à Propos de nous
                </Link>
                <Link className='nav-item' to='/fr/actualite' activeClassName='active'>
                  `d Actualite
                </Link>
                <Link className='nav-item' to='/fr/contribution' activeClassName='active'>
                  Contribution
                </Link>
                <Link className='nav-item' to='/fr/volontaire' activeClassName='active'>
                  Volontaire
                </Link>
                <Link className='nav-item' to='/fr/de-senegal' activeClassName='active'>
                  de Sénégal
                </Link>
                <Link className='nav-item' to='/fr/contact' activeClassName='active'>
                  Contact
                </Link>
              </div>
            :
              <div className='nav-start'>
                <Link className='nav-item' to='/sv/om-oss' activeClassName='active'>
                  Om oss
                </Link>
                <Link className='nav-item' to='/sv/aktuellt' activeClassName='active'>
                  Aktuellt
                </Link>
                <Link className='nav-item' to='/sv/bidrag' activeClassName='active'>
                  Bidrag
                </Link>
                <Link className='nav-item' to='/sv/volontar' activeClassName='active'>
                  Volontär
                </Link>
                <Link className='nav-item' to='/sv/om-senegal' activeClassName='active'>
                  Om Sénegal
                </Link>
                <Link className='nav-item' to='/sv/kontakt' activeClassName='active'>
                  Kontakt
                </Link>
              </div>            
            }
            </div>
        </nav>
      </div>
    );
  }
}
