/** @jsx jsx */
import React from 'react'
import { jsx, Styled, Box, Flex } from 'theme-ui'
import Img from 'gatsby-image'

// import whatWeDoFullProductDelivery from '@src/images/what-we-do--full-product-delivery.svg'
// import whatWeDoPrototyping from '@src/images/what-we-do--prototyping.svg'
// import logoActivision from '@src/images/logo--activision.svg'
// import logoBlackberry from '@src/images/logo--blackberry.svg'
// import logoCarecar from '@src/images/logo--carecar.svg'
// import logoPg from '@src/images/logo--pg.svg'
import ourProcessDeliver from '@src/images/our-process--deliver.svg'
import ourProcessDesign from '@src/images/our-process--design.svg'
import ourProcessDevelop from '@src/images/our-process--develop.svg'
import ourProcessDiscover from '@src/images/our-process--discover.svg'
// import Button from '@src/components/button'
import Hero from './hero'
import ClientShoutout from './client-shoutout'
import WhatWeDo from './what-we-do'

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

      {/*<!-- Not sure <section> adds value here -->*/}
      {/*<!-- Leaving as it does not add SR noise -->*/}
      <section>
        <Box sx={{ variant: 'styles.contain' }}>
          <Box sx={{ variant: 'styles.ourProcess' }}>
            <Box sx={{ variant: 'styles.ourProcessCopy' }}>
              <Styled.h2 id="our-process">Our Process</Styled.h2>
              <Styled.p>
                Creating intuitive, production-grade software is a major
                undertaking, but our process keeps you involved and up to speed
                as we build the solution that best meets your needs.
              </Styled.p>
            </Box>

            <Styled.ol sx={{ variant: 'styles.ourProcessSteps' }}>
              {[
                {
                  name: '(1) Discover',
                  details: [
                    'Listen to your business needs.',
                    'Investigate the solution space.',
                    'Discuss problems and possibilities.',
                  ],
                  icon: ourProcessDiscover,
                },
                {
                  name: '(2) Design',
                  details: [
                    'Utilize research to drive design.',
                    'Validate decisions.',
                    'Define concrete requirements.',
                  ],
                  icon: ourProcessDesign,
                },
                {
                  name: '(3) Develop',
                  details: [
                    'Prioritize work collaboratively.',
                    'Ask questions.',
                    'Communicate progress.',
                  ],
                  icon: ourProcessDevelop,
                },
                {
                  name: '(4) Deliver',
                  details: [
                    'Acceptance test.',
                    'Incorporate feedback.',
                    'Deploy.',
                  ],
                  icon: ourProcessDeliver,
                },
              ].map(step => (
                <Styled.li
                  key={step.name}
                  sx={{ variant: 'styles.ourProcessStepsItem' }}
                >
                  <Flex>
                    <Box sx={{ flex: 1 }}>
                      <Styled.h3>{step.name}</Styled.h3>
                      <Styled.ul>
                        {step.details.map(text => (
                          <Styled.li key={text}>
                            <Styled.p sx={{ variant: 'text.tight' }}>
                              {text}
                            </Styled.p>
                          </Styled.li>
                        ))}
                      </Styled.ul>
                    </Box>
                    <Flex
                      sx={{
                        alignItems: 'center',
                        justifyContent: 'flex-end',
                        width: 100,
                        pt: '6px',
                      }}
                    >
                      <img src={step.icon} sx={{ height: 100, ml: 36 }} />
                    </Flex>
                  </Flex>
                </Styled.li>
              ))}
            </Styled.ol>
          </Box>
        </Box>
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
