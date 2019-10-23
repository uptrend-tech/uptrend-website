/** @jsx jsx */
import React from 'react'
import { jsx, Styled, Box } from 'theme-ui'
import Img from 'gatsby-image'

import Hero from './hero'
import ClientShoutout from './client-shoutout'
import WhatWeDo from './what-we-do'
import OurProcess from './our-process'

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

      {/*<!-- Not sure <section> adds value here -->*/}
      {/*<!-- Leaving as it does not add SR noise -->*/}
      <section>
        <Box sx={{ variant: 'styles.lightSection' }}>
          <Box sx={{ variant: 'styles.ourWork' }}>
            <Styled.h2>Our Work</Styled.h2>
            <Styled.ul sx={{ variant: 'styles.ourWorkExamples' }}>
              <Styled.li>
                <Img
                  fluid={data.ourWorkCareCarImage.childImageSharp.fluid}
                  sx={{ borderRadius: 5 }}
                />
                <Styled.h3>CareCar</Styled.h3>
                <Styled.p sx={{ m: 0, variant: 'text.tightDim' }}>
                  CareCar provides non-emergency medical transportation services
                  to health plans and their members using a network of certified
                  drivers. When getting started they needed a software platform
                  to facilitate their core business. Uptrend helped build an
                  initial prototype, which CareCar used to find their first
                  customers and secure funding.
                </Styled.p>
                <Styled.h4>Services Provided:</Styled.h4>
                <Styled.p sx={{ variant: 'styles.ourWorkServicesProvided' }}>
                  Product Design | UX Design | UI Design | System Design |
                  Software Development | Software Support | Infrastructure
                  Management
                </Styled.p>
              </Styled.li>
              <Styled.li sx={{ '&&': { gridColumnStart: 7 } }}>
                <Img
                  fluid={data.ourWorkTunelinksImage.childImageSharp.fluid}
                  sx={{ borderRadius: 5 }}
                />
                <Styled.h3>Tunelinks</Styled.h3>
                <Styled.p sx={{ m: 0, variant: 'text.tightDim' }}>
                  Tunelinks is an online distribution platform for streaming and
                  downloading new Hip-Hop and R&B music. They needed a system
                  for standardizing music that arrived in a number of different
                  formats and serving it to thousands of users at once. Uptrend
                  designed and built this system, allowing Tunelinks to keep
                  costs low while serving music to over 100k users a month.
                </Styled.p>
                <Styled.h4>Services Provided:</Styled.h4>
                <Styled.p sx={{ variant: 'styles.ourWorkServicesProvided' }}>
                  System Design | Software Development | Software Support |
                  Infrastructure Management
                </Styled.p>
              </Styled.li>
            </Styled.ul>
          </Box>
        </Box>
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
