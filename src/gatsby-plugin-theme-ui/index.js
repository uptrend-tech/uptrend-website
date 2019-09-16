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
const fogPurple = `#d2d0fd`
const palePurple = `#eeedfe`
const darkGreen = `#1c1c1c`

export default {
  colors: {
    text: white,
    background: deepBlue,
    backgroundDark: darkBlue, //
    backgroundLight: grayBlue, //
    primary: loudPurple,
    secondary: fogPurple,
    muted: fogGray,
    pale: palePurple, //
    soft: redHintWhite, //
    inputBackground: darkGreen, //
  },
  fonts: {
    body: `"AvenirLTStd", BlinkMacSystemFont, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif`,
    heading: `"Comfortaa", BlinkMacSystemFont, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif`,
  },
  fontWeights: {
    body: 400,
    heading: 'normal',
    // bold: 700,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125,
  },
  // fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 72],
  fontSizes: [
    /// h6[1] ... h1[5]
    16,
    18,
    20,
    24,
    28,
    32,
    36,
    48,
    60,
  ],
  styles: {
    Container: {
      maxWidth: 1280,
    },
    Header: {
      bg: grayBlue,
    },
    a: {
      color: 'primary',
      '&:hover': {
        color: 'secondary',
      },
    },
    h1: {
      fontSize: '60px', // TODO use fontSizes scale
      fontFamily: `heading`,
      lineHeight: `heading`,
      fontWeight: `heading`,
    },
    navlink: {
      display: 'block',
      color: 'secondary',
      textDecoration: 'none',
      fontSize: 2,
      fontWeight: 500,
      fontFamily: 'body',
      // fontStyle: normal,
      // fontStretch: normal,
      lineHeight: '1px',
      letterSpacing: '1.11px',
      // textAlign: center,
      '&.hover': {
        color: 'primary',
      },
    },
  },

  // TODO: setup proper variants like https://theme-ui.com/guides/variants
  text: {
    h2small: {
      // width: 243px;
      // height: 42px;
      // font-family: Comfortaa;
      fontSize: 6,
      fontWeight: 'bold',
      fontStyle: 'normal',
      fontStretch: 'normal',
      lineHeight: 1.31,
      letterSpacing: '0.04px',
      color: 'text',
    },
  },
  buttons: {
    primary: {
      color: white,
      bg: loudPurple,
      fontFamily: 'heading',
      fontSize: 20,
    },
    secondary: {
      color: loudPurple,
      bg: null,
    },
  },
}
