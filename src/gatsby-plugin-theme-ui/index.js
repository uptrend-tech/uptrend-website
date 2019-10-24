// text
const white = `#ffffff`
const redHintWhite = `#f9f9f9`
const fogGray = `#9da7b3`

// background
const deepBlue = `#10102a`
const darkBlue = `#05121d`
const grayBlue = `#363648`
const lightRoyalBlue = `#413aef`

// other
const loudPurple = `#706bf6`
const fogPurple = `#d2d0fd`
const palePurple = `#eeedfe`
const darkGreen = `#1c1c1c`
const brownGray = '#979797'

export default {
  breakpoints: [
    '700px',
    '1000px',
    '1200px',
    '1400px',
    // '40em', // 640px
    // '65em', // 1040px
    // '75em', // 1200px
    // '88em', // 1400px
  ],
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
    primaryHover: lightRoyalBlue,
  },
  fonts: {
    body: `"AvenirLTStd", BlinkMacSystemFont, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif`,
    heading: `"ComfortaaV2", "CCComfortaa", BlinkMacSystemFont, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif`,
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
      variant: 'styles.contain',
    },
    Header: {
      bg: 'backgroundLight',
      nav: {
        width: '100%',
        maxWidth: 735,
        height: 48,
        ul: {
          display: 'flex',
          flexDirection: 'row',
          p: 0,
          m: 0,
          width: '100%',
          height: '100%',
          justifyContent: 'space-evenly',
          alignItems: 'center',
          li: {
            listStyle: 'none',
            display: 'inline-block',
            textAlign: 'center',
          },
        },
      },
    },
    Footer: {
      bg: 'backgroundLight',
      pt: 52,
      pb: 57,
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
      color: 'soft',
      fontSize: [6, 6, 7, 8],
      letterSpacing: 0.08,
      lineHeight: 1.3,
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
      fontWeight: 'bold',
      color: 'soft',
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
    h6: {
      variant: 'text.footerDim',
      mb: 2,
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

    contain: {
      mx: 'auto',
      width: '100%',
      maxWidth: 1440,
      px: [20, 40, 80],
      py: 0,
    },
    gridContainer: {
      display: 'grid',
      gridTemplateColumns: `repeat(12, 1fr); `,
      gridColumnGap: '29px',
      gridRowGap: 0,
      mx: 'auto',
    },
    lightSection: {
      // position: 'absolute',
      left: 0,
      width: '100%',
      maxWidth: 'none',
      margin: 0,
      padding: 0,
      bg: 'backgroundLight',
    },

    weveBuiltSolutionsFor: {
      variant: 'styles.gridContainer',
      mb: 80,
      hr: {
        gridArea: `1 / 2 / 2 / 12`,
        mx: 0,
        mt: 38,
        mb: 66,
      },
    },
    weveBuiltSolutionsForLogo: {
      gridArea: `2 / auto / span 1 / span 2`,
      justifyContent: 'center',
    },
  },

  text: {
    dim: {
      color: 'muted',
      fontWeight: 'normal',
    },
    tight: {
      fontSize: 0,
      fontWeight: 800,
      lineHeight: [1.13],
      letterSpacing: [1],
    },
    tightDim: {
      color: 'muted',
      fontWeight: 'normal',
      fontSize: 0,
      lineHeight: 1.25,
      letterSpacing: 0.8,
    },
    footerDim: {
      fontFamily: `body`,
      fontWeight: 'normal',
      fontSize: 1,
      letterSpacing: 0.9,
      lineHeight: 1.1,
      color: 'muted',
      my: 0,
    },
  },
  buttons: {
    primary: {
      color: 'text',
      bg: 'primary',
      // width: 300,
      height: 51,
      fontFamily: 'heading',
      fontSize: 2,
      borderRadius: 5,
      boxShadow: '0 2px 6px 2px rgba(0, 0, 0, 0.56)',
      lineHeight: 1,
      '&:hover': {
        bg: 'primaryHover',
        cursor: 'pointer',
      },
    },
    secondary: {
      color: 'primary',
      bg: null,
    },
  },
}
