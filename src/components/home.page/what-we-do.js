/** @jsx jsx */
import React from 'react'
import { jsx, Styled, Box, Flex } from 'theme-ui'

import whatWeDoFullProductDelivery from '@src/images/what-we-do--full-product-delivery.svg'
import whatWeDoPrototyping from '@src/images/what-we-do--prototyping.svg'

const gridGapSm = '15.7px'
const gridGapLg = '29px'

const gridTemplateAreasMobile = `
  "art1   art1   art1   art1"
  "title1 title1 title1 title1"
  "desc1  desc1  desc1  desc1 "
  ".      break1 break1 ."
  "list1  list1  list1  list1 "
  "gap    gap    gap    gap"
  "art2   art2   art2   art2"
  "title2 title2 title2 title2"
  "desc2  desc2  desc2  desc2 "
  ".      break2 break2 ."
  "list2  list2  list2  list2";
`

const gridTemplateAreasTablet = `
  "art1 art1 title1 title1 title1 title1"
  "art1 art1 desc1  desc1  desc1  desc1"
  "art1 art1 break1 break1 .      ."
  "art1 art1 list1  list1  list1  list1"
  "gap  gap  gap    gap    gap    gap"
  "art2 art2 title2 title2 title2 title2"
  "art2 art2 desc2  desc2  desc2  desc2"
  "art2 art2 break2 break2 .      ."
  "art2 art2 list2  list2  list2  list2";
`

const gridTemplateAreasWide = `
  "art1 title1 title1 art2 title2 title2"
  "art1 desc1  desc1  art2 desc2  desc2"
  "art1 break1 .      art2 break2 ."
  "art1 list1  list1  art2 list2  list2";
`

const ArtCell = ({ children, left = true }) => {
  return (
    <Flex
      sx={{
        justifyContent: 'center',
        gridArea: `art${left ? 1 : 2}`,
      }}>
      {children}
    </Flex>
  )
}

const DetailCell = ({ children, gridArea, left = true }) => {
  return (
    <Box
      sx={{
        ml: [32, `-${gridGapLg}`],
        mr: [32, 40],
        gridArea: `${gridArea}${left ? 1 : 2}`,
      }}>
      {children}
    </Box>
  )
}

const Art = ({ img, left }) => {
  const responsiveWidths = [87, 106]
  return (
    <ArtCell left={left}>
      <Flex
        sx={{
          textAlign: 'center',
          alignItems: 'center',
          justifyContent: 'center',
          flex: 0,
          minWidth: responsiveWidths,
          img: { width: responsiveWidths },
          mt: 40,
          mb: [0, 24],
        }}>
        <img src={img} />
      </Flex>
    </ArtCell>
  )
}

const Title = ({ children, left }) => {
  return (
    <DetailCell left={left} gridArea="title">
      <Styled.h3
        sx={{
          mt: [32, 32, 32, 32, 63],
          mb: 14,
          textAlign: ['center', 'left'],
          lineHeight: [1.25, 1.5],
          fontSize: [3, 4],
        }}>
        {children}
      </Styled.h3>
    </DetailCell>
  )
}

const Description = ({ children, left }) => {
  return (
    <DetailCell left={left} gridArea="desc">
      <Styled.p
        sx={{
          m: 0,
          mb: [39.5, 27.5],
          lineHeight: [1.13, 1.28],
          fontSize: [0, 1],
        }}>
        {children}
      </Styled.p>
    </DetailCell>
  )
}

const BreakLine = ({ left }) => {
  return (
    <DetailCell left={left} gridArea="break">
      <Styled.hr
        sx={{
          m: 0,
          mx: [-32, 0],
          mb: [32.5, 30],
          borderBottom: '1px solid',
          borderColor: 'seperator',
        }}
      />
    </DetailCell>
  )
}

const TalkingPoint = ({ children }) => {
  return (
    <Styled.li>
      <Styled.p
        sx={{
          variant: 'text.dim',
          mt: 0,
          mb: [20, 30],
          lineHeight: [1.38, 1.33],
          letterSpacing: [0.8, 0.9],
          fontSize: [0, 1],
        }}>
        {children}
      </Styled.p>
    </Styled.li>
  )
}

const TalkingPointList = ({ children, left }) => {
  return (
    <DetailCell left={left} gridArea="list">
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

const WhatWeDoItemGap = () => (
  <Box
    sx={{
      display: ['block', 'block', 'block', 'block', 'none'],
      height: [32, 40, 40, 40, 0],
      gridArea: 'gap',
    }}
  />
)

const WhatWeDoItemBackground = ({ left = true }) => {
  const gridAreaMobile = `${left ? 1 : 7} / 1 / span 5 / -1`
  const gridAreaTablet = `${left ? 1 : 6} / 1 / span 4 / -1`
  const gridAreaWide = `1 / ${left ? 1 : 4} / span 4 / span 3`

  return (
    <Box
      sx={{
        borderRadius: 5,
        bg: 'backgroundDark',
        gridArea: [
          gridAreaMobile,
          gridAreaTablet,
          gridAreaTablet,
          gridAreaTablet,
          gridAreaWide,
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
        gridTemplateColumns: [`repeat(4, 1fr)`, `repeat(6, 1fr)`],
        gridTemplateAreas: [
          gridTemplateAreasMobile,
          gridTemplateAreasTablet,
          gridTemplateAreasTablet,
          gridTemplateAreasTablet,
          gridTemplateAreasWide,
        ],
        gridRowGap: 0,
        gridColumnGap: [gridGapSm, gridGapLg],
        mx: 'auto',
      }}>
      {children}
    </Box>
  )
}

const WhatWeDo = () => {
  return (
    <Box sx={{ variant: 'styles.lightSection', overflow: 'hidden' }}>
      <Box sx={{ variant: 'styles.contain', pb: [73, 112] }}>
        <Styled.h2
          sx={{
            mt: [40, 70],
            mb: [38, 80],
            textAlign: 'center',
          }}>
          What We Do
        </Styled.h2>

        <WhatWeDoGrid>
          <WhatWeDoItem
            artImg={whatWeDoPrototyping}
            title="Product Prototyping"
            description={`
              Sometimes you need to prove that an idea can actually work, or get
              your product in front of users now. We can help you prototype
              quickly, without the time and expense of production-grade software.
            `}
            talkingPointList={[
              'Quickly develop a functional proof of concept',
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
              'Turn your need or idea into production-grade software',
              'We’ll help you maintain and evolve your product',
            ]}
            left={false}
          />
          <WhatWeDoItemGap />
        </WhatWeDoGrid>
      </Box>
    </Box>
  )
}

export default WhatWeDo
