import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types'

import styled, { css } from 'styled-components';
import { Flex } from 'rebass';
import { FlexEmbed } from './FlexEmbed';
import theme from '../theme';
import Container from './Container2';

const transition = {
  duration: 0.7,
  delay: 0.4,
  type: 'ease-in-out'
};

const Modal = styled.div`
  background-color: #151515;
  bottom: 0;
  content: " ";
  opacity: 0;
  position: fixed;
  top: 0;
  transition:
    opacity 0s,
    visibility 0s,
    z-index 0s;
  left: 0;
  right: 0;
  visibility: hidden;
  z-index: -1;

  ${props => props.isVisible && css`
    opacity: 1;
    transition:
      opacity ${transition.duration}s ${transition.type} ${transition.delay}s,
      visibility 0s linear ${transition.delay}s,
      z-index 0s linear ${transition.delay}s;
    visibility: visible;
    z-index: 15;
  `}
`;

const ModalClose = styled.a`
  --Close-space: 3rem;
  color: #fff;
  content: " ";
  cursor: pointer;
  font-size: 5rem;
  font-family: ${theme.fonts.displayThin};
  line-height: 1;
  position: fixed;
  right: var(--Close-space);
  top: calc( 0.7 * var(--Close-space));
`;

const VideoIframe = styled.iframe`
  height: 100%;
  width: 100%;
`;

class VideoModal extends React.Component {
  componentWillReceiveProps(nextProps) {
    const videoRef = this.video;
    const videoIframe = ReactDOM.findDOMNode(videoRef);
    const videoSrc = nextProps.isVisible
      ? videoRef.props['data-src']
      : '';

    videoIframe.setAttribute('src', videoSrc);
  }

  render() {
    return (
      <Modal isVisible={this.props.isVisible} >
        <ModalClose onClick={this.props.closeModal} href='#'>&times;</ModalClose>
        <Flex align='center' style={{ height: '100vh' }}>
          <Container mw='lg' w='1140px'>
            <FlexEmbed ratio='9/16'>
              <VideoIframe
                ref={(ref) => this.video = ref}
                data-src='https://www.youtube.com/embed/1QJBUBemFKI?autoplay=1'
                frameborder='0'
                allowtransparency='true'
                webkitallowfullscreen=''
                mozallowfullscreen=''
                allowfullscreen=''
              />
            </FlexEmbed>
          </Container>
        </Flex>
      </Modal>
    )
  }
}

VideoModal.propsTypes = {
  isVisible: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
}

export default VideoModal
