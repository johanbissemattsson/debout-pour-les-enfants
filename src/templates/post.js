import React from 'react'
import PropTypes from 'prop-types'
import { kebabCase } from 'lodash'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'
import Content, { HTMLContent } from '../components/Content'

export const PostTemplate = ({
  content,
  contentComponent,
  date,
  description,
  title,
  helmet,
  language
}) => {
  const PostContent = contentComponent || Content

  return (
    <article>
      {helmet}
      <div className='header-container'>
        <header className='header'>
          <section className='intro no-featured-image'>
            <div className='content'>
              <div className='intro-description'>
                <h1>{language === 'en' ? 'News' : language === 'fr' ? '`d Actualite' : 'Aktuellt'}</h1>
              </div>
            </div>
          </section>
        </header>
      </div>
      <div className="main-content-container">
        <PostContent className='content' content={content} />
        <div className='content'>
          {date}
        </div>
      </div>
    </article>
  )
}

PostTemplate.propTypes = {
  content: PropTypes.string.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
}

const Post = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <PostTemplate
      content={post.html}
      contentComponent={HTMLContent}
      description={post.frontmatter.description}
      helmet={<Helmet title={`${post.frontmatter.title} | Debout pour les Enfants`} />}
      title={post.frontmatter.title}
      date={post.frontmatter.date}
      language={post.frontmatter.language}
    />
  )
}

Post.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default Post

export const postQuery = graphql`
  query postByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "YYYY-MM-DD")
        title
        description
        language
      }
    }
  }
`
