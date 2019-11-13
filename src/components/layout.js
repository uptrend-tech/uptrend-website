/** @jsx jsx */
import React from 'react'
import { Global } from '@emotion/core'
import { Main, Layout as ThemeLayout, jsx, css } from 'theme-ui'
import 'focus-visible' // polyfill for proposed CSS :focus-visible pseudo-selector

import '../fonts/avenir-lt-std.css'
import '../fonts/comfortaa-v2.css'

import SEO from './seo'
import Header from './header'
import Footer from './footer'

const Layout = ({ children }) => {
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
            fontSize: 1,
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
          '.js-focus-visible :focus:not(.focus-visible)': {
            outline: 'none',
          },
          '.js-focus-visible .focus-visible': {
            outline: 'none',
            boxShadow: t => `0 0 0 3px ${t.colors.focus}`, //,
          },
          html: {
            scrollBehavior: 'smooth',
          },
        })}
      />
      <SEO />
      <Header />
      <Main>{children}</Main>
      <Footer />
    </ThemeLayout>
  )
}

export default Layout
