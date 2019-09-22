/** @jsx jsx */
import { Link } from 'gatsby'
import { Header as ThemeHeader, jsx, Flex, Box } from 'theme-ui'

import logo from '../images/uptrend-logo.svg'
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
      <Flex
        sx={{
          variant: 'styles.container',
          mx: 'auto',
          my: '24px',
          justifyContent: 'space-between',
        }}
      >
        <Box>
          {/*<!-- Removed the title attribute -->*/}
          {/*<!-- It is an anti-pattern -->*/}
          <Link to="/#top">
            <img src={logo} alt="Uptrend Logo" sx={{ height: 48 }} />
          </Link>
        </Box>

        {/*<!-- Removed the aria-label -->*/}
        {/*<!-- Its position implies it is primary -->*/}
        {/*<!-- Its presence adds noise for SR users -->*/}
        <nav
          className="primary-nav"
          sx={{
            width: '100%',
            maxWidth: 735,
          }}
        >
          <ul
            sx={{
              display: 'flex',
              flexDirection: 'row',
              p: 0,
              m: 0,
              width: '100%',
              height: '100%',
              justifyContent: 'space-evenly',
              alignItems: 'center',
            }}
          >
            <li sx={styles.nav.li}>
              <NavLink to="/#top">Home</NavLink>
            </li>
            <li sx={styles.nav.li}>
              <NavLink href="/#what-we-do">What We Do</NavLink>
            </li>
            <li sx={styles.nav.li}>
              <NavLink href="/#our-work">Our Work</NavLink>
            </li>
            <li sx={styles.nav.li}>
              <NavLink href="/#contact-us">Contact Us</NavLink>
            </li>
          </ul>
        </nav>
      </Flex>
    </ThemeHeader>
  )
}

export default Header
