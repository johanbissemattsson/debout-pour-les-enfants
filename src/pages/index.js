import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'

export default class IndexPage extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    return (
      <div className='page-container'>
        <div className='page'>
        <section className='intro'>
          <div className='content'>
            <div className='intro-description'>
              <h1>Debout pour <br />les Enfants <br />Senegal</h1>
              <p><strong>Debout pour les Enfants Senegal &mdash; Stå upp för barnen</strong> är en ideell organisation som genom att driva ett center vill göra livet lite bättre för gatubarnen i <Link to='om-oss'>Ziguinchor</Link>, en stad i södra Senegal.</p>
              <p><Link to='bidrag' className='button'>Bli månadsgivare</Link> eller kom som <Link to='volontar'>volontär</Link> och delta i verksamheten.</p>
            </div>
          </div>
          <div className='intro-images'>

          </div>
        </section>
        <section className="section">
          <div className="container">
            {posts
              .map(({ node: post }) => (
                <div
                  className="content"
                  style={{ border: '1px solid #eaecee', padding: '2em 4em' }}
                  key={post.id}
                >
                  <p>
                    <Link className="has-text-primary" to={post.fields.slug}>
                      {post.frontmatter.title}
                    </Link>
                    <span> &bull; </span>
                    <small>{post.frontmatter.date}</small>
                  </p>
                  <p>
                    {post.excerpt}
                    <br />
                    <br />
                    <Link className="button is-small" to={post.fields.slug}>
                      Keep Reading →
                    </Link>
                  </p>
                </div>
              ))}
          </div>
        </section>
      </div>
      </div>
    )
  }
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] },
      filter: { frontmatter: { templateKey: { eq: "blog-post" } }}
    ) {
      edges {
        node {
          excerpt(pruneLength: 400)
          id
          fields {
            slug
          }
          frontmatter {
            title
            templateKey
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  }
`
