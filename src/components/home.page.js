/** @jsx jsx */
import React from 'react'
import { jsx, Styled } from 'theme-ui'
import Img from 'gatsby-image'

import useSiteMetadata from '../hooks/use-site-metadata'
import Logo from '../icons/logo'
import Button from './button'

const RawHtml = ({ data }) => {
  const site = useSiteMetadata()

  return (
    <>
      <header className="header">
        {/*<!-- Removed the title attribute -->*/}
        {/*<!-- It is an anti-pattern -->*/}
        <a className="logo" href="#">
          <Logo />
        </a>

        {/*<!-- Removed the aria-label -->*/}
        {/*<!-- Its position implies it is primary -->*/}
        {/*<!-- Its presence adds noise for SR users -->*/}
        <nav className="primary-nav">
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">What We Do</a>
            </li>
            <li>
              <a href="#">Our Work</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
          </ul>
        </nav>
      </header>

      <main>
        {/*<!-- Removed the <article> -->*/}
        {/*<!-- It is redundant, adds no value -->*/}
        {/*<!-- If poorly scoped, can create noise -->*/}
        <div className="hero">
          <div className="hero-content">
            <Styled.h1>{site.headline}</Styled.h1>
            <Button sx={{ variant: 'buttons.primary' }}>
              Estimate Project
            </Button>
          </div>
          <div className="hero-image">
            <Img
              fluid={data.heroImage.childImageSharp.fluid}
              alt="A phone showing a Gillette website on it's screen and a laptop showing CareCar web app on it's screen"
            />
          </div>
        </div>

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
            <Styled.p sx={{ variant: null }}>
              Sometimes you need a working example to prove an idea can actually
              work, or get a product in front of users. We can help you
              prototype quickly, without the time and expense of
              production-grade software.
            </Styled.p>
            <hr />
            <ul>
              <li>
                <Styled.p sx={{ color: 'muted' }}>
                  Quickly develop functional proof of concept to validate an
                  idea
                </Styled.p>
              </li>
              <li>
                <Styled.p sx={{ color: 'muted' }}>
                  Start testing your product sooner
                </Styled.p>
              </li>
            </ul>
          </section>

          <section>
            <div>+icon+</div>
            <Styled.h3>Full Product Delivery</Styled.h3>
            <Styled.p sx={{ variant: null }}>
              By understanding your needs, designing deliberately, and
              communicating openly through the whole process, we are able to
              deliver products your users will love.
            </Styled.p>
            <hr />
            <ul>
              <li>
                <Styled.p sx={{ color: 'muted' }}>
                  Turn your need or idea into production-grate software
                </Styled.p>
              </li>
              <li>
                <Styled.p sx={{ color: 'muted' }}>
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
            Creating intuitive, production-prade software is a major
            undertaking, but our process keeps you involved and up to speed as
            we build the solution that best meets your needs.
          </Styled.p>

          <ol>
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
                details: [
                  'Acceptance test.',
                  'Incorporate feedback.',
                  'Deploy.',
                ],
              },
            ].map(step => (
              <li key={step.name}>
                <h3>{step.name}</h3>
                <ul>
                  {step.details.map(text => (
                    <li key={text}>
                      <p>{text}</p>
                    </li>
                  ))}
                </ul>

                <div>+icon+</div>
              </li>
            ))}
          </ol>
        </section>

        {/*<!-- Not sure <section> adds value here -->*/}
        {/*<!-- Leaving as it does not add SR noise -->*/}
        <section>
          <Styled.h2>Our Work</Styled.h2>

          <ul>
            <li>
              <section>
                <header>
                  <div>+header-image+</div>
                  <Styled.h3>CareCar</Styled.h3>
                </header>
                <p>
                  CareCar provides non-emergency medical transportation services
                  to health plans and their members using a network of certified
                  drivers. When getting started they needed a software platform
                  to facilitate their core business. Uptrend helped build an
                  initial prototype, which CareCar used to find their first
                  customers and secure funding.
                </p>
                <h4>Services Provided:</h4>
                <p>
                  Product Design | UX Design | UI Design | System Design |
                  Software Development | Software Support | Infrastructure
                  Management
                </p>
              </section>
            </li>
            <li>
              <section>
                <header>
                  <div>+header-image+</div>
                  <Styled.h3>Tunelinks</Styled.h3>
                </header>
                <p>
                  Tunelinks is an online distribution platform for streaming and
                  downloading new Hip-Hop and R&B music. They needed a system
                  for standardizing music that arrived in a number of different
                  formats and serving it to thousands of users at once. Uptrend
                  designed and built this system, allowing Tunelinks to keep
                  costs low while serving music to over 100k users a month.
                </p>
                <h4>Services Provided:</h4>
                <p>
                  System Design | Software Development | Software Support |
                  Infrastructure Management
                </p>
              </section>
            </li>
          </ul>
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
      </main>

      <div>
        <h3>Where To Find Us</h3>

        <h6>Phone</h6>
        <p>xxx-xxx-xxxx</p>

        <h6>Location</h6>
        <p>100 E San Marcos Blvd</p>
        <p>Suite #430</p>
        <p>San Marcos, CA 92069</p>
      </div>
    </>
  )
}

export default RawHtml
