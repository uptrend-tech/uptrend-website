/** @jsx jsx */
import { Header as ThemeHeader, jsx, Flex, Box } from 'theme-ui'
import Logo from '../icons/logo'

const Header = () => {
  return (
    <ThemeHeader>
      <Flex
        sx={{
          maxWidth: '1280px',
          mx: 'auto',
          my: '24px',
          width: '100%',
          justifyContent: 'space-between',
        }}
      >
        <Box>
          {/*<!-- Removed the title attribute -->*/}
          {/*<!-- It is an anti-pattern -->*/}
          <Logo sx={{ height: 48 }} />
        </Box>

        <Box>
          {/*<!-- Removed the aria-label -->*/}
          {/*<!-- Its position implies it is primary -->*/}
          {/*<!-- Its presence adds noise for SR users -->*/}
          <nav className="primary-nav">
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">What We Do</a>
              </li>
              <li>
                <a href="#">Our Work</a>
              </li>
              <li>
                <a href="#">Contact Us</a>
              </li>
            </ul>
          </nav>
        </Box>
      </Flex>
    </ThemeHeader>
  )
}

export default Header
