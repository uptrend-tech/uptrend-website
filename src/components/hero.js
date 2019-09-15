/** @jsx jsx */
// import React from 'react'
// import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import { Box, Flex, jsx, Styled } from 'theme-ui'

import useSiteMetadata from '../hooks/use-site-metadata'
import Button from './button'

export default ({ data }) => {
  const site = useSiteMetadata()

  return (
    <section>
      <Styled.h1>{site.headline}</Styled.h1>

  )
}
