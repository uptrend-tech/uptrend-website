/** @jsx jsx */
import React from 'react'
import { jsx, Styled, Box, Flex } from 'theme-ui'

import logoActivision from '@src/images/logo--activision.svg'
import logoBlackberry from '@src/images/logo--blackberry.svg'
import logoCarecar from '@src/images/logo--carecar.svg'
import logoPg from '@src/images/logo--pg.svg'

const ClientLogo = ({ logoSrc, index }) => {
  const minHeight = [80, 80, 80, 80, 96]
  const gridArea = `c${index + 1}`
  return (
    <Flex sx={{ gridArea, minHeight, justifyContent: 'center' }}>
      <img src={logoSrc} sx={{ maxWidth: '100%', maxHeight: '100%' }} />
    </Flex>
  )
}

const ClientShoutout = () => {
  const oneLineAreas = `
    ". hr hr hr hr hr hr hr hr hr hr ."
    ". h3 h3 c1 c1 c2 c2 c3 c3 c4 c4 ."
   `

  const singleStackAreas = `
    ". hr hr hr hr hr hr hr hr hr hr ."
    ". h3 h3 h3 c1 c1 c1 c2 c2 c2 c2  ."
    ". h3 h3 h3 c3 c3 c3 c4 c4 c4 c4  ."
   `

  const doubleStackAreas = `
    "hr hr hr hr "
    "h3 h3 h3 h3 "
    "c1 c1 c2 c2 "
    "c3 c3 c4 c4 "
   `

  return (
    <>
      <Box sx={{ variant: 'styles.contain' }}>
        <Box
          sx={{
            variant: 'styles.gridContainer',
            gridTemplateColumns: [
              `repeat(4, 1fr)`,
              `repeat(4, 1fr)`,
              `repeat(12, 1fr)`,
            ],
            gridRowGap: 24,
            gridColumnGap: ['15.7px', '15.7px', '29px'],
            gridTemplateAreas: [
              doubleStackAreas,
              doubleStackAreas,
              singleStackAreas,
              singleStackAreas,
              oneLineAreas,
            ],
            pb: [40, 40, 40, 40, 67],
            textAlign: ['center', 'center', 'left'],
            alignItems: 'center',
          }}
        >
          <Styled.hr
            sx={{
              gridArea: `hr`,
              mx: 0,
              mb: [15, 15, 15, 15, 42],
              mt: [40, 40, 71, 71, 71],
            }}
          />
          <Styled.h3
            sx={{
              gridArea: 'h3',
              whiteSpace: ['nowrap', 'normal'],
              my: 0,
              mb: ['5px', '5px', '5px', '5px', 0],
            }}
          >{`We've Built Solutions For`}</Styled.h3>
          {[logoPg, logoBlackberry, logoCarecar, logoActivision].map(
            (logo, i) => (
              <ClientLogo logoSrc={logo} index={i} key={i} />
            )
          )}
        </Box>
      </Box>
    </>
  )
}

export default ClientShoutout
