import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Content, { HTMLContent } from '../components/Content'

export const PageTemplate = ({ helmet, title, content, contentComponent, ingress, bgImage }) => {
  const PageContent = contentComponent || Content

  return (
    <article className='page'>
      {helmet}
      <div className='header-container'>
        <header className='header'>
          <section className='intro' style={{background: 'url(' + bgImage + ') center 43% / cover'}}>
            <div className='content'>
              <div className='intro-description'>
                <h1>{title}</h1>
                <PageContent content={ingress} />
              </div>
            </div>
          </section>
        </header>
      </div>
      <div className="main-content-container">
        <PageContent className='content' content={content} />
      </div>
    </article>
  )
}

PageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
  ingress: PropTypes.string,
  bgImage: PropTypes.string
}

const Page = ({ data }) => {
  const { markdownRemark: page } = data

  return (
    <PageTemplate
      contentComponent={HTMLContent}
      title={page.frontmatter.title}
      content={page.html}
      ingress={page.frontmatter.ingress}
      bgImage={page.frontmatter.bgImage}
      helmet={<Helmet title={`${page.frontmatter.title} | Debout pour les Enfants`} />}
    />
  )
}

Page.propTypes = {
  data: PropTypes.object.isRequired,
}

export default Page

export const pageQuery = graphql`
  query Page($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        ingress
        bgImage
      }
    }
  }
`
