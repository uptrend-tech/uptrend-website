import React from "react"
import { Global } from "@emotion/core"
import { Main, css } from "theme-ui"
import "typeface-comfortaa"
import "../fonts/avenir-lt-std.css"

import SEO from "./seo"
import Header from "./header"
import Footer from "./footer"

const Layout = ({ children, className, newsletter }) => {
  const headingStyles = {}

  return (
    <>
      <Global
        styles={css({
          "*": {
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
          "::selection": {
            backgroundColor: `text`,
            color: `background`,
          },
          "#___gatsby": {
            position: `relative`,
            overflowX: `hidden`,
          },
          a: {
            transition: `all 0.3s ease-in-out`,
            textDecoration: `none`,
            outline: `none`,
            "&:focus": {
              boxShadow: `outline`,
            },
          },
          ...headingStyles,
        })}
      />
      {!newsletter && <SEO />}
      {false && <Header />}
      <Main className={className}>{children}</Main>
      {false && <Footer />}
    </>
  )
}

export default Layout
