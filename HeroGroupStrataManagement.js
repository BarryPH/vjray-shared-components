import React from 'react';
import styled from 'styled-components'
import { Flex, Box } from 'rebass'
import theme from '../theme-new'
import { LargeText } from './Text'
import LineBreak from "./LineBreak";
import { Display, Headline, MobileSubheadline } from './Headline'
import Image from './Image'
import { HeroBox, HeroContainer, HeroFlex, HeroTitleBox } from './Hero'


const StyledHeroBox = styled(HeroBox)`
  background-image: linear-gradient(
    to bottom,
    rgba(222, 202, 178, 0.4),
    ${theme.colors.beige} 70%
  );
`;

const HeroStrataManagement = props => (
  <StyledHeroBox>
    <Image
      listening
      img="http://res.cloudinary.com/pw-img-cdn/image/upload/v1503542523/home-hero_eq4eot.jpg"
    />
    <HeroContainer maxWidth="72em">
      <HeroFlex>
        <HeroTitleBox
          width={[7 / 12, 5 / 12, 4 / 12, 4 / 12]}
          ml={[2, 4]}
          mb={[3, 4]}
        >
          <MobileSubheadline color="brand" children="Contact us" />
          <Display
            color="brand"
            mb={2}
            children="Skip the hassle of Strata Management headline."
          />
          <LargeText
            hideAtMobile
            color="text"
            children="At VJ Ray Strata, we understand how valuable your peace of mind is."
          />
        </HeroTitleBox>
      </HeroFlex>
    </HeroContainer>
  </StyledHeroBox>
);

export default HeroStrataManagement
