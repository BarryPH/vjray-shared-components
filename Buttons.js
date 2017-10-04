import styled, {css} from 'styled-components';
import { 
  Button as doe, 
  ButtonOutline as rae, 
  ButtonCircle as me
} from 'rebass';
// import { weight, family, lineHeight, letterSpacing } from "./utils";

// this doesn't work despite previously working
// WTF?
// const BaseStyles = {
//   fontFamily: "inherit",
//   fontSize: "inherit",
//   letterSpacing: "inherit",
//   lineHeight: 2
// };
// {...BaseStyles}

// const BaseStyles = {
//   span {
//     border-top: 0.3125em solid transparent;
//     border-bottom: 0.3125em solid transparent;
//     border-left: 0.4375em solid;
//     border-right: 0;
//   }
// }


const Button = styled(doe)`
  font-family: inherit;
  font-size: inherit;
  letter-spacing: inherit;
  line-height: inherit;
  line-height: 1.75;

  ${props => props.icon && css`
    :after {
      content: '►';
      font-size: 55%;
      margin-left: 6px;
      position: relative;
      top: -1px;
    }
  `}
`

const ButtonOutline = styled(rae)`
  font-family: inherit;
  font-size: inherit;
  letter-spacing: inherit;
  line-height: inherit;
  line-height: 1.75;

  ${props => props.icon && css`
    :after {
      content: '►';
      font-size: 55%;
      margin-left: 6px;
      position: relative;
      top: -1px;
    }
  `}
`

const ButtonCircle = styled(me)`
  font-family: inherit;
  font-size: inherit;
  letter-spacing: inherit;
  line-height: inherit;
  line-height: 1.75;

  ${props => props.icon && css`
    :after {
      content: '►';
      font-size: 55%;
      margin-left: 6px;
      position: relative;
      top: -1px;
    }
  `}
`

export {
  Button,
  ButtonOutline,
  ButtonCircle
};