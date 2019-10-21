/** @jsx jsx */
import React from 'react'
import { jsx, Styled, Box, Flex } from 'theme-ui'

import whatWeDoFullProductDelivery from '@src/images/what-we-do--full-product-delivery.svg'
import whatWeDoPrototyping from '@src/images/what-we-do--prototyping.svg'

const gridGapSm = '15.7px'
const gridGapLg = '29px'

const ArtCell = ({ children, left = true }) => {
  const topGridRow = '1 / span 1'
  const leftGridRow = '1 / span 4'

  const topGridColumn = `${left ? 1 : 7} / span 6`
  const leftGridColumn = `${left ? 1 : 7} / span 2`

  return (
    <Flex
      sx={{
        gridRow: [topGridRow, topGridRow, topGridRow, topGridRow, leftGridRow],
        gridColumn: [
          topGridColumn,
          topGridColumn,
          topGridColumn,
          topGridColumn,
          leftGridColumn,
        ],
        justifyContent: 'center',
      }}>
      {children}
    </Flex>
  )
}

const DetailCell = ({ children, detailRow, left = true }) => {
  const topGridRow = `${detailRow + 1} / span 1`
  const leftGridRow = `${detailRow} / span 1`

  const topGridColumn = `${left ? 1 : 7} / span 6`
  const leftGridColumn = `${left ? 3 : 9} / span 4`

  return (
    <Box
      sx={{
        gridRow: [topGridRow, topGridRow, topGridRow, topGridRow, leftGridRow],
        gridColumn: [
          topGridColumn,
          topGridColumn,
          topGridColumn,
          topGridColumn,
          leftGridColumn,
        ],
        ml: [`-${gridGapSm}`, `-${gridGapSm}`, `-${gridGapLg}`],
        mr: [gridGapSm, gridGapSm, gridGapLg],
      }}>
      {children}
    </Box>
  )
}

const Art = ({ img, left }) => {
  return (
    <ArtCell left={left}>
      <Flex
        sx={{
          textAlign: 'center',
          alignItems: 'center',
          justifyContent: 'center',
          flex: 0,
          minWidth: 106,
          img: { width: 106 },
        }}>
        <img src={img} />
      </Flex>
    </ArtCell>
  )
}

const Title = ({ children, left }) => {
  return (
    <DetailCell detailRow={1} left={left}>
      <Styled.h3 sx={{ mt: [32, 32, 32, 32, 63], mb: 14 }}>
        {children}
      </Styled.h3>
    </DetailCell>
  )
}

const Description = ({ children, left }) => {
  return (
    <DetailCell detailRow={2} left={left}>
      <Styled.p sx={{ m: 0, mb: [39.5, 39.5, 24] }}>{children}</Styled.p>
    </DetailCell>
  )
}

const BreakLine = ({ left }) => {
  return (
    <DetailCell detailRow={3} left={left}>
      <Styled.hr sx={{ width: 133, m: 0 }} />
    </DetailCell>
  )
}

const TalkingPoint = ({ children }) => {
  return (
    <Styled.li>
      <Styled.p
        sx={{
          variant: 'text.dim',
          mt: 30,
          mb: 0,
          lineHeight: 1.33,
          letterSpacing: 0.9,
        }}>
        {children}
      </Styled.p>
    </Styled.li>
  )
}

const TalkingPointList = ({ children, left }) => {
  return (
    <DetailCell detailRow={4} left={left}>
      <Styled.ul
        sx={{
          listStyle: 'none',
          display: 'block',
          textAlign: 'left',
          m: 0,
          mb: [40, 40, 24],
          p: 0,
        }}>
        {children}
      </Styled.ul>
    </DetailCell>
  )
}

const WhatWeDoItemBackground = ({ left = true }) => {
  const leftArtGridArea = `1 / ${left ? 1 : 7} / span 4 / span 6`
  const topArtGridArea = `1 / ${left ? 1 : 7} / span 5 / span 6`

  return (
    <Box
      sx={{
        borderRadius: 5,
        bg: 'backgroundDark',
        gridArea: [
          topArtGridArea,
          topArtGridArea,
          topArtGridArea,
          topArtGridArea,
          leftArtGridArea,
        ],
      }}
    />
  )
}

const WhatWeDoItem = ({
  artImg,
  title,
  description,
  talkingPointList,
  left,
}) => {
  return (
    <>
      <WhatWeDoItemBackground left={left} />
      <Art img={artImg} left={left} />
      <Title left={left}>{title}</Title>
      <Description left={left}>{description}</Description>
      <BreakLine left={left} />
      <TalkingPointList left={left}>
        {talkingPointList.map((text, i) => (
          <TalkingPoint key={i}>{text}</TalkingPoint>
        ))}
      </TalkingPointList>
    </>
  )
}

const WhatWeDoGrid = ({ children }) => {
  return (
    <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: [
          `repeat(4, 1fr)`,
          `repeat(4, 1fr)`,
          `repeat(12, 1fr)`,
        ],
        gridRowGap: 0,
        gridColumnGap: ['15.7px', '15.7px', '29px'],
        mx: 'auto',
      }}>
      {children}
    </Box>
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
          }}>
          What We Do
        </Styled.h2>

        <WhatWeDoGrid>
          <WhatWeDoItem
            artImg={whatWeDoPrototyping}
            title="Product Prototyping"
            description={`
            Sometimes you need a working example to prove an idea can actually
            work, or get a product in front of users. We can help you prototype
            quickly, without the time and expense of production-grade software.
            `}
            talkingPointList={[
              'Quickly develop functional proof of concept to validate an idea',
              'Start testing your product sooner',
            ]}
          />
          <WhatWeDoItem
            artImg={whatWeDoFullProductDelivery}
            title="Full Product Delivery"
            description={`
            By understanding your needs, designing deliberately, and
            communicating openly through the whole process, we are able to
            deliver products your users will love.
            `}
            talkingPointList={[
              'Turn your need or idea into production-grate software',
              'We’ll help you maintain and evolve your product',
            ]}
            left={false}
          />
        </WhatWeDoGrid>

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
            }}>
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
            }}>
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

export default WhatWeDo
