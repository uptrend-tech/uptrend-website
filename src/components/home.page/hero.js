/** @jsx jsx */
import React from 'react'
import { jsx, Styled, Box } from 'theme-ui'
import Img from 'gatsby-image'
// eslint-disable-next-line import/no-extraneous-dependencies
import { navigate } from '@reach/router'

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
          }}>
          <Styled.h1
            sx={{
              gridArea: 'h1',
              mt: 0,
              mb: 0,
            }}>
            {site.headline}
          </Styled.h1>

          <Box
            sx={{
              gridArea: 'img',
              alignSelf: 'center',
              mt: [32, 0],
              mb: [0, 24],
            }}>
            <Img
              fluid={data.heroImage.childImageSharp.fluid}
              alt="A phone showing a Gillette website on it's screen and a laptop showing CareCar web app on it's screen"
            />
          </Box>

          <Box sx={{ gridArea: 'btn', mt: 36 }}>
            <Button
              sx={{ variant: 'buttons.primary', width: '100%' }}
              onClick={() => {
                navigate('#contact-us')
              }}>
              Contact Us
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  )
}

export default HomePageHero
