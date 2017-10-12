import PropTypes from 'prop-types';
import styled, { css } from 'styled-components'
import { Box } from 'rebass';
import BlockWrapper from './BlockWrapper'
import { LargeText } from './Texts'
import { Display, Heading, Subheading } from './Headings'


const StyledBox = styled(Box)`
  
  ${props => props.textCenter && css`
    text-align: center;
  `}
`;

const HGroup = props => (
  <StyledBox 
    width={props.width} 
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
    {props.children}
  </StyledBox>
);

HGroup.propTypes = {
  textCenter: PropTypes.bool,
  width: PropTypes.string,
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
}

HGroup.defaultProps = {
  textCenter: false,
  subheadColor: "text",
  headingColor: "text",
  titleColor: "text",
  titleFamily: "displayRegular",
  largeTextColor: "text70",
  textIsLast: false,
};

export default HGroup;
