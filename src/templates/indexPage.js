import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Content, { HTMLContent } from '../components/Content'
import Link from 'gatsby-link'

export class IndexPageTemplate extends React.Component {
  render() {
    const { helmet, title, content, contentComponent, posts } = this.props;
    const { edges } = posts;
    
    return (
      <div className='index-container'>
        {helmet}
        <div className='header-container'>
          <header className='header'>
            <section className='intro'>
              <div className='content'>
                <div className='intro-description'>
                  <h1>Debout pour <br />les Enfants <br />Senegal</h1>
                  <p><strong>Debout pour les Enfants Senegal &mdash; Stå upp för barnen</strong> är en ideell organisation som genom att driva ett center vill göra livet lite bättre för gatubarnen i <Link to='sv/om-oss'>Ziguinchor</Link>, en stad i södra Senegal.</p>
                  <div className='call-to-action'>
                    <p><Link to='sv/bidrag' className='button'>Bli månadsgivare</Link> eller delta i verksamheten som <Link to='sv/volontar'>volontär</Link>.</p>
                  </div>
                </div>
              </div>
            </section>
          </header>
        </div>
        <div className='page-container'>
          <div className='page'>
            <div className='content'>
              {edges &&
                <section>
                  <h1 className='section-title'>Aktuellt</h1>
                  <div className='posts'>
                  {edges
                    .map(({ node: post }) => (
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
                </section>
              }
            </div>
          </div>
        </div>
      </div>
    )
  }
}

/*
                  {posts
                    .map(({ node: post }) => (
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
                    */
IndexPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
  posts: PropTypes.shape({
    edges: PropTypes.array,
  }),
}

const IndexPage = ({ data }) => {
  const { markdownRemark: page, posts: posts } = data

  return (
    <IndexPageTemplate
      contentComponent={HTMLContent}
      title={page.frontmatter.title}
      content={page.html}
      ingress={page.frontmatter.ingress}
      posts={posts}
      helmet={<Helmet title={`Debout pour les Enfants`} />}
    />
  )
}

IndexPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default IndexPage

export const indexPageQuery = graphql`
  query IndexQuery($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
    posts: allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] },
      filter: {
        frontmatter: {
          templateKey: { eq: "post" },
          language: {eq: "sv"}
        }
      }
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
