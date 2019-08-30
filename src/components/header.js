/** @jsx jsx */
import { Container, Header as ThemeHeader, jsx, Flex, Box } from "theme-ui"
import Logo from "../icons/logo"

const Header = () => {
  return (
    <ThemeHeader>
      <Container sx={{ py: 24 }}>
        <Flex
          sx={{
            alignItems: `center`,
            justifyContent: `space-between`,
            flexDirection: [`column`, `row`],
          }}
        >
          <Flex>
            <Logo sx={{ height: 48 }} />
          </Flex>
          {/* TODO add nav links */}
          <Flex sx={{ mt: [4, 0], alignItems: `center`, display: "none" }}>
            <Box sx={{ color: `dark` }}>Home</Box>
          </Flex>
        </Flex>
      </Container>
    </ThemeHeader>
  )
}

export default Header
