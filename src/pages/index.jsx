import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { graphql } from 'gatsby'
import { HeaderHome, Layout, PostCard, Wrapper } from '../components'

const Hero = styled.header`
  background-color: ${props => props.theme.colors.greyDarker};
  padding-top: 1rem;
  padding-bottom: 1rem;
  width: 100%;
  z-index: 1;
`

const HomePosts = css`
  @media (min-width: 795px) {
    .post-card:nth-of-type(6n + 1):not(.no-image) {
      flex: 1 1 100%;
      flex-direction: row;
    }
    .post-card:nth-of-type(6n + 1):not(.no-image) .post-card-image-link {
      position: relative;
      flex: 1 1 auto;
      border-radius: 5px 0 0 5px;
    }
    .post-card:nth-of-type(6n + 1):not(.no-image) .post-card-image {
      position: absolute;
      width: 100%;
      height: 100%;
    }
    .post-card:nth-of-type(6n + 1):not(.no-image) .post-card-content {
      flex: 0 1 357px;
    }
    .post-card:nth-of-type(6n + 1):not(.no-image) h2 {
      font-size: 1.8rem;
    }
    .post-card:nth-of-type(6n + 1):not(.no-image) p {
      font-size: 1.3rem;
      line-height: 1.55em;
    }
    .post-card:nth-of-type(6n + 1):not(.no-image) .post-card-content-link {
      padding: 30px 40px 0;
    }
    .post-card:nth-of-type(6n + 1):not(.no-image) .post-card-meta {
      padding: 0 40px 30px;
    }
  }
`

const inner = css`
  margin: 0 auto;
  max-width: 1040px;
  width: 100%;
`

const postFeed = css`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  margin: 0 -20px;
  padding: 40px 0 0 0;
`

const postFeedRaise = css`
  @media (min-width: 900px) {
    margin-top: -50px;
    padding-top: 0;
  }
`

class Index extends Component {
  render() {
    const {
      data: { homepage, social, posts, projects },
    } = this.props
    return (
      <Layout>
        <Hero>
          <Wrapper>
            <HeaderHome />
          </Wrapper>
        </Hero>
        <main id="site-main" css={HomePosts}>
          <div css={inner}>
            <div css={[postFeed, postFeedRaise]}>
              {posts.edges.map(post => (
                <PostCard key={post.node.uid} post={post.node} />
              ))}
            </div>
          </div>
        </main>
      </Layout>
    )
  }
}

export default Index

Index.propTypes = {
  data: PropTypes.shape({}).isRequired,
}

export const pageQuery = graphql`
  query IndexQuery {
    homepage: prismicHomepage {
      data {
        title {
          text
        }
        content {
          html
        }
      }
    }
    social: allPrismicHeroLinksBodyLinkItem {
      edges {
        node {
          primary {
            label {
              text
            }
            link {
              url
            }
            font_awesome_icon {
              text
            }
          }
        }
      }
    }
    posts: allPrismicPost(limit: 2, sort: { fields: [data___date], order: DESC }) {
      edges {
        node {
          uid
          data {
            title {
              text
            }
            description
            main_image {
              localFile {
                childImageSharp {
                  fluid(maxWidth: 1200, quality: 90) {
                    ...GatsbyImageSharpFluid_withWebp
                  }
                }
              }
            }
            date(formatString: "DD.MM.YYYY")
            categories {
              category {
                document {
                  data {
                    name
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`
