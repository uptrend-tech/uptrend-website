/** @jsx jsx */
import { Link } from 'gatsby'
import { Header as ThemeHeader, jsx, Flex, Box } from 'theme-ui'

import logo from '../images/uptrend-logo.svg'
import logoDiamond from '../images/uptrend-logo--diamond.svg'
import NavLink from '../components/nav-link'

const PageLink = ({ ...props }) => <NavLink {...props} inAppLink={true} />

const Header = () => {
  return (
    <ThemeHeader>
      <Box
        sx={{
          variant: 'styles.contain',
        }}>
        <Flex
          sx={{
            justifyContent: ['center', 'space-between'],
            my: ['8px', '16px', 24],
          }}>
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
                <PageLink href="/#top">Home</PageLink>
              </li>
              <li>
                <PageLink href="/#what-we-do">What We Do</PageLink>
              </li>
              <li>
                <PageLink href="/#our-work">Our Work</PageLink>
              </li>
              <li>
                <PageLink href="/#contact-us">Contact Us</PageLink>
              </li>
            </ul>
          </nav>
        </Flex>
      </Box>
    </ThemeHeader>
  )
}

export default Header
