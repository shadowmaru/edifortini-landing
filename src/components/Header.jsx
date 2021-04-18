import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'
import { css } from '@emotion/core'
import { SocialLink, SiteNav } from '.'

const StyledHeader = styled.nav`
  a {
    color: ${props => (props.invert ? props.theme.colors.greyLight : props.theme.colors.greyDark)};
    font-weight: 400;
    font-style: normal;
    font-family: 'Source Sans Pro', -apple-system, 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica', 'Arial',
      sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
  }
  position: relative;
  z-index: 300;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  overflow-y: visible;
  height: 45px;
  font-size: 0.8rem;
`

const SiteNavLeft = styled.div`
  display: flex;
  align-items: center;
  overflow-x: auto;
  overflow-y: visible;
  -webkit-overflow-scrolling: touch;
  margin-right: 10px;
  padding-bottom: 80px;
  letter-spacing: 0.4px;
  white-space: nowrap;
  -ms-overflow-scrolling: touch;
  @media (max-width: 700px) {
    margin-right: 0;
    padding-left: 4vw;
  }
`

const SiteNavRight = styled.div`
  flex-shrink: 0;
  display: flex;
  align-items: center;
  height: 40px;
  @media (max-width: 700px) {
    display: none;
  }
`

const SocialLinks = styled.ul`
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
  margin-left: 0;
  margin-bottom: 0;
  font-family: 'Source Sans Pro', -apple-system, 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica', 'Arial',
    sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
  li {
    display: inline;
    margin-right: 1rem;
    @media (max-width: ${props => props.theme.breakpoints.s}) {
      margin-right: 0.8rem;
    }
    a {
      font-style: normal;
      color: ${props => props.theme.colors.greyLight};
      font-size: 1.333rem;
      font-weight: 600;
      &:hover,
      &:focus {
        color: ${props => props.theme.colors.primary};
        text-decoration: none;
      }
      @media (max-width: ${props => props.theme.breakpoints.s}) {
        font-size: 1.2rem;
      }
    }
  }
`

class Header extends Component {
  render() {
    const { invert } = this.props
    return (
      <StyledHeader invert={invert}>
        <SiteNavLeft>
          <SiteNav />
        </SiteNavLeft>
        <SiteNavRight>
          <SocialLinks>
            <SocialLink
              key="linkedin"
              index={1}
              label="LinkedIn"
              url="https://www.linkedin.com/in/edifortini"
              fontAwesomeIcon="fab-linkedin"
            />
            <SocialLink
              key="twitter"
              index={2}
              label="Twitter"
              url="https://twitter.com/edifortini"
              fontAwesomeIcon="fab-twitter"
            />
            <SocialLink
              key="instagram"
              index={3}
              label="Instagram"
              url="https://www.instagram.com/edifortiniphotography"
              fontAwesomeIcon="fab-instagram"
            />
            <SocialLink
              key="flickr"
              index={4}
              label="Flickr"
              url="https://www.flickr.com/photos/efortini/albums"
              fontAwesomeIcon="fab-flickr"
            />
            <SocialLink
              key="photos"
              index={5}
              label="Photos"
              url="https://edifortini.46graus.com"
              fontAwesomeIcon="images"
            />
            <SocialLink
              key="facebook"
              index={6}
              label="Facebook"
              url="https://www.facebook.com/EdiFortini"
              fontAwesomeIcon="fab-facebook"
            />
          </SocialLinks>
        </SiteNavRight>
      </StyledHeader>
    )
  }
}

export default Header

Header.propTypes = {
  invert: PropTypes.bool,
}

Header.defaultProps = {
  invert: true,
}
