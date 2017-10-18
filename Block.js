import PropTypes from 'prop-types';
import Link from 'next/link'
import styled, { css } from 'styled-components'
import { Box } from 'rebass';
import BlockWrapper from './BlockWrapper'
import { LargeText } from './Texts'
import { Display, Heading, Subheading } from './Headings'

const StyledBox = styled(Box)`
  text-align: left;

  ${props => props.childBoxTextCenter && css`
    text-align: center;
  `}
`

// p?
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
    <Box 
      width={props.crownWidth} 
      mx='auto'
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
          mb={3}
        />
      )}
      {props.title && (
        <Display
          color={props.titleColor}
          family={props.titleFamily}
          dangerouslySetInnerHTML={{ __html: props.title }}
          mb={3}
        />
      )}
      {props.text && (
        <LargeText
          color={props.largeTextColor}
          mb={props.textIsLast ? 0 : 4}
          children={props.text}
        />
      )}
    </Box>
    {props.children && (
      <StyledBox>
        {props.children}
      </StyledBox>
    )}
  </BlockWrapper>
);

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
  largeTextColor: PropTypes.string,
  children: PropTypes.element
}

Block.defaultProps = {
  textCenter: true,
  textLeft: false,
  border: false,
  noTopPadding: false,
  noBottomPadding: false,
  childBoxTextCenter: false,
  subheadColor: "text",
  headingColor: "text",
  titleColor: "text",
  titleFamily: "displayRegular",
  largeTextColor: "text70",
  textIsLast: false,
};

export default Block;
