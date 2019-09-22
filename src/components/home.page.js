/** @jsx jsx */
import React from 'react'
import { jsx, Styled, Box } from 'theme-ui'
import Img from 'gatsby-image'

import useSiteMetadata from '../hooks/use-site-metadata'
import Button from './button'

const RawHtml = ({ data }) => {
  const site = useSiteMetadata()

  // return 'content'

  return (
    <>
      {/*<!-- Removed the <article> -->*/}
      {/*<!-- It is redundant, adds no value -->*/}
      {/*<!-- If poorly scoped, can create noise -->*/}
      <Box
        className="hero"
        // as="section"
        data-name={name}
        // data-name="hero"
        sx={{
          display: 'grid',
          gridTemplateColumns: `repeat(12, 1fr); `,
          gridColumnGap: '29px',
          gridRowGap: 0,
          maxWidth: '1280px',
          mx: 'auto',
        }}
      >
        <Box sx={{ gridArea: `1 / 1 / 2 / 7` }} className="hero-content">
          <Styled.h1>{site.headline}</Styled.h1>
          <Button sx={{ variant: 'buttons.primary' }}>Estimate Project</Button>
        </Box>
        <Box sx={{ gridArea: `1 / 6 / 2 / 13` }} className="hero-image">
          <Img
            fluid={data.heroImage.childImageSharp.fluid}
            alt="A phone showing a Gillette website on it's screen and a laptop showing CareCar web app on it's screen"
          />
        </Box>
      </Box>
      <Styled.hr />
      <section>
        <Styled.h3>{`We've Built Solutions For`}</Styled.h3>
        <div className="built-for-logos">
          <div className="built-for-logo-image">P&G</div>
          <div className="built-for-logo-image">BlackBerry</div>
          <div className="built-for-logo-image">CareCar</div>
          <div className="built-for-logo-image">Activision</div>
        </div>
      </section>
      {/*<!-- Not sure <section> adds value here -->*/}
      {/*<!-- Leaving as it does not add SR noise -->*/}
      <section>
        <Styled.h2>What We Do</Styled.h2>

        <section>
          <div>+icon+</div>
          <Styled.h3>Product Prototyping</Styled.h3>
          <Styled.p>
            Sometimes you need a working example to prove an idea can actually
            work, or get a product in front of users. We can help you prototype
            quickly, without the time and expense of production-grade software.
          </Styled.p>
          <Styled.hr />
          <Styled.ul>
            <Styled.li>
              <Styled.p sx={{ variant: 'text.dim' }}>
                Quickly develop functional proof of concept to validate an idea
              </Styled.p>
            </Styled.li>
            <Styled.li>
              <Styled.p sx={{ variant: 'text.dim' }}>
                Start testing your product sooner
              </Styled.p>
            </Styled.li>
          </Styled.ul>
        </section>

        <section>
          <div>+icon+</div>
          <Styled.h3>Full Product Delivery</Styled.h3>
          <Styled.p>
            By understanding your needs, designing deliberately, and
            communicating openly through the whole process, we are able to
            deliver products your users will love.
          </Styled.p>
          <Styled.hr />
          <ul>
            <li>
              <Styled.p sx={{ variant: 'text.dim' }}>
                Turn your need or idea into production-grate software
              </Styled.p>
            </li>
            <li>
              <Styled.p sx={{ variant: 'text.dim' }}>
                We’ll help you maintain and evolve your product
              </Styled.p>
            </li>
          </ul>
        </section>
      </section>
      {/*<!-- Not sure <section> adds value here -->*/}
      {/*<!-- Leaving as it does not add SR noise -->*/}
      <section>
        <Styled.h2>Our Process</Styled.h2>
        <Styled.p>
          Creating intuitive, production-prade software is a major undertaking,
          but our process keeps you involved and up to speed as we build the
          solution that best meets your needs.
        </Styled.p>

        <Styled.ol>
          {[
            {
              name: '(1) Discover',
              details: [
                'Listen to your business needs.',
                'Investigate the solution space.',
                'Discuss problems and possibilities.',
              ],
            },
            {
              name: '(2) Design',
              details: [
                'Utilize research to drive design.',
                'Validate decisions.',
                'Define concrete requirements.',
              ],
            },
            {
              name: '(3) Develop',
              details: [
                'Prioritize work collaboratively.',
                'Ask questions.',
                'Communicate progress.',
              ],
            },
            {
              name: '(4) Deliver',
              details: ['Acceptance test.', 'Incorporate feedback.', 'Deploy.'],
            },
          ].map(step => (
            <Styled.li key={step.name}>
              <Styled.h3>{step.name}</Styled.h3>
              <Styled.ul>
                {step.details.map(text => (
                  <Styled.li key={text}>
                    <Styled.p sx={{ variant: 'text.tight' }}>{text}</Styled.p>
                  </Styled.li>
                ))}
              </Styled.ul>

              <div>+icon+</div>
            </Styled.li>
          ))}
        </Styled.ol>
      </section>
      {/*<!-- Not sure <section> adds value here -->*/}
      {/*<!-- Leaving as it does not add SR noise -->*/}
      <section>
        <Styled.h2>Our Work</Styled.h2>

        <Styled.ul>
          <Styled.li>
            <section>
              <header>
                <div>+header-image+</div>
                <Styled.h3>CareCar</Styled.h3>
              </header>
              <Styled.p sx={{ variant: 'text.tightDim' }}>
                CareCar provides non-emergency medical transportation services
                to health plans and their members using a network of certified
                drivers. When getting started they needed a software platform to
                facilitate their core business. Uptrend helped build an initial
                prototype, which CareCar used to find their first customers and
                secure funding.
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
                Tunelinks is an online distribution platform for streaming and
                downloading new Hip-Hop and R&B music. They needed a system for
                standardizing music that arrived in a number of different
                formats and serving it to thousands of users at once. Uptrend
                designed and built this system, allowing Tunelinks to keep costs
                low while serving music to over 100k users a month.
              </Styled.p>
              <Styled.h4>Services Provided:</Styled.h4>
              <Styled.p>
                System Design | Software Development | Software Support |
                Infrastructure Management
              </Styled.p>
            </section>
          </Styled.li>
        </Styled.ul>
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
