import Link from 'next/link'
import React from 'react';
import styled from 'styled-components'
import { Box, Arrow } from 'rebass'
import theme from '../theme-new'
import {
  HeroBox,
  HeroContainer,
  HeroFlex,
  HeroTitleBox,
} from './Hero'
import { PrimaryButtonText } from "./Texts";
import { ButtonOutline } from "./Buttons";
import VideoModal from './VideoModal';
import HeroBlock from "./HeroBlock";
import HGroup from "./HGroup";


const StyledHeroBox = styled(HeroBox)`
  background-image: linear-gradient(
    to bottom,
    rgba(222, 202, 178, 0.4),
    ${theme.colors.beige} 70%
  );
`;

class HeroHome extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isContentVisible: true,
    }
  }

  render() {
    return (
      <div>
        <VideoModal
          isVisible={!this.state.isContentVisible}
          setContentVisibility={this.setContentVisibility}
          closeModal={() => this.setState({ isContentVisible: true })}
        />
        <HeroBlock
          beigeGradientBg
          img="http://res.cloudinary.com/pw-img-cdn/image/upload/v1507792017/vanessa_waedtl.png"
        >
          <HGroup
            title="The Real Estate team experienced in helping people."
            titleColor="brand"
          >
            <PrimaryButtonText>
              <ButtonOutline 
                icon 
                color="brand" 
                brandBg
                px={3} 
                children="Watch video"
                onClick={() => this.setState({ isContentVisible: false })}
              />
            </PrimaryButtonText>
          </HGroup>
        </HeroBlock>
      </div>
    )
  }
}

export default HeroHome
