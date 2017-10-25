import React from "react"
import PropTypes from "prop-types"
import styled, { css } from "styled-components"
import { Box, Flex, Relative, Absolute } from "rebass"
import FlexEmbed from "./FlexEmbed"
import { Subheading } from "./Headings"
import { LargeText } from "./Texts"

const StyledFlex = styled(Flex)`
  height: 100%;
`

const StyledBox = styled(Box)`
  ${props => props.textRight && css`text-align: right;`}
`

const TestimonialSlide = props => (
  <FlexEmbed ratio="1/2">
    <img src={props.src} />
    <Absolute top bottom right left>
      <StyledFlex 
        align="flex-end" 
        justify={props.textRight && "flex-end" }
      >
        <StyledBox 
          w={[1, 1, 1 / 2]} 
          p={4}
          textRight={props.textRight}
        >
          <Subheading color="white" >{props.subheading}</Subheading>
          <LargeText color="white" right={props.textRight}>{props.text}</LargeText>
        </StyledBox>
      </StyledFlex>
    </Absolute>
  </FlexEmbed>
)

TestimonialSlide.PropTypes = {
  src: PropTypes.string.isRequired,
  textRight: PropTypes.bool,
  subheading: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
}

TestimonialSlide.defaultProps = {
  textRight: false
}

export default TestimonialSlide
