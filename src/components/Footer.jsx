import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'

const StyledFooter = styled.footer`
  margin: 0 auto;
  padding: 2rem;
  color: ${props => props.theme.colors.greyLight};
  background: ${props => props.theme.colors.greyDarker};
`

class Footer extends Component {
  render() {
    const { children } = this.props
    return <StyledFooter>{children}</StyledFooter>
  }
}

export default Footer

Footer.propTypes = {
  children: PropTypes.node.isRequired,
}
