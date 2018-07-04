import React from 'react'
import Link from 'gatsby-link'

import { slide as Menu } from 'react-burger-menu'

import logo from '../img/logo-dpe.svg'
import svFlag from 'flag-icon-css/flags/1x1/se.svg';
import enFlag from 'flag-icon-css/flags/1x1/gb.svg';
import frFlag from 'flag-icon-css/flags/1x1/sn.svg';

export default class Nav extends React.Component {
  constructor() {
    super();
    this.state = {menuOpen: false}
  }

  render() {
    const { language } = this.props;

    const handleMenuClick = (event) => {
      this.setState({menuOpen: false});
    }

    return(
      <div className='site-nav-container'>
        <nav className='site-nav'>
          <div className='nav-brand'>
            {language === 'en' ?
              <Link to='/en' className='nav-item'>
                <figure className='image'>
                  <img src={logo} alt='Debout pour les Enfants'/>
                </figure>
              </Link>
            : language === 'fr' ?
              <Link to='/fr' className='nav-item'>
                <figure className='image'>
                  <img src={logo} alt='Debout pour les Enfants' />
                </figure>
              </Link>
            :
              <Link to='/' className='nav-item'>
                <figure className='image'>
                  <img src={logo} alt='Debout pour les Enfants'/>
                </figure>
              </Link>                  
            }
          </div>
          <div className='nav-items'>
            <div className='nav-lang'>           
              <Link className={language === 'sv' || language === null ? 'nav-item active' : 'nav-item'} to='/'>
                <img src={svFlag} alt='Svenska' width='16' height='16' className='flag-icon'/>Sv<span className='hideable-chars'>enska</span>
              </Link>
              <Link className={language === 'fr' ? 'nav-item active' : 'nav-item'} to='/fr'>
                <img src={frFlag} alt='Français' width='16' height='16' className='flag-icon'/>Fr<span className='hideable-chars'>ançais</span>
              </Link>
              <Link className={language === 'en' ? 'nav-item active' : 'nav-item'} to='/en'>
                <img src={enFlag} alt='English' width='16' height='16' className='flag-icon'/>Eng<span className='hideable-chars'>lish</span>
              </Link>
            </div>
            {language === 'en' ?
              <div className='nav-start'>
                <div className='hamburger-menu-container'>
                  <Menu right className='hamburger-menu'  isOpen={ this.state.menuOpen } >
                    <Link className='menu-item' to='/en' onClick={ handleMenuClick }>Home</Link>
                    <Link className='menu-item' to='/en/about-us' onClick={ handleMenuClick }>About us</Link>
                    <Link className='menu-item' to='/en/news' onClick={ handleMenuClick }>News</Link>
                    <Link className='menu-item' to='/en/contribution' onClick={ handleMenuClick }>Contribution</Link>
                    <Link className='menu-item' to='/en/volunteer' onClick={ handleMenuClick }>Volunteer</Link>
                    <Link className='menu-item' to='/en/about-senegal' onClick={ handleMenuClick }>About Sénégal</Link>
                    <Link className='menu-item' to='/en/contact' onClick={ handleMenuClick }>Contact</Link>
                  </Menu>
                </div>
                <div className='main-menu'>
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
              </div>
            : language === 'fr' ?
              <div className='nav-start'>
              <div className='hamburger-menu-container'>
                  <Menu right className='hamburger-menu'  isOpen={ this.state.menuOpen }>
                    <Link className='menu-item' to='/fr' onClick={handleMenuClick}>Maison</Link>
                    <Link className='menu-item' to='/fr/a-propos-de-nous' onClick={handleMenuClick }>à Propos de nous</Link>
                    <Link className='menu-item' to='/fr/actualite' onClick={ handleMenuClick}>`d Actualite</Link>
                    <Link className='menu-item' to='/fr/contribution' onClick={ handleMenuClick}>Contribution</Link>
                    <Link className='menu-item' to='/fr/volontaire' onClick={ handleMenuClick}>Volontaire</Link>
                    <Link className='menu-item' to='/fr/de-senegal' onClick={ handleMenuClick}>de Sénégal</Link>
                    <Link className='menu-item' to='/fr/contact' onClick={ handleMenuClick}>Contact</Link>
                  </Menu>
                </div>
                <div className='main-menu'>
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
              </div>
            :
              <div className='nav-start'>
                <div className='hamburger-menu-container'>
                    <Menu right className='hamburger-menu'  isOpen={ this.state.menuOpen }>
                      <Link className='menu-item' to='/'>Hem</Link>
                      <Link className='menu-item' to='/sv/om-oss' onClick={ handleMenuClick}>Om oss</Link>
                      <Link className='menu-item' to='/sv/aktuellt' onClick={handleMenuClick}>Aktuellt</Link>
                      <Link className='menu-item' to='/sv/bidrag' onClick={handleMenuClick}>Bidrag</Link>
                      <Link className='menu-item' to='/sv/volontar' onClick={handleMenuClick}>Volontär</Link>
                      <Link className='menu-item' to='/sv/om-senegal' onClick={handleMenuClick}>Om Senegal</Link>
                      <Link className='menu-item' to='/sv/kontakt' onClick={handleMenuClick}>Kontakt</Link>
                    </Menu>
                  </div>
                  <div className='main-menu'>                
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
                      Om Senegal
                    </Link>
                    <Link className='nav-item' to='/sv/kontakt' activeClassName='active'>
                      Kontakt
                    </Link>
                  </div>
              </div>            
            }
            </div>
        </nav>
      </div>
    );
  }
}

