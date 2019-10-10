/** @jsx jsx */
import React from 'react'
import { jsx, Styled, Box, Flex } from 'theme-ui'
import Img from 'gatsby-image'

import useSiteMetadata from '@src/hooks/use-site-metadata'
import Button from '@src/components/button'

const HomePageHero = ({ data }) => {
  const site = useSiteMetadata()

  const stackedAreas = `
    "h1 h1 h1 h1 h1 h1 h1 h1 h1 h1 h1 h1"
    ". img img img img img img img img img img ."
    "btn btn btn btn btn btn btn btn btn btn btn btn"`

  const sideBySideAreas = `
    "h1  h1  h1  h1  h1 h1 img img img img img img"
    "btn btn btn btn .  .  img img img img img img"`

  return (
    <>
      <Box sx={{ variant: 'styles.contain' }}>
        <Box
          sx={{
            variant: 'styles.gridContainer',
            gridTemplateAreas: [stackedAreas, sideBySideAreas],
            mt: [40, 40, 78],
          }}
        >
          <Styled.h1
            sx={{
              gridArea: 'h1',
              mt: 0,
              mb: 0,
            }}
          >
            {site.headline}
          </Styled.h1>

          <Box
            sx={{
              gridArea: 'img',
              alignSelf: 'center',
              mt: [32, 0],
              mb: [0, 24],
            }}
          >
            <Img
              fluid={data.heroImage.childImageSharp.fluid}
              alt="A phone showing a Gillette website on it's screen and a laptop showing CareCar web app on it's screen"
            />
          </Box>

          <Button sx={{ variant: 'buttons.primary', gridArea: 'btn', mt: 36 }}>
            Estimate Project
          </Button>
        </Box>
      </Box>
    </>
  )
}

export default HomePageHero
