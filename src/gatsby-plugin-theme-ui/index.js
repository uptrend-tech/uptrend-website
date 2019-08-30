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
    body: "system-ui, sans-serif",
    heading: "system-ui, sans-serif",
    monospace: "Menlo, monospace",
  },
  fontWeights: {
    body: 400,
    heading: 700,
    bold: 700,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125,
  },
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 72],
  buttons: {
    primary: {
      color: white,
      bg: loudPurple,
    },
    secondary: {
      color: loudPurple,
      bg: null,
    },
  },

  // TODO: setup proper variants like https://theme-ui.com/guides/variants
  text: {
    h2small: {
      // width: 243px;
      // height: 42px;
      // font-family: Comfortaa;
      fontSize: 6,
      fontWeight: "bold",
      fontStyle: "normal",
      fontStretch: "normal",
      lineHeight: 1.31,
      letterSpacing: "0.04px",
      color: "text",
    },
  },
}