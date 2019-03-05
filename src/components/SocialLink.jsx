import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Tooltip } from 'react-tippy'

const Icon = styled(FontAwesomeIcon)`
  font-size: 3rem;
`

class SocialLink extends Component {
  render() {
    const { index, label, url, fontAwesomeIcon } = this.props
    const icon = fontAwesomeIcon.split('-')[0] === 'fab' ? ['fab', fontAwesomeIcon.split('-')[1]] : fontAwesomeIcon
    return (
      <li data-name={`social-entry-${index}`}>
        <Tooltip title={label} position="bottom" trigger="mouseenter" distance="20">
          <a href={url} target="_blank" rel="noopener noreferrer" aria-label={label}>
            <Icon icon={icon} />
          </a>
        </Tooltip>
      </li>
    )
  }
}

export default SocialLink

SocialLink.propTypes = {
  index: PropTypes.number.isRequired,
  label: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  fontAwesomeIcon: PropTypes.string.isRequired,
}
