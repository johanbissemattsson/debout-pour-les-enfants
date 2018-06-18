import React from 'react'
import Link from 'gatsby-link'

export default class Footer extends React.Component {
  render() {
    const { language } = this.props;

    return (
      <div className='site-footer-container'>
        <footer className='site-footer'>
          <div className='content'>
            <h3 className='footer-title'>
              {language === 'en' ?
                <Link to='/en'>Debout pour les Enfants</Link>     
              : language === 'fr' ?
                <Link to='/fr'>Debout pour les Enfants</Link>     
              :
                <Link to='/'>Debout pour les Enfants</Link>            
              }           
            </h3>
            <div className='nav-items'>
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
              <div className='nav-lang'>
                <Link className='nav-item' to='/' className={language === 'sv' ? 'active' : ''}>
                  Svenska
                </Link>
                <Link className='nav-item' to='/fr' className={language === 'fr' ? 'active' : ''}>
                  Français
                </Link>
                <Link className='nav-item' to='/en' className={language === 'en' ? 'active' : ''}>
                  English
                </Link>
              </div>
              </div>
              </div>
          </footer>
      </div>
    )
  }
}