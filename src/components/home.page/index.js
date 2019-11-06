/** @jsx jsx */
import React from 'react'
import { jsx, Box } from 'theme-ui'

import Hero from './hero'
import ClientShoutout from './client-shoutout'
import WhatWeDo from './what-we-do'
import OurProcess from './our-process'
import OurWork from './our-work'
import ContactUsSection from './contact-us'

const RawHtml = ({ data }) => {
  return (
    <>
      <Hero data={data} />
      <ClientShoutout />

      {/*<!-- Not sure <section> adds value here -->*/}
      {/*<!-- Leaving as it does not add SR noise -->*/}
      <section id="what-we-do">
        <WhatWeDo />
      </section>

      <section id="our-process">
        <OurProcess />
      </section>

      <section id="our-work">
        <OurWork data={data} />
      </section>

      <section id="contact-us">
        <ContactUsSection />
      </section>
    </>
  )
}

export default RawHtml
