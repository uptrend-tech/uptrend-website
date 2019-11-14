/** @jsx jsx */
import React from 'react'
import { jsx, Styled, Box, Flex } from 'theme-ui'

import ourProcessDeliver from '@src/images/our-process--deliver.svg'
import ourProcessDesign from '@src/images/our-process--design.svg'
import ourProcessDevelop from '@src/images/our-process--develop.svg'
import ourProcessDiscover from '@src/images/our-process--discover.svg'

const processSteps = [
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
    details: ['Acceptance test.', 'Incorporate feedback.', 'Deploy.'],
    icon: ourProcessDeliver,
  },
]

const OurPorcessSection = ({ data }) => {
  return (
    <>
      <Box sx={{ variant: 'styles.contain' }}>
        <Box sx={{ variant: 'styles.ourProcess' }}>
          <Box sx={{ variant: 'styles.gridContainer', mb: [32, 45] }}>
            <Styled.h2
              sx={{
                gridArea: `1 / 1 / span 1 / span 12`,
                mt: [66, 80],
                mb: [22, 21],
              }}>
              Our Process
            </Styled.h2>
            <Styled.p
              sx={{
                m: 0,
                color: 'muted',
                gridArea: [
                  `2 / 1 / span 1 / span 12`,
                  `2 / 1 / span 1 / span 10`,
                  `2 / 1 / span 1 / span 10`,
                  `2 / 1 / span 1 / span 7`,
                ],
                lineHeight: [1.11, 1.5],
                letterSpacing: [0.9, 1.2],
                fontWeight: 'normal',
                fontSize: [1, 3],
              }}>
              Creating intuitive, production-grade software is a major
              undertaking, but our process keeps you up to speed and in control
              as we build the solution that best meets your needs.
            </Styled.p>
          </Box>

          <Styled.ol
            sx={{
              variant: 'styles.gridContainer',
              listStyle: 'none',
              textAlign: 'left',
              m: 0,
              mb: [50, 63],
              p: 0,
            }}>
            {processSteps.map(step => (
              <Styled.li
                key={step.name}
                sx={{
                  gridArea: [
                    `auto / auto / span 1 / span 12`,
                    `auto / auto / span 1 / span 6`,
                    `auto / auto / span 1 / span 6`,
                    `auto / auto / span 1 / span 5`,
                  ],
                  borderRadius: 5,
                  border: '2px solid',
                  borderColor: 'secondary',
                  py: 34,
                  px: 36,
                  mb: [24, 40],
                }}>
                <Flex>
                  <Box sx={{ flex: 1 }}>
                    <Styled.h3
                      sx={{
                        color: 'primary',
                        mt: 0,
                        mb: '8px',
                      }}>
                      {step.name}
                    </Styled.h3>
                    <Styled.ul
                      sx={{
                        listStyle: 'none',
                        textAlign: 'left',
                        m: 0,
                        mb: '4px',
                        p: 0,
                      }}>
                      {step.details.map(text => (
                        <Styled.li key={text}>
                          <Styled.p
                            sx={{
                              variant: 'text.tight',
                              mt: 0,
                              mb: 10,
                              letterSpacing: 1,
                              color: 'soft',
                            }}>
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
                      display: ['none', 'none', 'flex'],
                    }}>
                    <img
                      src={step.icon}
                      sx={{
                        height: 100,
                        ml: 36,
                      }}
                    />
                  </Flex>
                </Flex>
              </Styled.li>
            ))}
          </Styled.ol>
        </Box>
      </Box>
    </>
  )
}

export default OurPorcessSection
