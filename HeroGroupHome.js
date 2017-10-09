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
import Image from "./Image";
import { Text, LargeText } from "./Text";
import { Display } from "./Headline";
import { ButtonOutline } from "./Buttons";
import VideoModal from './VideoModal';


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
      <StyledHeroBox>
        <VideoModal
          isVisible={!this.state.isContentVisible}
          setContentVisibility={this.setContentVisibility}
          closeModal={() => this.setState({ isContentVisible: true })}
        />

        <Image contact img='http://res.cloudinary.com/pw-img-cdn/image/upload/v1503618861/hero-contact-_awgf0r.png' />
        <HeroContainer maxWidth="72em">
          <HeroFlex>
            <HeroTitleBox width={[5 / 10, 5 / 12, 6 / 12]} mb={[3, 4]} ml={4}>
              <Display
                mb={2}
                dangerouslySetInnerHTML={{ __html: this.props.headline }}
              />

              {this.props.subheadline && <LargeText>{this.props.subheadline}</LargeText>}

              {this.props.button && (
                <Link href="">
                  <a>
                    <Text font="textMedium" mt={3}>
                      <ButtonOutline icon color="brand" px={3} onClick={() => this.setState({ isContentVisible: false })}>
                        Watch Video
                      </ButtonOutline>
                    </Text>
                  </a>
                </Link>
              )}
            </HeroTitleBox>
          </HeroFlex>
        </HeroContainer>

        {this.props.children}
      </StyledHeroBox>
    )
  }
}

export default HeroHome
