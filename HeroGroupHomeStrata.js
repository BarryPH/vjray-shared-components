import React from "react"
import Link from "next/link"
import styled from "styled-components"
import { Banner } from "rebass"
import { HeroContainer } from "./Hero"
import Block from "./Block"
import HGroup from "./HGroup"
import { PrimaryButtonText } from "./Texts"
import { Button } from "./Buttons"

const StyledBanner = styled(Banner)`
  height: 70vh;
  position: relative;

  &:after {
    background-color: rgba(255, 255, 255, 0.15);
    background-image: linear-gradient(
      to bottom,
      rgba(18, 150, 222, 1),
      rgba(18, 150, 222, 0.4) 100%
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

const HeroStrata = props => (
  <StyledBanner
    is="section"
    py={[64, 64, 128, 128]}
    backgroundImage="https://res.cloudinary.com/pw-img-cdn/image/upload/v1508816606/hero-cronulla-bw_blem85.jpg"
  >
    <HeroContainer textCenter maxWidth="42em" w={1} style={{ zIndex: 1 }}>
      <Block
        noTopPadding
        noBottomPadding
        crownWidth="42em"
        subhead={props.subhead}
        subheadColor="white"
        title={props.title}
        titleColor="white"
        text={props.text}
        textFamily="textLight"
        textColor="white"
      >
        <Link href="https://vjraystrata.com.au">
          <a>
            <PrimaryButtonText center>
              <Button bg="white" color="brand" px={3} icon>
                our Strata website
              </Button>
            </PrimaryButtonText>
          </a>
        </Link>
      </Block>
    </HeroContainer>
  </StyledBanner>
);

export default HeroStrata
