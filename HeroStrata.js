import React from 'react';
import styled from 'styled-components'
import { Flex, Box, ButtonCircle, Arrow } from 'rebass'
// import theme from '../theme-new'
import { HeroBox, HeroContainer, HeroFlex, HeroTitleBox } from './Hero'
import { Text, LargeText } from './Texts'
import { Display, Subheading } from './Headings'
import LineBreak from './LineBreak'
import RespToggle from './ResponsiveToggle'
import CoverImage from './CoverImage'
import { Button } from './Buttons'


const StyledHeroBox = styled(HeroBox)`
  --Hero-height: 70vh !important;
  --Hero-height-mobile: 70vh !important;
  align-items: initial;
  background-color: #4F90C8;

  &:after {
    background-color: rgba(255, 255, 255, 0.15);
    background-image:
      linear-gradient(
        to bottom,
        rgba(18, 150, 222, 1),
        rgba(18, 150, 222, 0.4) 75%
      );
    background-blend-mode: multiply;
    bottom: 0;
    content: " ";
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
  }
`

const CenterBox = styled(Box)`
  text-align: center;
`

const StyledButton = styled(Button)`
  span {
    border-top: 0.3125em solid transparent;
    border-bottom: 0.3125em solid transparent;
    border-left: 0.4375em solid;
    border-right: 0;
  }
`;

const HeroStrata = props => (
  <StyledHeroBox is="section" py={[4, 4, 5, 5]}>
    <CoverImage
      who
      src="http://res.cloudinary.com/pw-img-cdn/image/upload/v1507095035/hero-cronulla-bw_glru1c.jpg"
    />
    <HeroContainer style={{ zIndex: 1 }}>
      <CenterBox 
        w={[7 / 12, 5 / 6, 6 / 12, 2 / 3]} 
        mx="auto" 
        mb={[4, 5, 6]}
      >

        <Subheading 
          center 
          border 
          color="white" 
          children={props.subhead} 
        />
        <Display
          center
          color="white"
          dangerouslySetInnerHTML={{ __html: props.headline }}
        />
        <Text
          center
          color="white"
          dangerouslySetInnerHTML={{ __html: props.lede }}
        />

        <Text 
          center 
          noUnderline 
          family="textMedium"
          mt={3}
        >
          <StyledButton
            fontSize={[2, 2, 2, 3]}
            bg="white"
            color="brandAlt"
            px={3}
            icon
            href="https://vjraystrata.com.au"
          >
            Visit VJ Ray Strata
          </StyledButton>
        </Text>
        
      </CenterBox>
    </HeroContainer>
  </StyledHeroBox>
);

export default HeroStrata