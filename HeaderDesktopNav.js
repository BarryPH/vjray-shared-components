import PropTypes from 'prop-types'
import Link from 'next/link'
import styled, { css } from 'styled-components'
import theme from '../theme'
import hoc from './hoc'

const LinkTextRoot = hoc('span').extend`
  ${props => props.isActive && css`
    border-bottom: 2px solid currentColor;
    padding-bottom: 33px;
  `}
`

const LinkText = props =>
  <LinkTextRoot
    font='textRegular'
    fontSize={[ 2, 3 ]}
    color='inherit'
    isActive={props.isActive}
    children={props.children}
  />

const Nav = styled.span`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  width: 100%;

  a {
    cursor: pointer;
    line-height: ${theme.blockHeights.navBar};
  }

  a:not(:last-child) {
    margin-right: 1.5rem;
  }

`

const HeaderDesktopNav = props => (
  <Nav centered style={{ textAlign: 'center' }}>
    {props.navItems.map((item) => {
      return (
        <Link href={item.href}>
          <a><LinkText isActive={props.pathname === item.href}>{item.label}</LinkText></a>
        </Link>
      )
    })}
  </Nav>
)

HeaderDesktopNav.propTypes = {
  navItems: PropTypes.array,
  pathname: PropTypes.string,
};

HeaderDesktopNav.defaultProps = {
  navItems: [],
  pathname: '',
};

export default HeaderDesktopNav
