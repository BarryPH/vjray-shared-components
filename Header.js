import Link from 'next/link'
import PropTypes from 'prop-types'

import {
  site,
  desktopNavItems,
  mobileNavItems,
  contactDetails
} from "../constants";
import theme from '../theme'
import icons from './iconConstants'
import { headerFade } from './animationConstants'

import styled, { css } from 'styled-components'
import { Flex, Box } from 'rebass'

import Icon from './Icon';
import { IconPhone } from './Icons'
import { Display } from './Headline'
import { Text } from './Texts'
import { Divider } from './Text'
import Container from './Container'
import { ButtonOutline } from './Buttons'
import RespToggle from './ResponsiveToggle'

import Hamburger from './Hamburger'
import MobileNav from './HeaderMobileNav'
import DesktopNav from './HeaderDesktopNav'


//
// Text & buttons
//

const StyledButton = styled(ButtonOutline)`
  box-shadow: inset 0 0 0 1px;
`;

// ref for the CTA btn
// const CTA = styled(Box)`
//   ${props => props.hidePhoneNumberResponsively && css`
//     @media (min-width: 769px) and (max-width: 1023px) {
//       display: none;
//     }
//   `}
// `

const CTALink = props => (
  <Link href={props.href}>
    <a>
      <Text is="span" family="textRegular">
        <StyledButton color='text'>{props.children}</StyledButton>
      </Text>
    </a>
  </Link>
);

// 
// Header root
// 

const HeaderRoot = styled(({
  isHidden,
  isWindowScrolled,
  isModalVisible,
  children,
  ...rest
}) => (
  <Flex is="header" {...rest}>{children}</Flex>
))`
  --Header-background-color: rbga(255, 255, 255, 1);
  --Header-border-color: rgba(88, 88, 112, 0.15);
  background-color: var(--Header-background-color);
  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: var(--Header-border-color);
  height: ${theme.blockHeights.navBar};
  opacity: 1;
  position: fixed;
  top: 0;
  transform: translate3d(0, 0, 0) translateY(0px);
  transition:
    opacity ${headerFade.duration}s ease-in-out ${headerFade.delay}s,
    transform ${headerFade.duration}s ease-in-out ${headerFade.delay}s,
    background-color ${headerFade.duration}s ease-in-out,
    border ${headerFade.duration}s ease-in-out 0s;
  width: 100%;
  z-index: 3;

  @media (max-width: 512px) {
    button {
      padding: 0 0.75rem;
    }
  }

  @media (max-width: 320px) {
    button span {
      display: none;
    }
  }

  ${props => props.color && css`
    color: ${theme.colors[props.color] || theme.colors.text};
  `}

  ${props => props.clear && css`
    --Header-background-color: rbga(255, 255, 255, 0);
  `}

  ${props => props.reverseBorder && css`
    --Header-border-color: rgba(255, 255, 255, 0.15);
  `}

  ${props => props.isHidden && css`
    opacity: 0;
    transform: translate3d(0, 0, 0) translateY(-${theme.blockHeights.navBar});
    transition:
      opacity ${headerFade.duration}s ease-in-out 1s,
      transform ${headerFade.duration}s ease-in-out 1s,
      background-color ${headerFade.duration}s ease-in-out,
      border ${headerFade.duration}s ease-in-out 0s;
  `}

  ${props => props.isWindowScrolled && css`
    --Header-border-color: transparent;
    background-color: ${theme.colors[props.bg] || 'rgba(255, 255, 255, 1)'};
    box-shadow:
      0 16px 24px 2px rgba(0,0,0,0.03),
      0 6px 30px 5px rgba(0,0,0,0.03);
    color: ${theme.colors.text};
    transition:
      opacity ${headerFade.duration}s ease-in-out,
      transform ${headerFade.duration}s ease-in-out,
      background-color ${headerFade.duration}s ease-in-out,
      border ${headerFade.duration}s ease-in-out;
  `}

  ${props => props.isModalVisible && css`
    --Header-background-color: ${theme.colors.offWhite};
    --Header-border-color: rgba(88, 88, 112, 0.15);
    background-color: var(--Header-background-color);
    border-bottom: 1px solid var(--Header-border-color);
    transition:
      opacity ${headerFade.duration}s ease-in-out,
      transform ${headerFade.duration}s ease-in-out,
      background-color ${headerFade.duration}s ease-in-out,
      border ${headerFade.duration}s ease-in-out;
  `}

  ${props => props.invertTextOnMobile && css`
    @media (max-width: 512px) {
      --Header-border-color: rgba(255, 255, 255, 0.15);

      a,
      span {
        color: ${theme.colors.text20} !important;
      }

      button {
        border-color: --Header-border-color;
      }
    }
  `}
`;

