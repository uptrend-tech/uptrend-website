/** @jsx jsx */
import { Footer as ThemeFooter, jsx, Styled, Box } from 'theme-ui'

const Footer = () => (
  <ThemeFooter>
    <Box sx={{ variant: 'styles.container' }}>
      <Styled.h3 sx={{ color: 'soft' }}>Where To Find Us</Styled.h3>

      <Styled.h6>Phone</Styled.h6>
      <Styled.p>xxx-xxx-xxxx</Styled.p>

      <Styled.h6>Location</Styled.h6>
      <Styled.p>100 E San Marcos Blvd</Styled.p>
      <Styled.p>Suite #430</Styled.p>
      <Styled.p>San Marcos, CA 92069</Styled.p>
    </Box>
  </ThemeFooter>
)

export default Footer
