/** @jsx jsx */
import { Box, Flex, jsx, Styled } from 'theme-ui'
// import { useMediaQuery } from "react-responsive"
import useSiteMetadata from '../hooks/use-site-metadata'
import HeroImg from '../assets/images/hero-gillette-carecar-screens@3x.png'
import Button from './button'
import GridSection from './grid-section'

const Hero = () => {
  // const isBigScreen = useMediaQuery({ minWidth: `1100px` })
  const site = useSiteMetadata()

  // <Container as="section" data-name="hero" sx={{ my: [5, 6], mb: [6, 7] }}>
  // </Container>
  return (
    <GridSection name="hero">
      <Box sx={{ gridArea: `1 / 1 / 2 / 7` }}>
        <Styled.h1>{site.headline}</Styled.h1>
        <Box sx={{ mt: 5 }}>
          <Button sx={{ variant: 'buttons.primary' }}>Estimate Project</Button>
        </Box>
      </Box>
      <Box sx={{ gridArea: `1 / 6 / 2 / 13` }}>
        <Flex
          sx={{
            alignItems: `center`,
            justifyContent: `space-between`,
            flexDirection: [`column`, `row`],
          }}
        >
          <Styled.img
            src={HeroImg}
            alt="A phone with Gillette website on screen and a laptop with CareCar website on screen"
            sx={{ width: '100%' }}
          />
        </Flex>
      </Box>
    </GridSection>
  )
}

export default Hero
