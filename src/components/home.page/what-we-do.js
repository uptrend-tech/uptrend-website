/** @jsx jsx */
import React from 'react'
import { jsx, Styled, Box, Flex } from 'theme-ui'

import whatWeDoFullProductDelivery from '@src/images/what-we-do--full-product-delivery.svg'
import whatWeDoPrototyping from '@src/images/what-we-do--prototyping.svg'

const ClientLogo = ({ logoSrc, index }) => {
  const minHeight = [80, 80, 80, 80, 96]
  const gridArea = `c${index + 1}`
  return (
    <Flex sx={{ gridArea, minHeight, justifyContent: 'center' }}>
      <img src={logoSrc} sx={{ maxWidth: '100%', maxHeight: '100%' }} />
    </Flex>
  )
}

const WhatWeDoItem = ({}) => {
  const iconGridRow = `1 / span 4`

  const iconContainerStyle = {}
  const textGridCellStyle = {
    textAlign: 'center',
    alignItems: 'center',
    gridRow: [
      `1 / span 1`,
      `1 / span 1`,
      `1 / span 1`,
      `1 / span 1`,
      `1 / span 4`,
    ],
    gridColumn: [
      `1 / span 1`,
      `1 / span 1`,
      `1 / span 1`,
      `1 / span 1`,
      `1 / span 2`,
    ],
    gridColumn: `1 / span 2`,
  }

  return (
    <Flex
      sx={{
        variant: 'styles.whatWeDoItem',
        gridArea: `2 / 1 / span 1 / span 6`,
      }}
    >
      <Flex
        sx={{
          textAlign: 'center',
          alignItems: 'center',
          gridRow: [
            `1 / span 1`,
            `1 / span 1`,
            `1 / span 1`,
            `1 / span 1`,
            `1 / span 4`,
          ],
          gridColumn: [
            `1 / span 1`,
            `1 / span 1`,
            `1 / span 1`,
            `1 / span 1`,
            `1 / span 2`,
          ],
          gridColumn: `1 / span 2`,
        }}
      >
        <img src={whatWeDoPrototyping} />
      </Flex>
    </Flex>
  )
}

const WhatWeDo = () => {
  return (
    <Box sx={{ variant: 'styles.lightSection' }}>
      <Box sx={{ variant: 'styles.contain', pb: 112 }}>
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

        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: [
              `repeat(4, 1fr)`,
              `repeat(4, 1fr)`,
              `repeat(6, 1fr)`,
              // `repeat(6, 1fr)`,
            ],
            gridRowGap: 0,
            gridColumnGap: ['15.7px', '15.7px', '29px'],
            mx: 'auto',
            /* pb: [40, 40, 40, 40, 67], */
            /* textAlign: ['center', 'center', 'left'], */
            /* alignItems: 'center', */
          }}
        >
          <Flex
            sx={{
              gridArea: [
                `1 / 1 / span 1 / span 1`,
                `1 / 1 / span 1 / span 1`,
                `1 / 1 / span 1 / span 1`,
                `1 / 1 / span 1 / span 1`,
                `1 / 1 / span 4 / span 1`,
              ],
              justifyContent: 'center',
            }}
          >
            <Flex
              sx={{
                flex: 0,
                minWidth: 106,
                mr: 40,
                img: {
                  width: 106,
                },
              }}
            >
              <img src={whatWeDoPrototyping} />
            </Flex>
          </Flex>
          <Styled.h3
            sx={{
              gridArea: [
                `2 / 1 / span 1 / span 4`,
                `2 / 1 / span 1 / span 4`,
                `2 / 1 / span 1 / span 3`,
                `2 / 1 / span 1 / span 3`,
                `1 / 2 / span 1 / span 2`,
              ],
            }}
          >
            Product Prototyping
          </Styled.h3>
          <Styled.p
            sx={{
              gridArea: [
                `3 / 1 / span 1 / span 4`,
                `3 / 1 / span 1 / span 4`,
                `3 / 1 / span 1 / span 3`,
                `3 / 1 / span 1 / span 3`,
                `2 / 2 / span 1 / span 2`,
              ],
            }}
          >
            Sometimes you need a working example to prove an idea can actually
            work, or get a product in front of users. We can help you prototype
            quickly, without the time and expense of production-grade software.
          </Styled.p>
          <Styled.hr
            sx={{
              gridArea: [
                `4 / 1 / span 1 / span 4`,
                `4 / 1 / span 1 / span 4`,
                `4 / 1 / span 1 / span 3`,
                `4 / 1 / span 1 / span 3`,
                `3 / 2 / span 1 / span 2`,
              ],
            }}
          />
          <Styled.ul
            sx={{
              gridArea: [
                `5 / 1 / span 1 / span 4`,
                `5 / 1 / span 1 / span 4`,
                `5 / 1 / span 1 / span 3`,
                `5 / 1 / span 1 / span 3`,
                `4 / 2 / span 1 / span 2`,
              ],
            }}
          >
            <Styled.li>
              <Styled.p>
                Quickly develop functional proof of concept to validate an idea
              </Styled.p>
            </Styled.li>
            <Styled.li>
              <Styled.p>Start testing your product sooner</Styled.p>
            </Styled.li>
          </Styled.ul>

          {/*
          <Flex sx={{ variant: 'styles.whatWeDoItemCopy' }}>
            <Styled.h3>Product Prototyping</Styled.h3>
            <Styled.p>
              Sometimes you need a working example to prove an idea can actually
              work, or get a product in front of users. We can help you
              prototype quickly, without the time and expense of
              production-grade software.
            </Styled.p>
            <Styled.hr />
            <Styled.ul>
              <Styled.li>
                <Styled.p>
                  Quickly develop functional proof of concept to validate an
                  idea
                </Styled.p>
              </Styled.li>
              <Styled.li>
                <Styled.p>Start testing your product sooner</Styled.p>
              </Styled.li>
            </Styled.ul>
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
                communicating openly through the whole process, we are able to
                deliver products your users will love.
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
    */}
        </Box>

        <Box sx={{ variant: 'styles.gridContainer' }}>
          <Flex
            sx={{
              gridArea: `3 / 1 / span 1 /  -1`,
              borderBottom: '1px dotted',
              my: 60,
            }}
          />

          <Flex
            sx={{
              variant: 'styles.whatWeDoItem',
              gridArea: `4 / 1 / span 1 / span 6`,
            }}
          >
            <Flex sx={{ variant: 'styles.whatWeDoItemIcon' }}>
              <img src={whatWeDoPrototyping} />
            </Flex>
            <Flex sx={{ variant: 'styles.whatWeDoItemCopy' }}>
              <Styled.h3>Product Prototyping</Styled.h3>
              <Styled.p>
                Sometimes you need a working example to prove an idea can
                actually work, or get a product in front of users. We can help
                you prototype quickly, without the time and expense of
                production-grade software.
              </Styled.p>
              <Styled.hr />
              <Styled.ul>
                <Styled.li>
                  <Styled.p>
                    Quickly develop functional proof of concept to validate an
                    idea
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
              gridArea: `4 / 7 / span 1 / span 6`,
            }}
          >
            <Flex sx={{ variant: 'styles.whatWeDoItemIcon' }}>
              <img src={whatWeDoFullProductDelivery} />
            </Flex>
            <Flex sx={{ variant: 'styles.whatWeDoItemCopy' }}>
              <Styled.h3>Full Product Delivery</Styled.h3>
              <Styled.p>
                By understanding your needs, designing deliberately, and
                communicating openly through the whole process, we are able to
                deliver products your users will love.
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
  )
}

