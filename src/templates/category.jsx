import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { Layout, Listing, Wrapper, PostCard, SEO, Header } from '../components'
import website from '../../config/website'

const Hero = styled.header`
  background-color: ${props => props.theme.colors.greyDarker};
  padding-top: 1rem;
  padding-bottom: 4rem;
  h1 {
    color: ${props => props.theme.colors.bg};
  }
`
const SiteHeaderContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 5vw 2vw;
  min-height: 140px;
  max-height: 450px;
  text-align: center;
`

const SiteTitle = styled.h1`
  z-index: 10;
  margin: 0;
  padding: 0;
  font-family: 'Source Sans Pro', -apple-system, 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica', 'Arial',
    sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
  font-size: 3.8rem;
  font-weight: 700;
`

const SiteDescription = styled.h2`
  z-index: 10;
  margin: 0;
  padding: 5px 0;
  font-size: 1.8rem;
  font-weight: 300;
  letter-spacing: 0.5px;
  opacity: 0.8;
  color: ${props => props.theme.colors.primary};
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

const CatWrapper = Wrapper.withComponent('main')

const Category = ({
  pageContext: { category },
  data: {
    posts: { edges, totalCount },
  },
  location,
}) => (
  <Layout>
    <SEO title={`Category: ${category} | ${website.titleAlt}`} pathname={location.pathname} />
    <Hero>
      <Wrapper>
        <Header invert />
        <SiteHeaderContent>
          <SiteTitle>{category}</SiteTitle>
          <SiteDescription>
            <>
              Uma coleção de {totalCount > 1 && `${totalCount} posts`}
              {totalCount === 1 && '1 post'}
              {totalCount === 0 && 'Nenhum post'}
            </>
          </SiteDescription>
        </SiteHeaderContent>
      </Wrapper>
    </Hero>
    <CatWrapper id={website.skipNavId}>
      <main id="site-main">
        <div css={inner}>
          <div css={[postFeed, postFeedRaise]}>
            {edges.map(post => (
              <PostCard key={post.node.uid} post={post.node} />
            ))}
          </div>
        </div>
      </main>
    </CatWrapper>
  </Layout>
)

export default Category

Category.propTypes = {
  pageContext: PropTypes.shape({
    category: PropTypes.string.isRequired,
  }).isRequired,
  data: PropTypes.shape({
    posts: PropTypes.shape({
      edges: PropTypes.array.isRequired,
      totalCount: PropTypes.number.isRequired,
    }).isRequired,
  }).isRequired,
  location: PropTypes.object.isRequired,
}

export const pageQuery = graphql`
  query CategoryPage($category: String!) {
    posts: allPrismicPost(
      sort: { fields: [data___date], order: DESC }
      filter: {
        data: {
          categories: { elemMatch: { category: { document: { elemMatch: { data: { name: { eq: $category } } } } } } }
        }
      }
    ) {
      totalCount
      edges {
        node {
          uid
          data {
            title {
              text
            }
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
