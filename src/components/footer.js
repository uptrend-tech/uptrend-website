/** @jsx jsx */
import { Footer as ThemeFooter, jsx, Styled, Box } from 'theme-ui'

const Footer = () => (
  <ThemeFooter>
    <Box sx={{ variant: 'styles.contain' }}>
      <Styled.h3 sx={{ color: 'soft', m: 0 }}>Where To Find Us</Styled.h3>

      <Box sx={{ variant: 'styles.gridContainer', my: 30 }}>
        <Box sx={{ gridColumnStart: 1, gridColumnEnd: 3 }}>
          <Styled.h6>Phone:</Styled.h6>
          <Styled.p sx={{ variant: 'text.footerDim' }}>760.652.9242</Styled.p>
        </Box>

        <Box sx={{ gridColumnStart: 3, gridColumnEnd: 13 }}>
          <Styled.h6>Location:</Styled.h6>
          <Styled.p sx={{ variant: 'text.footerDim' }}>
            100 E San Marcos Blvd
            <br />
            San Marcos, CA 92069
          </Styled.p>
        </Box>
      </Box>
      <Styled.hr sx={{ mt: 54, mb: 31 }} />
      <Styled.p
        sx={{
          my: 0,
          color: 'soft',
          fontSize: 0,
          fontWeight: 400,
        }}
      >
        2019, Uptrend Technology
      </Styled.p>
    </Box>
  </ThemeFooter>
)

export default Footer
