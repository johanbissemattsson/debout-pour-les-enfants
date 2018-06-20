import React from 'react'

const NotFoundPage = () => (
<div className='posts-page-container'>
    <Helmet title={'`d Actualite | Debout pour les Enfants'} />
    <div className='header-container'>
      <header className='header'>
        <section className='intro no-featured-image'>
          <div className='content'>
            <div className='intro-description'>
              <h1>404 &ndash; Page not found</h1>
            </div>
          </div>
        </section>
      </header>
    </div>
    <div className='page-container'>
      <div className='page'>
        <div className='content'>    
          <p>You just hit a route that doesn&#39;t exist...</p>
        </div>
      </div>
    </div>
  </div>
)

export default NotFoundPage
