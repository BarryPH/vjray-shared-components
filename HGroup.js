import React from "react"
import PropTypes from "prop-types"
import styled, { css } from "styled-components"
import { Box } from "rebass"
import { LargeText } from "./Texts"
import { Display, Heading, Subheading } from "./Headings"


const StyledBox = styled(Box)`
  
  ${props => props.textCenter && css`
    text-align: center;
  `}
`

const HGroup = props => (
  <StyledBox
    maxWidth={props.width}
    mx="auto"
  >
    {props.subhead && (
      <Subheading
        color={props.subheadColor}
        children={props.subhead} 
      />
    )}
    {props.heading && (
      <Heading
        color={props.headingColor}
        family={props.headingFamily}
        children={props.heading}
        mb={2}
      />
    )}
    {props.title && (
      <Display
        is={props.titleIs}
        color={props.titleColor}
        family={props.titleFamily}
        dangerouslySetInnerHTML={{ __html: props.title }}
        mb={props.text ? 2 : 2}
      />
    )}
    {props.text && (
      <LargeText
        color={props.textColor}
        mb={props.textIsLast ? 0 : 4}
        children={props.text}
      />
    )}
    {props.children}
  </StyledBox>
)

HGroup.propTypes = {
  textCenter: PropTypes.bool,
  width: PropTypes.string,
  subhead: PropTypes.string,
  subheadColor: PropTypes.string,
  heading: PropTypes.string,
  headingColor: PropTypes.string,
  headingFamily: PropTypes.string,
  titleIs: PropTypes.string,
  title: PropTypes.string,
  titleColor: PropTypes.string,
  titleFamily: PropTypes.string,
  text: PropTypes.string,
  textIsLast: PropTypes.bool,
  textColor: PropTypes.string,
  children: PropTypes.element
}

HGroup.defaultProps = {
  textCenter: false,
  subheadColor: "text",
  headingColor: "text",
  titleIs: "h2",
  titleColor: "text",
  textColor: "text70",
  textIsLast: false,
}

export default HGroup
