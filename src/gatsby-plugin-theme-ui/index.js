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
const brownGray = '#979797'

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
    seperator: brownGray,
  },
  fonts: {
    body: `"AvenirLTStd", BlinkMacSystemFont, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif`,
    heading: `"Comfortaa", BlinkMacSystemFont, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif`,
    monospace: 'Menlo, monospace',
  },
  fontSizes: [16, 18, 20, 24, 28, 32, 36, 48, 60],
  fontWeights: {
    body: 500,
    heading: 'normal',
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125,
  },
  letterSpacing: {
    body: 1,
    heading: 0.1,
  },
  styles: {
    Container: {
      maxWidth: 1280,
    },
    Header: {
      bg: 'backgroundLight',
    },
    a: {
      color: 'primary',
      '&:hover': {
        color: 'secondary',
      },
    },
    img: {
      maxWidth: '100%',
      height: 'auto',
    },
    h1: {
      fontFamily: `heading`,
      fontWeight: `heading`,
      fontSize: 8,
      letterSpacing: 0.08,
      lineHeight: 1.1,
    },
    h2: {
      fontFamily: `heading`,
      fontWeight: `heading`,
      fontSize: [6, 7],
      letterSpacing: [0.05, 0.07],
      lineHeight: [1.22, 1.67],
    },
    h3: {
      fontFamily: `heading`,
      fontWeight: `heading`,
      fontSize: 4,
      letterSpacing: 0.5,
      lineHeight: 1.5,
    },
    h4: {
      fontFamily: `body`,
      fontWeight: 400,
      fontSize: 3,
      letterSpacing: 1.2,
      lineHeight: 1.5,
    },
    p: {
      fontFamily: `body`,
      fontWeight: `body`,
      fontSize: 1,
      letterSpacing: 1.13,
      lineHeight: 1.28,
    },
    code: {
      fontFamily: 'monospace',
      fontSize: 1,
    },
    inlineCode: {
      fontFamily: 'monospace',
      color: 'secondary',
      bg: 'muted',
    },
    table: {
      width: '100%',
      my: 4,
      borderCollapse: 'separate',
      borderSpacing: 0,
      [['th', 'td']]: {
        textAlign: 'left',
        py: '4px',
        pr: '4px',
        pl: 0,
        borderColor: 'muted',
        borderBottomStyle: 'solid',
      },
    },
    th: {
      verticalAlign: 'bottom',
      borderBottomWidth: '2px',
    },
    td: {
      verticalAlign: 'top',
      borderBottomWidth: '1px',
    },
    hr: {
      border: 0,
      borderBottom: '1px solid',
      borderColor: 'seperator',
    },
    xray: {
      '*': {
        outline: '1px solid rgba(0, 192, 255, .25)',
      },
    },
    navlink: {
      fontWeight: `body`,
      fontFamily: `body`,
      fontSize: 2,
      display: `block`,
      color: `secondary`,
      textDecoration: 'none',
      lineHeight: 1,
      letterSpacing: 1,
      '&:hover': {
        color: 'primary',
      },
    },
  },

  // TODO: setup proper variants like https://theme-ui.com/guides/variants
  text: {
    dim: {
      color: 'muted',
      fontWeight: 'normal',
    },
    tight: {
      fontSize: 0,
      fontWeight: 900,
      lineHeight: 1.13,
      letterSpacing: 1,
    },
    tightDim: {
      color: 'muted',
      fontWeight: 'normal',
      fontSize: 0,
      lineHeight: 1.25,
      letterSpacing: 0.8,
    },

    // TODO: remove h2small
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
      color: 'text',
      bg: 'primary',
      fontFamily: 'heading',
      fontSize: 20,
      borderRadius: 5,
      boxShadow: '0 2px 6px 2px rgba(0, 0, 0, 0.56)',
    },
    secondary: {
      color: loudPurple,
      bg: null,
    },
  },
}
