/** @jsx jsx */
import React from 'react'
import { jsx, Styled, Box } from 'theme-ui'
import Img from 'gatsby-image'

const WorkListItem = ({
  dataImage,
  title,
  body,
  servicesProvided,
  pushRight = false,
}) => {
  const gridColStart = pushRight ? 7 : 1

  return (
    <Styled.li
      sx={{
        gridArea: [
          `auto / 1 / span 1 / -1`,
          `auto / 2 / span 1 / -2`,
          `auto / ${gridColStart} / span 1 / span 5`,
          `auto / ${gridColStart} / span 1 / span 5`,
          `auto / ${gridColStart} / span 1 / span 5`,
        ],
        display: 'flex',
        flexDirection: 'column',
        mb: 52,
      }}>
      <Img fluid={dataImage.childImageSharp.fluid} sx={{ borderRadius: 5 }} />
      <Styled.h3
        sx={{
          color: 'primary',
          mt: [32, 39],
          mb: 20,
          lineHeight: [1.5, 1],
          letterSpacing: 0.5,
        }}>
        {title}
      </Styled.h3>
      <Styled.p sx={{ m: 0, variant: 'text.tightDim' }}>{body}</Styled.p>
      <Styled.h4
        sx={{
          mt: 32,
          mb: 17,
          fontSize: 1,
          fontWeight: 500,
          lineHeight: 1.28,
          letterSpacing: 1.13,
          color: 'soft',
        }}>
        Services Provided:
      </Styled.h4>
      <Styled.p
        sx={{
          fontSize: 0,
          fontWeight: 900,
          lineHeight: 1.38,
          letterSpacing: 1,
          color: 'soft',
          my: 0,
        }}>
        {servicesProvided}
      </Styled.p>
    </Styled.li>
  )
}

const OurWorkSection = ({ data }) => {
  return (
    <>
      <Box sx={{ variant: 'styles.lightSection' }}>
        <Box
          sx={{
            variant: 'styles.contain',
            pt: [40, 53],
            pb: [17, 67],
          }}>
          <Styled.h2
            sx={{
              textAlign: 'center',
              mt: 0,
              mb: [35, 80],
            }}>
            Our Work
          </Styled.h2>
          <Styled.ul
            sx={{
              variant: 'styles.gridContainer',
              listStyle: 'none',
              textAlign: 'left',
              m: 0,
              p: 0,
            }}>
            <WorkListItem
              dataImage={data.ourWorkCareCarImage}
              title="CareCar"
              body={`
                CareCar provides non-emergency medical transportation services
                to health plans and their members using a network of certified
                drivers. When getting started they needed a software platform to
                facilitate their core business. Uptrend helped build an initial
                prototype, which CareCar used to find their first customers and
                secure funding.
              `}
              servicesProvided={`
                Product Design | UX Design | UI Design | System Design |
                Software Development | Software Support | Infrastructure
                Management
              `}
            />
            <WorkListItem
              dataImage={data.ourWorkTunelinksImage}
              title="Tunelinks"
              body={`
                Tunelinks is an online distribution platform for streaming and
                downloading new Hip-Hop and R&B music. They needed a system for
                standardizing music that arrived in a number of different
                formats and serving it to thousands of users at once. Uptrend
                designed and built this system, allowing Tunelinks to keep costs
                low while serving music to over 100k users a month.
              `}
              servicesProvided={`
                System Design | Software Development | Software Support |
                Infrastructure Management
              `}
              pushRight
            />
          </Styled.ul>
        </Box>
      </Box>
    </>
  )
}

export default OurWorkSection
