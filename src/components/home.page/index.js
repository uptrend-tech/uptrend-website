/** @jsx jsx */
import React from 'react'
import { jsx, Box } from 'theme-ui'

import Hero from './hero'
import ClientShoutout from './client-shoutout'
import WhatWeDo from './what-we-do'
import OurProcess from './our-process'
import OurWork from './our-work'
import ContactUsSection from './contact-us'

const Section = ({ sx = {}, ...props }) => (
  <section sx={{ ...sx, overflow: 'hidden' }} {...props} />
)

const RawHtml = ({ data }) => {
  return (
    <>
      <Hero data={data} />
      <ClientShoutout />

      {/*<!-- Not sure <section> adds value here -->*/}
      {/*<!-- Leaving as it does not add SR noise -->*/}
      <Section id="what-we-do">
        <WhatWeDo />
      </Section>

      <Section id="our-process">
        <OurProcess />
      </Section>

      <Section id="our-work">
        <OurWork data={data} />
      </Section>

      <Section id="contact-us">
        <ContactUsSection />
      </Section>
    </>
  )
}

export default RawHtml
