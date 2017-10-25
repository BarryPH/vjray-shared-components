import React from "react"
import PropTypes from "prop-types"
import styled, { css } from "styled-components"
import { Box } from "rebass"

import Container from "./Container2"
import BlockWrapper from "./BlockWrapper"
import { LargeText } from "./Texts"
import { Display, Heading, Subheading } from "./Headings"

const StyledBox = styled(Box)`
  text-align: left;

  ${props => props.childBoxTextCenter && css`text-align: center;`}
`

const Block = props => (
  <BlockWrapper
    id={props.id}
    bg={props.bg}
    textLeft={props.textLeft}
    textCenter={props.textCenter}
    maxWidth={props.maxWidth}
    border={props.border}
    noTopPadding={props.noTopPadding}
    noBottomPadding={props.noBottomPadding}
  >
    <Container
      maxWidth={props.crownWidth}
      w={1}
      mx="auto"
      px={0}
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
          color={props.titleColor}
          family={props.titleFamily}
          dangerouslySetInnerHTML={{ __html: props.title }}
          mb={props.text ? 2 : 2}
        />
      )}
      {props.text && (
        <LargeText
          color={props.textColor}
          family={props.textFamily}
          mb={props.textIsLast ? 0 : 4}
          children={props.text}
        />
      )}
    </Container>
    {props.children && <StyledBox>{props.children}</StyledBox>}
  </BlockWrapper>
)

Block.propTypes = {
  id: PropTypes.string,
  bg: PropTypes.string,
  border: PropTypes.bool,
  noTopPadding: PropTypes.bool,
  noBottomPadding: PropTypes.bool,
  textCenter: PropTypes.bool,
  textLeft: PropTypes.bool,
  maxWidth: PropTypes.string,
  crownWidth: PropTypes.string,
  childBoxTextCenter: PropTypes.bool,
  subhead: PropTypes.string,
  subheadColor: PropTypes.string,
  heading: PropTypes.string,
  headingColor: PropTypes.string,
  headingFamily: PropTypes.string,
  title: PropTypes.string,
  titleColor: PropTypes.string,
  titleFamily: PropTypes.string,
  text: PropTypes.string,
  textIsLast: PropTypes.bool,
  textColor: PropTypes.string,
  textFamily: PropTypes.string,
  children: PropTypes.element,
}

Block.defaultProps = {
  id: "",
  bg: "",
  textCenter: true,
  textLeft: false,
  border: false,
  noTopPadding: false,
  noBottomPadding: false,
  childBoxTextCenter: false,
  subheadColor: "text",
  headingColor: "text",
  titleColor: "text",
  titleFamily: "displayMedium",
  textColor: "text70",
  textFamily: "textLight",
  textIsLast: false,
}

export default Block
