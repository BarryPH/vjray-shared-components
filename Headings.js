import styled, { css } from 'styled-components'
import Rebass from 'rebass'
import { weight, family } from './type'
import theme from '../theme-new'

// Method:
// -------
// 1. Import custom type prop variables and assign base component styles.
// 2. Then wrap this root component with any base responsive styles, and apply base Rebass props.

// 1.
const HeadingRoot = styled(Rebass.Heading)`
  ${weight}
  ${family}
  line-height: 1.15;
`

// 2.
const Heading = props =>
  <HeadingRoot
    fontSize={[4, 4, 5, 6]}
    mb={3}
    {...props}
  />

export {
  Heading
}