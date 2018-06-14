import React from 'react'
import { kebabCase } from 'lodash'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'

const PostsPage = ({
  data: { allMarkdownRemark: { edges: posts }},
}) => (
  <div className='posts-page-container'>
    <div className='header-container'>
      <header className='header'>
        <section className='intro no-featured-image'>
          <div className='content'>
            <div className='intro-description'>
              <h1>Aktuellt</h1>
            </div>
          </div>
        </section>
      </header>
    </div>
    <div className='page-container'>
      <div className='page'>
        <div className='content'>    
          <div className='posts'>
            {posts.map(({ node: post }) => (
              <div className='post-item-container' key={post.id}>
                <div className='post-item'>
                  <h3 className='post-item-title'>
                    <Link className="has-text-primary" to={post.fields.slug}>
                      <figure className='image'>
                        <img src={''} alt='Kaldi' />
                      </figure>
                      {post.frontmatter.title}
                    </Link>
                  </h3>
                  <p>
                    {post.excerpt}
                    <br />
                  </p>
                  <p className='date'><Link to={post.fields.slug}>{post.frontmatter.date}</Link></p>
                </div>
                </div>
            ))}
            </div>
          </div>
      </div>
    </div>
  </div>
)

export default PostsPage

export const postsPageQuery = graphql`
  query PostsQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] },
      filter: { frontmatter: { templateKey: { eq: "blog-post" } }}
    ) {
      edges {
        node {
          excerpt(pruneLength: 300)
          id
          fields {
            slug
          }
          frontmatter {
            title
            templateKey
            date(formatString: "YYYY-MM-DD")
          }
        }
      }
    }
  }
`

/*

  <section className="section">
    <Helmet title={`Tags | ${title}`} />
    <div className="container content">
      <div className="columns">
        <div
          className="column is-10 is-offset-1"
          style={{ marginBottom: '6rem' }}
        >
          <h1 className="title is-size-2 is-bold-light">Aktuellt</h1>
          <ul className="taglist">
            {group.map(tag => (
              <li key={tag.fieldValue}>
                <Link to={`/tags/${kebabCase(tag.fieldValue)}/`}>
                  {tag.fieldValue} ({tag.totalCount})
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </section>

  */
