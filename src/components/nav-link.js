/** @jsx jsx */
/* eslint jsx-a11y/anchor-has-content: 0 */
import React from 'react'
import { jsx } from 'theme-ui'
import { Link } from 'gatsby'
import isAbsoluteURL from 'is-absolute-url'
// eslint-disable-next-line import/no-extraneous-dependencies
import { navigate } from '@reach/router'

const styles = {
  variant: 'styles.navlink',
}

const NavLink = ({ href, inAppLink, ...props }) => {
  const isExternal = isAbsoluteURL(href || '')
  if (isExternal) {
    return <a {...props} href={href} sx={styles} />
  }

  if (inAppLink) {
    return (
      <a
        {...props}
        href={href}
        sx={styles}
        onClick={() => {
          navigate(href, { replace: true })
        }}
      />
    )
  }

  const to = props.to || href
  return <Link {...props} to={to} sx={styles} activeClassName="active" />
}

export default NavLink
