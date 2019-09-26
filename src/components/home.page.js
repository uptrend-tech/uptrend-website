/** @jsx jsx */
import React from 'react'
import { jsx, Styled, Box, Flex } from 'theme-ui'
import Img from 'gatsby-image'

import useSiteMetadata from '../hooks/use-site-metadata'
import whatWeDoFullProductDelivery from '../images/what-we-do--full-product-delivery.svg'
import whatWeDoPrototyping from '../images/what-we-do--prototyping.svg'
import logoActivision from '../images/logo--activision.svg'
import logoBlackberry from '../images/logo--blackberry.svg'
import logoCarecar from '../images/logo--carecar.svg'
import logoPg from '../images/logo--pg.svg'
import ourProcessDeliver from '../images/our-process--deliver.svg'
import ourProcessDesign from '../images/our-process--design.svg'
import ourProcessDevelop from '../images/our-process--develop.svg'
import ourProcessDiscover from '../images/our-process--discover.svg'
import Button from './button'

const RawHtml = ({ data }) => {
  const site = useSiteMetadata()

  // return 'content'

  return (
    <>
      {/*<!-- Removed the <article> -->*/}
      {/*<!-- It is redundant, adds no value -->*/}
      {/*<!-- If poorly scoped, can create noise -->*/}
      <Box sx={{ variant: 'styles.contain' }}>
        <Box sx={{ variant: 'styles.gridContainer', mt: 78 }}>
          <Box sx={{ gridArea: `1 / 1 / 2 / 7` }}>
            <Styled.h1>{site.headline}</Styled.h1>
            <Button sx={{ variant: 'buttons.primary' }}>
              Estimate Project
            </Button>
          </Box>
          <Box sx={{ gridArea: `1 / 6 / 2 / 13` }}>
            <Img
              fluid={data.heroImage.childImageSharp.fluid}
              alt="A phone showing a Gillette website on it's screen and a laptop showing CareCar web app on it's screen"
            />
          </Box>
        </Box>
      </Box>

      <Box
        sx={{
          variant: 'styles.contain',
        }}
      >
        <Box sx={{ variant: 'styles.weveBuiltSolutionsFor' }}>
          <Styled.hr sx={{}} />
          <Styled.h3
            sx={{ gridArea: `2 / 2 / 3 / 4`, m: 0 }}
          >{`We've Built Solutions For`}</Styled.h3>
          <Flex sx={{ variant: 'styles.weveBuiltSolutionsForLogo' }}>
            <img src={logoPg} />
          </Flex>
          <Flex sx={{ variant: 'styles.weveBuiltSolutionsForLogo' }}>
            <img src={logoBlackberry} />
          </Flex>
          <Flex sx={{ variant: 'styles.weveBuiltSolutionsForLogo' }}>
            <img src={logoCarecar} />
          </Flex>
          <Flex sx={{ variant: 'styles.weveBuiltSolutionsForLogo' }}>
            <img src={logoActivision} />
          </Flex>
        </Box>
      </Box>

      {/*<!-- Not sure <section> adds value here -->*/}
      {/*<!-- Leaving as it does not add SR noise -->*/}
      <section>
        <Box sx={{ variant: 'styles.lightSection' }}>
          <Box sx={{ variant: 'styles.contain', pb: 112 }}>
            <Box sx={{ variant: 'styles.gridContainer' }}>
              <Styled.h2
                sx={{
                  gridArea: `1 / 2 / 2 / 12`,
                  mt: 70,
                  mb: 80,
                  textAlign: 'center',
                }}
              >
                What We Do
              </Styled.h2>

              <Flex
                sx={{
                  variant: 'styles.whatWeDoItem',
                  gridArea: `2 / 1 / span 1 / span 6`,
                }}
              >
                <Flex sx={{ variant: 'styles.whatWeDoItemIcon' }}>
                  <img src={whatWeDoPrototyping} />
                </Flex>
                <Flex sx={{ variant: 'styles.whatWeDoItemCopy' }}>
                  <Styled.h3>Product Prototyping</Styled.h3>
                  <Styled.p>
                    Sometimes you need a working example to prove an idea can
                    actually work, or get a product in front of users. We can
                    help you prototype quickly, without the time and expense of
                    production-grade software.
                  </Styled.p>
                  <Styled.hr />
                  <Styled.ul>
                    <Styled.li>
                      <Styled.p>
                        Quickly develop functional proof of concept to validate
                        an idea
                      </Styled.p>
                    </Styled.li>
                    <Styled.li>
                      <Styled.p>Start testing your product sooner</Styled.p>
                    </Styled.li>
                  </Styled.ul>
                </Flex>
              </Flex>

              <Flex
                sx={{
                  variant: 'styles.whatWeDoItem',
                  gridArea: `2 / 7 / span 1 / span 6`,
                }}
              >
                <Flex sx={{ variant: 'styles.whatWeDoItemIcon' }}>
                  <img src={whatWeDoFullProductDelivery} />
                </Flex>
                <Flex sx={{ variant: 'styles.whatWeDoItemCopy' }}>
                  <Styled.h3>Full Product Delivery</Styled.h3>
                  <Styled.p>
                    By understanding your needs, designing deliberately, and
                    communicating openly through the whole process, we are able
                    to deliver products your users will love.
                  </Styled.p>
                  <Styled.hr />
                  <Styled.ul>
                    <Styled.li>
                      <Styled.p>
                        Turn your need or idea into production-grate software
                      </Styled.p>
                    </Styled.li>
                    <Styled.li>
                      <Styled.p>
                        We’ll help you maintain and evolve your product
                      </Styled.p>
                    </Styled.li>
                  </Styled.ul>
                </Flex>
              </Flex>
            </Box>
          </Box>
        </Box>
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
          <Box sx={{ variant: 'styles.contain', pb: 112 }}>
            <Box sx={{ variant: 'styles.gridContainer' }}>
              <Styled.h2>Our Work</Styled.h2>

              <Styled.ul>
                <Styled.li>
                  <section>
                    <header>
                      <div>+header-image+</div>
                      <Styled.h3>CareCar</Styled.h3>
                    </header>
                    <Styled.p sx={{ variant: 'text.tightDim' }}>
                      CareCar provides non-emergency medical transportation
                      services to health plans and their members using a network
                      of certified drivers. When getting started they needed a
                      software platform to facilitate their core business.
                      Uptrend helped build an initial prototype, which CareCar
                      used to find their first customers and secure funding.
                    </Styled.p>
                    <Styled.h4>Services Provided:</Styled.h4>
                    <Styled.p>
                      Product Design | UX Design | UI Design | System Design |
                      Software Development | Software Support | Infrastructure
                      Management
                    </Styled.p>
                  </section>
                </Styled.li>
                <Styled.li>
                  <section>
                    <header>
                      <div>+header-image+</div>
                      <Styled.h3>Tunelinks</Styled.h3>
                    </header>
                    <Styled.p sx={{ variant: 'text.tightDim' }}>
                      Tunelinks is an online distribution platform for streaming
                      and downloading new Hip-Hop and R&B music. They needed a
                      system for standardizing music that arrived in a number of
                      different formats and serving it to thousands of users at
                      once. Uptrend designed and built this system, allowing
                      Tunelinks to keep costs low while serving music to over
                      100k users a month.
                    </Styled.p>
                    <Styled.h4>Services Provided:</Styled.h4>
                    <Styled.p>
                      System Design | Software Development | Software Support |
                      Infrastructure Management
                    </Styled.p>
                  </section>
                </Styled.li>
              </Styled.ul>
            </Box>
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
