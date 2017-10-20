import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import styled from "styled-components";
import { Flex, Box } from "rebass";
import { LargeText, Text, PrimaryButtonText } from "./Texts";
import { ButtonOutline } from "./Buttons";
import Icon from "./Icon";
import icons from "./iconConstants";

const ItemRoot = styled(Flex)`
  &:last-child {
    margin-bottom: 0;
  }
`

const ItemIcon = styled(Icon)`
  @media (min-width: 768px) {
    transform: translateY(-20px);
  }
`

const IconListItem = props => (
  <ItemRoot direction={["column", "row"]} mx={-3} mb={[4, 5]}>
    <Box px={3}>
      <ItemIcon color="brand" size="90" icon={icons[props.item.icon]} />
    </Box>
    <Box px={3}>
      <LargeText
        as="h4"
        color="brand"
        family="displayMedium"
        mb={1}
        children={props.item.headline}
      />
      <Text color="text70">
        {props.item.text}
        {props.item.link && (
          <Link href={props.item.link}>
            <a>Find out more</a>
          </Link>
        )}
      </Text>
      {props.item.buttonUrl && (
        <PrimaryButtonText align="left" color="white">
          <Link href={props.item.buttonUrl}>
            <ButtonOutline
              brandBg
              icon
              color="brand"
              children={props.item.buttonLabel}
            />
          </Link>
        </PrimaryButtonText>
      )}
    </Box>
  </ItemRoot>
)

IconListItem.PropTypes = {
  item.icon: PropTypes.string,
  item.headline: PropTypes.string,
  item.text: PropTypes.string,
  item.link: PropTypes.bool,
  item.buttonUrl: PropTypes.string,
  item.buttonLabel: PropTypes.string,
}

export default IconListItem
