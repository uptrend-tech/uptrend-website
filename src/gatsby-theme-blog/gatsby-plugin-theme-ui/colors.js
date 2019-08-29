import merge from "deepmerge"
import defaultThemeColors from "gatsby-theme-blog/src/gatsby-plugin-theme-ui/colors"

/*
 * Want to change your theme colors?
 * Try uncommenting the color overrides below
 * to go from default purple to a blue theme
 */

// text
const white = `#ffffff`
const redHintWhite = `#f9f9f9`
const fogGray = `#9da7b3`

// background
const deepBlue = `#10102a`
const darkBlue = `#05121d`
const grayBlue = `#363648`

// other
const loudPurple = `#706bf6`
const fogPurple = `#d2d0fc`
const palePurple = `#eeedfe`
const darkGreen = `#1c1c1c`

export default merge(defaultThemeColors, {
  text: white,

  background: deepBlue,
  backgroundDark: darkBlue,//
  backgroundLight: grayBlue,//

  primary: loudPurple,
  secondary: fogPurple,

  muted: fogGray,
  pale: palePurple,//
  soft: redHintWhite,//

  inputBackground: darkGreen,//

  heading: grayBlue, //blueGray,

  // modes: {
  //   dark: {
  //     background: blueGray,
  //     primary: lightBlue,
  //     highlight: lightBlue,
  //   },
  // },
})
