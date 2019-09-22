/** @jsx jsx */
import React from 'react'
import { Global } from '@emotion/core'
import {
  Main,
  Layout as ThemeLayout,
  Container,
  jsx,
  css,
  Box,
  Flex,
} from 'theme-ui'
import 'typeface-comfortaa'
import '../fonts/avenir-lt-std.css'

// import SEO from './seo'
import Header from './header'
import Footer from './footer'

import GridSection from './grid-section'

const Layout = ({ children }) => {
  const headingStyles = {}

  return (
    <ThemeLayout>
      <Global
        styles={css({
          '*': {
            boxSizing: `inherit`,
          },
          body: {
            margin: 0,
            padding: 0,
            boxSizing: `border-box`,
            textRendering: `optimizeLegibility`,
            fontSize: `18px`,
            WebkitFontSmoothing: `antialiased`,
            MozOsxFontSmoothing: `grayscale`,
            color: `text`,
            backgroundColor: `background`,
            fontFamily: `body`,
            lineHeight: `body`,
            fontWeight: `body`,
          },
          '::selection': {
            backgroundColor: `text`,
            color: `background`,
          },
          '#___gatsby': {
            position: `relative`,
            overflowX: `hidden`,
          },
          ...headingStyles,
        })}
      />
      <Header />
      <Main>
        <Container>{children}</Container>
      </Main>
      <Footer />
    </ThemeLayout>
  )
}

export default Layout
