import React from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'
import Img from 'gatsby-image'

const Content = styled.div`
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
`

const MainImage = ({ input }) => (
  <Content>
    <Img fluid={input.localFile.childImageSharp.fluid} />
  </Content>
)

export default MainImage

MainImage.propTypes = {
  input: PropTypes.object.isRequired,
}
