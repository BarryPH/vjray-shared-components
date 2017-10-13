import React from "react";
import PropTypes from "prop-types";
import { Flex, Box } from "rebass";
import Image from "./Image2";
import { HeroBox, HeroContainer, HeroFlex, HeroTitleBox } from "./Hero";

const HeroBlock = props => (
  <HeroBox 
    beigeGradientBg={props.beigeGradientBg}
    bg={props.bg}
  >
    <Image
      img={props.img}
    />
    <HeroContainer maxWidth={props.maxWidth}>
      <HeroFlex>
        <HeroTitleBox
          width={[7/12, 5/12]}
          ml={[2, 4]}
          mb={[3, 4]}
        >
          {props.children}
        </HeroTitleBox>
      </HeroFlex>
    </HeroContainer>
  </HeroBox>
);

HeroBlock.propTypes = {
  beigeGradientBg: PropTypes.bool,
  bg: PropTypes.string,
  img: PropTypes.string,
  maxWidth: PropTypes.string
}

HeroBlock.defaultProps = {
  beigeGradientBg: false,
  maxWidth: "72em"
}

export default HeroBlock;
