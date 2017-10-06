import styled, {css} from 'styled-components';
import { 
  Button as doe, 
  ButtonOutline as rae, 
  ButtonCircle as me
} from 'rebass';
import { weight, family, lineHeight, letterSpacing } from "./utils";

// Buttons inherit font sizes and weights from 
// wrapped text components.
// 
// Two font-size rules in specific order:
// 1. resets the rebass button font-size.
// 2. sets it to inherit from the Text wrapper.
// 
// If you need to change line-height, use s-c per instance.

const BaseStyles = `
  font-size: initial;
  font-size: inherit;
  font-weight: inherit;
  line-height: 1.75;
  text-transform: inherit;
`;

const ActionIcon = `
  :after {
    content: '►';
    font-size: 55%;
    margin-left: 6px;
    position: relative;
    top: -1px;
  }
`;

// application
const Button = styled(doe)`
  ${BaseStyles}
  ${letterSpacing}
  ${props => props.icon && css`${ActionIcon}`}
`

const ButtonOutline = styled(rae)`
  ${BaseStyles}
  ${letterSpacing}
  ${props => props.icon && css`${ActionIcon}`}
`

const ButtonCircle = styled(me)`
  ${BaseStyles}
  ${letterSpacing}
  ${props => props.icon && css`${ActionIcon}`}
`

// FAIL
// spreadable text styling props.
// these can be overriden per button instance
// via the 4 base utility styles: 
// family, weight, lh & ls
// const Primary = {
//   fontSize: [0, 0, 1],
//   family: "textMedium",
//   lineHeight: "button"
// };

export {
  Button,
  ButtonOutline,
  ButtonCircle
};