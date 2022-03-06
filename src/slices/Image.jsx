import React from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'
import {GatsbyImage} from 'gatsby-plugin-image'

const Content = styled.div`
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
`

const Image = ({ input }) => (
  <Content>
    <GatsbyImage image={input.primary.image.localFile.childImageSharp.gatsbyImageData} />
  </Content>
)

export default Image

Image.propTypes = {
  input: PropTypes.object.isRequired,
}
