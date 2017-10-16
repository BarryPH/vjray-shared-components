import PropTypes from 'prop-types'
import Link from 'next/link'
import styled, { css } from 'styled-components'
import { Box, Flex } from 'rebass'

import { site } from "../constants";
import theme from '../theme'
import icons from './iconConstants'
import hoc from './hoc'
import Container from './Container2'
import { Divider } from './Text'
import Icon from './Icon';
import ResponsiveToggle from './ResponsiveToggle';


const Root = hoc(Box).extend`
  border-top: 1px solid ${theme.colors.text20};
  font-family: inherit;

  ${props => props.bg && css`
    background-color: ${theme.colors[props.color]};
  `}
`;

// `

const LogoBox = styled(Box)`
  @media (max-width: 512px) {
    margin-top: 12px;
    transform: translateX(-6px);
  }
`

// as soon as you extend it, you lose the hoc()
// so I'm assigning margins manually…
// this is why proper Rebass is so good…
const Nav = Flex.withComponent('nav').extend`
  color: ${theme.colors.text40};
  margin-top: ${theme.space[2]}px;

  @media (min-width: 768px) {
    margin-top: {theme.space[4]}px;
  }

  p,
  span,
  a {
    color: ${theme.colors.text70};

    @media (max-width: 512px) {
      font-size: ${theme.fontSizes[0]}pt;
    }
  }

  span {
    font-family: ${theme.fonts.textRegular};
  }
`;

const Column = styled(Box)`
  @media (max-width: 767px) {
    margin-top: 2rem;

    :first-child {
      margin-top: 1.5rem;
    }
  }

  @media (min-width: 768px) {
    :not(:last-child) {
      margin-right: 3rem;
    }
  }

  a {
    display: block;

    &:not(:first-child) {
      margin-top: 1rem;
    }
  }
`;

/*
 * -------------
 * Secondary nav
 * -------------
 */

const RuledBox = styled(Box)`
  border-top: 1px solid ${theme.colors.text10};
  margin-top: ${theme.space[3]}px;
  padding-top: ${theme.space[2]}px;

  @media (min-width: 768px) {
    margin-top: 36px;
  }
`;

const SecondNav = Flex.withComponent('nav').extend`
  color: ${theme.colors.text40};

  @media (max-width: 512px) {
    :last-child {
      margin-top: ${theme.space[2]}px;
    }
  }

  p,
  span,
  a {
    @media (max-width: 512px) {
      font-size: ${theme.fontSizes[1]}px;
    }
  }
`;

const StyledDivider = styled(Divider)`
  --spacing: 0.5rem;
`


const Footer = props => (
  <Root bg={props.bg}>
    <Container maxWidth="72em" pt={[0, 2]} pb={3}>
      <Flex direction={["column", "row"]} justify="space-between">
        <ResponsiveToggle hideAtMobile>
          <Flex column>
            <LogoBox>
              <Link href="/">
                <a>
                  <Icon color="text" size="80" icon={icons.logoGroup} />
                </a>
              </Link>
            </LogoBox>
          </Flex>
        </ResponsiveToggle>

        <Box>
          <Nav>
            <Flex direction={["column", "row"]} justify="center">
              <Column>
                <Link href="/">
                  <a>
                    <span>About Us</span>
                  </a>
                </Link>
                <Link href="/strata-management">
                  <a>Strata Management</a>
                </Link>
                <Link href="/rental-property-management">
                  <a>Property Management</a>
                </Link>
                <Link href="/real-estate-valuations">
                  <a>Valuations</a>
                </Link>
              </Column>
              <Column>
                <Link href="/forms-and-fact-sheets">
                  <a>
                    <span>Useful Info</span>
                  </a>
                </Link>
                <Link href="/forms-and-fact-sheets">
                  <a>Facts and forms</a>
                </Link>
              </Column>
              <Column>
                <Link href="/contact">
                  <a>
                    <span>Contact Us</span>
                  </a>
                </Link>
                <Link href="/contact?form=report#contact-forms">
                  <a>Report an issue</a>
                </Link>
                <Link href="/emergency">
                  <a>Strata emergencies</a>
                </Link>
              </Column>
            </Flex>
          </Nav>
        </Box>
      </Flex>

      <RuledBox>
        <Flex direction={["column", "row"]} justify="space-between">
          <SecondNav>
            <span>© 2017 VJ Ray</span>
            <StyledDivider />
            <Link href="/terms-of-use">
              <a>Terms</a>
            </Link>
            <StyledDivider />
            <Link href="/privacy-policy">
              <a>Privacy</a>
            </Link>
          </SecondNav>
          <SecondNav mt={[0, "auto"]}>
            <Link href="https://patternworks.com.au/">
              <a>Site by Patternworks</a>
            </Link>

            {site === "strata" && (
              <div>
                <StyledDivider />
                <Link href="https://admin.vjraystrata.com.au/keystone/signin">
                  <a>Login</a>
                </Link>
              </div>
            )}
          </SecondNav>
        </Flex>
      </RuledBox>
    </Container>
  </Root>
);

Footer.propsTypes = {
  bg: PropTypes.string,
};

export default Footer;