const Root = props => (
  <div>
    <HeaderRoot
      isHidden={!props.isVisible}
      isWindowScrolled={props.isWindowScrolled}
      isModalVisible={props.isModalVisible}
    >
      <Container px={[1, 2, 2, 3]} mw="lg" w={1}>
        
        {/* MENU */}
        <RespToggle break={["none", "none", "block"]}>
          <DesktopNav
            navItems={props.desktopNavItems}
            pathname={props.pathname}
          />
        </RespToggle>

        <Flex align="center" justify="space-between">
          {/* LOGO */}
          <Box>
            <Link href="/">
              <a>
                <Icon
                  color={props.color}
                  size="80"
                  icon={site === "strata" ? icons.logo : icons.logoGroup}
                />
              </a>
            </Link>
          </Box>

          {/* CTA */}
          <RespToggle break={["block", "block", "none", "block"]}>
            {site === "strata" && (
              <CTALink href={"tel:" + contactDetails.phone}>
                <IconPhone navBar />
                {contactDetails.phone}
              </CTALink>
            )}

            {site !== "strata" && (
              <CTALink href="vjraystrata.com.au">Visit VJ Ray Strata</CTALink>
            )}
          </RespToggle>

          {/* HAMBURGER */}
          <RespToggle break={[null, null, null, "none"]} hideAtDesktop p={2}>
            <Hamburger
              onClick={props.handleModalTriggerClick}
              isOpen={props.isModalVisible}
            >
              <span />
              <span />
              <span />
              <span />
            </Hamburger>
          </RespToggle>
        </Flex>
      </Container>
    </HeaderRoot>

    <MobileNav
      navItems={props.mobileNavItems}
      handleModalClick={props.handleModalClick}
      isVisible={props.isModalVisible}
    />
  </div>
);



class Header extends React.Component {
  constructor(props) {
    super(props);

    this.handleScroll = this.handleScroll.bind(this)
    this.handleModalClick = this.handleModalClick.bind(this);
    this.handleModalTriggerClick = this.handleModalTriggerClick.bind(this);

    this.state = {
      isVisible: true,
      isWindowScrolled: false,
      previousScrollPos: 0,
      isModalVisible: false,
    };
  }

  componentDidMount() {
    this.setState({
      previousScrollPos: window.scrollY,
      isWindowScrolled: window.scrollY > 200,
    });

    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll(event) {
    if (this.state.isModalVisible) return;

    const previousScrollPos = this.state.previousScrollPos;
    // iOS hides the header when scrolled to top
    // The cause is believed to be that it's possible to scroll a little below
    // 0 on the Y axis with a bounce back animation which scrolls back to 0.
    // scollPos is checked to be above 0 to exclude scroll events caused by the bounce back animation
    const scrolledDown = window.scrollY > previousScrollPos && window.scrollY > 0;

    this.setState({
      previousScrollPos: window.scrollY,
      isVisible: !scrolledDown,
      isWindowScrolled: window.scrollY > 200,
    });
  }

  handleModalClick() {
    this.setState({
      isModalVisible: false,
      isWindowScrolled: window.scrollY > 200,
    });
  }

  handleModalTriggerClick() {
    const willHideModal = this.state.isModalVisible;

    this.setState({
      isVisible: true,
      isWindowScrolled: !willHideModal || !(willHideModal && window.scrollY <= 200),
      isModalVisible: !this.state.isModalVisible,
    });
  }

  render() {
    return (
      <Root
        desktopNavItems={desktopNavItems}
        mobileNavItems={mobileNavItems}

        handleModalClick={this.handleModalClick}
        handleModalTriggerClick={this.handleModalTriggerClick}

        {...this.state}
        {...this.props}
      />
    )
  }
}

Header.propTypes = {
  color: PropTypes.string,
  clear: PropTypes.bool,
  invertTextOnMobile: PropTypes.bool,
  pathname: PropTypes.string,
  reverseBorder: PropTypes.bool,
  linkToStrata: PropTypes.bool,
};

Header.defaultProps = {
  color: 'text',
  clear: false,
  invertTextOnMobile: false,
  pathname: '',
  reverseBorder: false,
  linkToStrata: false,
};

export default Header;
