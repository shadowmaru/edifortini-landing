import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import styled from '@emotion/styled'
import { Layout, Listing, Wrapper, SliceZone, Title, SEO, Header } from '../components'
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

const PostTitle = styled.h1`
  font-family: 'Source Sans Pro', -apple-system, 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica', 'Arial',
  sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
  text-align: center;
`

const PostWrapper = styled(Wrapper)`
  margin-top: 120px;
`

const About = ({ data: { about, posts }, location }) => {
  const { data } = about
  return (
    <Layout customSEO>
      <SEO
        title={`${data.title.text} | ${website.titleAlt}`}
        pathname={location.pathname}
        desc={data.description}
        node={about}
        article
      />
      <Hero>
        <Wrapper>
          <Header />
        </Wrapper>
      </Hero>
      <PostWrapper id={website.skipNavId} as="main">
        <PostTitle>{data.title.text}</PostTitle>
        <SliceZone allSlices={data.body} />

        <Title style={{ marginTop: '4rem' }}>Conteúdos recentes</Title>
        <Listing posts={posts.edges} />
      </PostWrapper>
    </Layout>
  )
}

export default About

About.propTypes = {
  data: PropTypes.shape({}).isRequired,
}

// The typenames come from the slice names
// If this doesn't work for you query for __typename in body {} and GraphiQL will show them to you

export const pageQuery = graphql`
  query AboutQuery {
    about: prismicAbout {
      first_publication_date
      last_publication_date
      data {
        title {
          text
        }
        body {
          ... on PrismicAboutBodyText {
            slice_type
            id
            primary {
              text {
                html
              }
            }
          }
          ... on PrismicAboutBodyImage {
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
