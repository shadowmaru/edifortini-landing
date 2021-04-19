import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { css } from '@emotion/core'
import styled from '@emotion/styled'
import { Link } from 'gatsby'
import Logo from '../../static/logos/edi-fortini-thumb.svg'

const NavStyles = css`
  display: flex;
  flex-wrap: wrap;
  margin: 0 0 0 -12px;
  padding: 0;
  list-style: none;
  li {
    display: block;
    margin: 0;
    padding: 0;
    text-transform: uppercase;
  }
  li a {
    display: block;
    margin: 0;
    padding: 10px 12px;
    color: #fff;
    opacity: 0.8;
  }
  li a:hover {
    text-decoration: none;
    opacity: 1;
  }
`
const NavLogo = css`
  li:first-child a {
    padding: 0 12px;
  }
`

const StyledLogo = styled.img`
  height: 72px;
`

class SiteNav extends Component {
  render() {
    const { isHome } = this.props
    return (
      <ul css={isHome ? NavStyles : [NavStyles, NavLogo]} role="menu">
        {!isHome && (
          <li role="menuitem">
            <Link to="/" aria-label="Voltar para a Home">
              <StyledLogo src={Logo} alt="Home" />
            </Link>
          </li>
        )}
        <li role="menuitem">
          <Link to="/about" aria-label="Ir para Sobre">
            Sobre
          </Link>
        </li>
        <li role="menuitem">
          <Link to="/categories/projetos" aria-label="Ir para Projetos">
            Projetos
          </Link>
        </li>
        <li role="menuitem">
          <Link to="/categories/publicacoes" aria-label="Ir para Publicações">
            Publicações
          </Link>
        </li>
        <li role="menuitem">
          <Link to="/contact" aria-label="Ir para Contato">
            Contato
          </Link>
        </li>
        <li role="menuitem">
          <Link to="/categories/textos" aria-label="Ir para Textos">
            Textos
          </Link>
        </li>
        <li role="menuitem">
          <Link to="/categories/ux" aria-label="Ir para UX">
            UX
          </Link>
        </li>
      </ul>
    )
  }
}

export default SiteNav

SiteNav.propTypes = {
  isHome: PropTypes.bool,
}

SiteNav.defaultProps = {
  isHome: false,
}
