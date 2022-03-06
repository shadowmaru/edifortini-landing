import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import styled from '@emotion/styled'
import { Layout, Listing, MainImage, Wrapper, SliceZone, Title, SEO, Header } from '../components'
import Categories from '../components/Listing/Categories'
import website from '../../config/website'

const Hero = styled.header`
  background-color: ${props => props.theme.colors.greyDarker};
  padding-top: 1rem;
  padding-bottom: 1rem;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1;
`

const Headline = styled.p`
  margin: 2rem 0 0 0;
  font-family: 'Source Sans Pro', -apple-system, 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica', 'Arial',
  sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
  color: ${props => props.theme.colors.grey};
  font-size: 1.25rem;
  a {
    font-style: normal;
    font-weight: normal;
  }
  text-align: center;
`

const PostTitle = styled.h1`
  font-family: 'Source Sans Pro', -apple-system, 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica', 'Arial',
  sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
  text-align: center;
`

const PostWrapper = styled(Wrapper)`
  margin-top: 120px;
`

const Post = ({ data: { prismicPost, posts }, location }) => {
  const { data } = prismicPost
  let categories = false
  if (data.categories[0].category) {
    categories = data.categories.map(c => c.category.document[0].data.name)
  }
  return (
    <Layout customSEO>
      <SEO
        title={`${data.title.text} | ${website.titleAlt}`}
        pathname={location.pathname}
        desc={data.description}
        node={prismicPost}
        article
      />
      <Hero>
        <Wrapper>
          <Header />
        </Wrapper>
      </Hero>
      <PostWrapper id={website.skipNavId} as="main">
        <Headline>
          {data.date} — {categories && <Categories categories={categories} />}
        </Headline>
        <PostTitle>{data.title.text}</PostTitle>
        {data.main_image && <MainImage input={data.main_image} />}
        <SliceZone allSlices={data.body} />

        <Title style={{ marginTop: '4rem' }}>Conteúdos recentes</Title>
        <Listing posts={posts.edges} />
      </PostWrapper>
    </Layout>
  )
}

export default Post

Post.propTypes = {
  data: PropTypes.shape({
    prismicPost: PropTypes.object.isRequired,
  }).isRequired,
  location: PropTypes.object.isRequired,
}

// The typenames come from the slice names
// If this doesn't work for you query for __typename in body {} and GraphiQL will show them to you

export const pageQuery = graphql`
  query PostBySlug($uid: String!) {
    prismicPost(uid: { eq: $uid }) {
      uid
      first_publication_date
      last_publication_date
      data {
        title {
          text
        }
        description
        main_image {
          localFile {
            childImageSharp {
              gatsbyImageData(layout: FULL_WIDTH)
            }
          }
        }
        date(formatString: "DD.MM.YYYY")
        categories {
          category {
            document {
              ... on PrismicCategory {
                data {
                  name
                }
              }
            }
          }
        }
        body {
          ... on PrismicPostBodyText {
            slice_type
            id
            primary {
              text {
                html
              }
            }
          }
          ... on PrismicPostBodyImage {
            slice_type
            id
            primary {
              image {
                localFile {
                  childImageSharp {
                     gatsbyImageData(layout: FULL_WIDTH)
                  }
                }
              }
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
            date(formatString: "DD.MM.YYYY")
            categories {
              category {
                document {
                  ... on PrismicCategory {
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
  }
`
