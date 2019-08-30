/** @jsx jsx */
import { Box, Container, Flex, jsx, Styled } from 'theme-ui'
// import { useMediaQuery } from "react-responsive"
import useSiteMetadata from '../hooks/use-site-metadata'
import Button from './button'

const Hero = () => {
  // const isBigScreen = useMediaQuery({ minWidth: `1100px` })
  const site = useSiteMetadata()

  return (
    <div>
      <Container as="section" data-name="hero" sx={{ my: [5, 6], mb: [6, 7] }}>
        <Flex sx={{ justifyContent: `space-between` }}>
          <Box>
            <Box sx={{ maxWidth: `625px` }}>
              <Styled.h1>{site.headline}</Styled.h1>
              <Box sx={{ mt: 5 }}>
                <Button sx={{ variant: 'buttons.primary' }}>
                  Estimate Project
                </Button>
              </Box>
            </Box>
          </Box>
        </Flex>
      </Container>
    </div>
  )
}

export default Hero
