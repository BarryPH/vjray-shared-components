import styled, { css } from 'styled-components';
import { Container as _Container } from 'rebass';
import theme from '../theme.js';

const Container = styled(_Container)`
  position: relative;

  ${props => props.textCenter && css`
    text-align: center;
  `}

  ${props => props.center && css`
    position: absolute;
    left: 0;
    right: 0;
    margin: auto;
    top: 50%;
    transform: translateY(-50%);
  `}

  ${props => props.mobileBleed && css`
    @media (max-width: 768px) {
      padding-left: 0;
      padding-right: 0;
    }
  `}
`;

// const Container = props =>
//   <Root
//     px={3}
//     mx='auto'
//     {...props}
//   />

export default Container;
