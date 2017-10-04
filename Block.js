import styled, {css} from 'styled-components'
import { Box, Container, Border } from 'rebass'
import theme from '../theme-new.js'

const Root = styled(Box)`
  font-family: inherit;

  ${props => props.border && css`
    border-top: 1px solid ${theme.colors.text10};
  `}

  ${props => props.noBottomPadding && css`
    padding-bottom: 0 !important;
  `}
`;

const Block = (props) => (
  <Root
    is='section'
    id={props.id}
    bg={props.bg}
    border={props.border}
    pt={props.pt || [ 4, 4, 5, 5 ]}
    pb={props.pb || [ 4, 4, 5, 5 ]}
    noBottomPadding={props.noBottomPadding}
    style={props.style}
  >
    <Container
      mw={props.mw}
      align={props.align}
    >
      {props.children}
    </Container>
  </Root>
);

export default Block
