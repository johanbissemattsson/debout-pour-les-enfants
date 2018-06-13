import React from 'react'
import PropTypes from 'prop-types'
import Content, { HTMLContent } from '../components/Content'

export const AboutPageTemplate = ({ title, content, contentComponent }) => {
  const PageContent = contentComponent || Content

  return (
    <article>
      <div className='header-container'>
        <header className='header'>
          <section className='intro'>
            <div className='content'>
              <div className='intro-description'>
                <h1>Om oss</h1>
                <p><strong>Vi lorem ipsum</strong> är en ideell organisation som genom att driva ett center vill göra livet lite bättre för.</p>
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

AboutPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}

const AboutPage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <AboutPageTemplate
      contentComponent={HTMLContent}
      title={post.frontmatter.title}
      content={post.html}
    />
  )
}

AboutPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default AboutPage

export const aboutPageQuery = graphql`
  query AboutPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`