// const WhatWeDo = () => {
//   const oneLineAreas = `
//     ". hr hr hr hr hr hr hr hr hr hr ."
//     ". h3 h3 c1 c1 c2 c2 c3 c3 c4 c4 ."
//    `

//   const singleStackAreas = `
//     ". hr hr hr hr hr hr hr hr hr hr ."
//     ". h3 h3 h3 c1 c1 c1 c2 c2 c2 c2  ."
//     ". h3 h3 h3 c3 c3 c3 c4 c4 c4 c4  ."
//    `

//   const doubleStackAreas = `
//     "hr hr hr hr "
//     "h3 h3 h3 h3 "
//     "c1 c1 c2 c2 "
//     "c3 c3 c4 c4 "
//    `

//   return (
//     <>
//       <Box sx={{ variant: 'styles.contain' }}>
//         <Box
//           sx={{
//             variant: 'styles.gridContainer',
//             gridTemplateColumns: [
//               `repeat(4, 1fr)`,
//               `repeat(4, 1fr)`,
//               `repeat(12, 1fr)`,
//             ],
//             gridRowGap: 24,
//             gridColumnGap: ['15.7px', '15.7px', '29px'],
//             gridTemplateAreas: [
//               doubleStackAreas,
//               doubleStackAreas,
//               singleStackAreas,
//               singleStackAreas,
//               oneLineAreas,
//             ],
//             pb: [40, 40, 40, 40, 67],
//             textAlign: ['center', 'center', 'left'],
//             alignItems: 'center',
//           }}
//         >
//           <Styled.hr
//             sx={{
//               gridArea: `hr`,
//               mx: 0,
//               mb: [15, 15, 15, 15, 42],
//               mt: [40, 40, 71, 71, 71],
//             }}
//           />
//           <Styled.h3
//             sx={{
//               gridArea: 'h3',
//               whiteSpace: ['nowrap', 'normal'],
//               my: 0,
//               mb: ['5px', '5px', '5px', '5px', 0],
//             }}
//           >{`We've Built Solutions For`}</Styled.h3>
//           {[logoPg, logoBlackberry, logoCarecar, logoActivision].map(
//             (logo, i) => (
//               <ClientLogo logoSrc={logo} index={i} key={i} />
//             )
//           )}
//         </Box>
//       </Box>
//     </>
//   )
// }

export default WhatWeDo
