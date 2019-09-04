/** @jsx jsx */
import { Header as ThemeHeader, jsx, Flex, Box } from "theme-ui"
import Logo from "../icons/logo"
import GridSection from "./grid-section"

const Header = () => {
  return (
    <ThemeHeader>
      <GridSection name="header">
        <Box sx={{ gridArea: `1 / 1 / 1 / 6` }}>
          <Logo sx={{ height: 48 }} />
        </Box>
        <Box sx={{ gridArea: `1 / 1 / 5 / 12` }}>
          <Flex sx={{ mt: [4, 0], alignItems: `center`, display: "none" }}>
            <Box sx={{ color: `dark` }}>Home</Box>
          </Flex>
        </Box>
      </GridSection>
    </ThemeHeader>
  )
}

export default Header
