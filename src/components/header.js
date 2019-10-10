/** @jsx jsx */
import { Link } from 'gatsby'
import { Header as ThemeHeader, jsx, Flex, Box } from 'theme-ui'

import logo from '../images/uptrend-logo.svg'
import logoDiamond from '../images/uptrend-logo--diamond.svg'
import NavLink from '../components/nav-link'

const styles = {
  nav: {
    li: {
      listStyle: 'none',
      display: 'inline-block',
      textAlign: 'center',
    },
  },
}

const Header = () => {
  return (
    <ThemeHeader>
      <Box
        sx={{
          variant: 'styles.contain',
        }}
      >
        <Flex
          sx={{
            justifyContent: ['center', 'space-between'],
            my: ['8px', '16px', 24],
          }}
        >
          <img
            src={logoDiamond}
            alt="Uptrend Logomark"
            sx={{ height: 48, display: ['block', 'none'] }}
          />

          <Box sx={{ display: ['none', 'block'] }}>
            {/*<!-- Removed the title attribute -->*/}
            {/*<!-- It is an anti-pattern -->*/}
            <Link to="/#top">
              <img
                src={logo}
                alt="Uptrend Logo"
                sx={{ height: 48, display: 'block' }}
              />
            </Link>
          </Box>

          {/*<!-- Removed the aria-label -->*/}
          {/*<!-- Its position implies it is primary -->*/}
          {/*<!-- Its presence adds noise for SR users -->*/}
          <nav sx={{ display: ['none', 'none', 'block'] }}>
            <ul>
              <li>
                <NavLink to="/#top">Home</NavLink>
              </li>
              <li>
                <NavLink href="/#what-we-do">What We Do</NavLink>
              </li>
              <li>
                <NavLink href="/#our-work">Our Work</NavLink>
              </li>
              <li>
                <NavLink href="/#contact-us">Contact Us</NavLink>
              </li>
            </ul>
          </nav>
        </Flex>
      </Box>
    </ThemeHeader>
  )
}

export default Header
