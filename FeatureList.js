import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import Link from "next/link"
import { Box, Flex, Border } from "rebass"
import { Heading } from "./Headings"
import { SmallText } from "./Texts"
import icons from "./iconConstants"
import Icon from "./Icon"
import { featuresList } from "../constants"


const Cell = styled(Box)`
  text-align: center;

  @media (max-width: 1024px) {
    :not(first-child) {
      margin-top: 1.5rem;
    }
  }`

const Feature = props => (
  <Cell w={[1, 1 / 2, 1 / 2, 1 / 4]} px={3}>
    <Link href={props.item.link}>
      <a>
        <Box w={[1, 11 / 12]} mx="auto" mb={2}>
          <Border borderWidth={props.item.border ? "1px" : "0"} color="brand">
            <Box p={2}>
              <Icon color="brand" size="90" icon={icons[props.item.icon]} />
              <Heading
                center
                color="brand"
                family="displayMedium"
                fontSize={[3, 4]}
                mt={[0, 2]}
                mb={[1, 2]}
              >
                {props.item.headline}
              </Heading>
            </Box>
            <SmallText color="text70" m={3} mt={0}>
              {props.item.lede}
            </SmallText>
          </Border>
        </Box>
      </a>
    </Link>
  </Cell>
)

const FeatureList = props => (
  <Box w={[5 / 6, 5 / 6, 5 / 6, 1]} mx="auto" mt={[2, 2, 3, 4]}>
    <Flex mx={-3} wrap={["wrap", "nowrap"]} justify="center">
      {featuresList.map((item, i) => <Feature border item={item} key={i} />)}
    </Flex>
  </Box>
)

Feature.PropTypes = {
  item: React.PropTypes.shape({
    link: PropTypes.string,
    border: PropTypes.bool,
    icon: PropTypes.string.isRequired,
    headline: PropTypes.string.isRequired,
    lede: PropTypes.string,
  }),
}

Feature.defaultProps = {
  link: " ",
  border: false,
  icon: " ",
  headline: " ",
  lede: " ",
}

export default FeatureList
