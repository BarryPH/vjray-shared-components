import styled, {css} from 'styled-components';
import { 
  Button as _Button, 
  ButtonOutline as _ButtonOutline, 
  ButtonCircle as _ButtonCircle
} from 'rebass';
import {
  weight,
  family,
  lineHeight,
  letterSpacing,
  buttonHover,
  actionIcon
} from "./utils";
import theme from '../theme-new';

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
  line-height: inherit;
  text-transform: inherit;
`;

const brandBg = `:hover { background-color: ${theme.colors.brand}; }`;
const textBg = `:hover { background-color: ${theme.colors.text}; }`;

// application
const Button = styled(_Button)`
  ${BaseStyles}
  ${letterSpacing}
  ${props => props.icon && css`${actionIcon}`}
`

const ButtonOutline = styled(_ButtonOutline)`
  ${BaseStyles}
  ${letterSpacing}
  ${props => props.icon && css`${actionIcon}`}
  ${props => props.brandBg && css`${brandBg}`}
  ${props => props.textBg && css`${textBg}`}
`

const ButtonCircle = styled(_ButtonCircle)`
  ${BaseStyles}
  ${letterSpacing}
  ${props => props.icon && css`${actionIcon}`}
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