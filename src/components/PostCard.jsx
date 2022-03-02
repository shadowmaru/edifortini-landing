import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import Categories from './Listing/Categories'

const PostCardStyles = css`
  flex: 1 1 300px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  margin: 0 20px 40px;
  min-height: 300px;
  background: #fff center center;
  background-size: cover;
  border-radius: 5px;
  box-shadow: rgba(39, 44, 49, 0.06) 8px 14px 38px, rgba(39, 44, 49, 0.03) 1px 3px 8px;
  transition: all 0.5s ease;
  :hover {
    box-shadow: rgba(39, 44, 49, 0.07) 8px 28px 50px, rgba(39, 44, 49, 0.04) 1px 6px 12px;
    transition: all 0.4s ease;
    transform: translate3D(0, -1px, 0) scale(1.02);
  }
`
const PostCardImageLink = css`
  position: relative;
  display: block;
  overflow: hidden;
  border-radius: 5px 5px 0 0;
`

const PostCardImage = styled.div`
  width: auto;
  height: 200px;
  background: ${props => props.theme.colors.greyLight} no-repeat center center;
  background-size: cover;
`

const PostCardContent = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const PostCardContentLink = css`
  position: relative;
  flex-grow: 1;
  display: block;
  padding: 25px 25px 0;
  color: ${props => props.theme.colors.greyDark};
  :hover {
    text-decoration: none;
  }
`

const PostCardTitle = styled.h2`
  font-family: 'Source Sans Pro', -apple-system, 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica', 'Arial',
    sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
  font-style: normal;
  margin-top: 0;
`

const PostCardExcerpt = styled.section``

class PostCard extends Component {
  render() {
    const { post } = this.props
    let categories = false
    if (post.data.categories[0].category) {
      categories = post.data.categories.map(c => c.category.document[0].data.name)
    }
    return (
      <article
        className={`post-card ${post.data.main_image && post.data.main_image.localFile ? '' : 'no-image'}`}
        css={PostCardStyles}
      >
        {post.data.main_image && post.data.main_image.localFile && (
          <Link className="post-card-image-link" css={PostCardImageLink} to={`/${post.uid}`}>
            <PostCardImage className="post-card-image">
              {post.data.main_image &&
                post.data.main_image.localFile &&
                post.data.main_image.localFile.childImageSharp &&
                post.data.main_image.localFile.childImageSharp.fluid && (
                  <Img
                  alt={`${post.data.title.text} cover image`}
                    style={{ height: '100%' }}
                  fluid={post.data.main_image.localFile.childImageSharp.fluid}
                  />
              )}
            </PostCardImage>
          </Link>
        )}
        <PostCardContent className="post-card-content">
          <Link className="post-card-content-link" css={PostCardContentLink} to={`/${post.uid}`}>
            <header className="post-card-header">
              <div>{categories && <Categories categories={categories} />}</div>
              <PostCardTitle>{post.data.title.text}</PostCardTitle>
            </header>
            <PostCardExcerpt>
              <p>{post.data.description}</p>
            </PostCardExcerpt>
          </Link>
        </PostCardContent>
      </article>
    )
  }
}

export default PostCard

PostCard.propTypes = {
  post: PropTypes.object.isRequired,
}
