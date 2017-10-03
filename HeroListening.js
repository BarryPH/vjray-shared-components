import Link from 'next/link'
import React from 'react';
import styled from 'styled-components'
import { Box } from 'rebass'
import hoc from './hoc'
import theme from '../theme'

import { Text, LargeText } from './Text'
import { Display } from './Headline'
import Button from './Button'

import Image from './Image'
import {
  HeroBox,
  HeroContainer,
  HeroFlex,
  HeroTitleBox,
} from './Hero'


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

const HeroListening = (props) => (
  <StyledHeroBox>
    <Image listening img='http://res.cloudinary.com/pw-img-cdn/image/upload/v1503542523/home-hero_eq4eot.jpg' />
    <HeroContainer mw='lg'>
      <HeroFlex>
        <HeroTitleBox width={[ 5/10, 5/12, 6/12 ]} mb={[ 3, 4 ]}>
          <Display mb={2} dangerouslySetInnerHTML={{ __html: props.headline }} />

          {props.subheadline &&
            <LargeText>{props.subheadline}</LargeText>
          }

          {props.button &&
            <Link href=''>
              <a>
                <Text font='textMedium' mt={3}>
                  <Button icon invert>
                    Watch Video
                  </Button>
                </Text>
              </a>
            </Link>
          }
        </HeroTitleBox>
      </HeroFlex>
    </HeroContainer>

    {props.children}
  </StyledHeroBox>
);

export default HeroListening
