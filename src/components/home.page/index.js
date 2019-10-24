/** @jsx jsx */
import React from 'react'
import { jsx, Box } from 'theme-ui'

import Hero from './hero'
import ClientShoutout from './client-shoutout'
import WhatWeDo from './what-we-do'
import OurProcess from './our-process'
import OurWork from './our-work'

const RawHtml = ({ data }) => {
  return (
    <>
      <Hero data={data} />
      <ClientShoutout />

      {/*<!-- Not sure <section> adds value here -->*/}
      {/*<!-- Leaving as it does not add SR noise -->*/}
      <section>
        <WhatWeDo />
      </section>

      <section>
        <OurProcess />
      </section>

      <section>
        <OurWork data={data} />
      </section>

      <section>
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
      </section>
    </>
  )
}

export default RawHtml
