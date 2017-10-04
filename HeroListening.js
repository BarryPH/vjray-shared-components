import Link from 'next/link'
import React from 'react';
import styled from 'styled-components'
import { Box, Container, Arrow } from 'rebass'
import hoc from './hoc'
import theme from '../theme'

import { Text, LargeText } from './Text'
import { Display } from './Headline'
import {
  HeroBox,
  HeroContainer,
  HeroFlex,
  HeroTitleBox,
} from './Hero'
import { ButtonOutline } from "./Buttons";
import Image from "./Image";


const StyledHeroBox = styled(HeroBox)`
  background-color: ${theme.colors.beige};

  @media (max-width: 512px) {
    &:after {
      background-image:
      linear-gradient(
        to right,
        rgba(223, 212, 184, 0.5),
        rgba(223, 212, 184, 0.1) 100%
      );
    }
  }
`
const StyledButton = styled(ButtonOutline)`
  border-radius: 99999px;

  span {
    border-top: 0.3125em solid transparent;
    border-bottom: 0.3125em solid transparent;
    border-left: 0.4375em solid;
    border-right: 0;
  }
`;

const HeroListening = props => (
  <StyledHeroBox>
    <Image
      listening
      img="http://res.cloudinary.com/pw-img-cdn/image/upload/v1503542523/home-hero_eq4eot.jpg"
    />
    <HeroContainer maxWidth="1140px">
      <HeroFlex>
        <HeroTitleBox width={[5 / 10, 5 / 12, 6 / 12]} mb={[3, 4]} ml={4}>
          <Display
            mb={2}
            dangerouslySetInnerHTML={{ __html: props.headline }}
          />

          {props.subheadline && <LargeText>{props.subheadline}</LargeText>}

          {props.button && (
            <Link href="">
              <a>
                <Text font="textMedium" mt={3}>
                  <ButtonOutline icon color="brand" px={3}>
                    Watch Video
                    
                  </ButtonOutline>
                </Text>
              </a>
            </Link>
          )}
        </HeroTitleBox>
      </HeroFlex>
    </HeroContainer>

    {props.children}
  </StyledHeroBox>
);

export default HeroListening
