import styled, {css} from 'styled-components'
import { Box } from 'rebass'
import Container from './Container2'
import theme from '../theme-new.js'

const Root = styled(Box)`
  ${props => props.border && css`
    border-top: 1px solid ${theme.colors.text10};
  `}

  ${props => props.noBottomPadding && css`
    padding-bottom: 0 !important;
  `}
`;

// pt={props.pt || [ 4, 4, 5, 5 ]}

const Block = (props) => (
  <Root
    is='section'
    id={props.id}
    bg={props.bg}
    border={props.border}
    pt={props.pt || [ 64, 64, 128, 128 ]}
    pb={props.pb || [ 64, 64, 128, 128 ]}
    noBottomPadding={props.noBottomPadding}
    style={props.style}
  >
    <Container
      maxWidth={props.maxWidth}
      textCenter={props.textCenter}
    >
      {props.children}
    </Container>
  </Root>
);

export default Block
