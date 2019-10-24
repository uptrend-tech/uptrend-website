/** @jsx jsx */
import React from 'react'
import { jsx } from 'theme-ui'

const ContactUsSection = ({ data }) => {
  return (
    <>
      <div>
        <h2>Contact Us</h2>
        <div>+contact form+</div>
      </div>
      <section>
        <h2>Our Leaders</h2>
        <ul>
          <li>
            <div>
              <p>Brandon Orther</p>
              <p>Founder & CEO</p>
              <div>+profile image+</div>
            </div>
          </li>
          <li>
            <div>
              <p>Benjamin Nelson-Weiss</p>
              <p>Dev Lead</p>
              <div>+profile image+</div>
            </div>
          </li>
        </ul>
      </section>
    </>
  )
}

export default ContactUsSection
