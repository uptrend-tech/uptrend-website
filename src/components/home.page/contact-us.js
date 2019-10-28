/** @jsx jsx */
import React from 'react'
import { jsx, Styled, Box, Flex } from 'theme-ui'
import {
  Grid,
  Label,
  Input,
  Select,
  Textarea,
  // Radio,
  Checkbox,
  // Slider,
} from '@theme-ui/components'

const ContactUsSection = ({ data }) => {
  return (
    <>
      <Box sx={{ variant: 'styles.contain' }}>
        <Styled.h2>Contact Us</Styled.h2>
        <Grid gap={29} columns={[12]}>
          <Box
            sx={{
              gridColumnEnd: [
                `span 12`,
                `span 10`,
                `span 9`,
                `span 8`,
                `span 6`,
              ],
            }}>
            <Grid
              as="form"
              onSubmit={e => e.preventDefault()}
              columns={[1, 2]}
              gap={29}
              sx={{ gridRowGap: 0 }}>
              <Box>
                <Label htmlFor="name">Name</Label>
                <Input name="name" mb={3} />
              </Box>
              <Box>
                <Label htmlFor="company">Company</Label>
                <Input type="company" name="company" mb={3} />
              </Box>
              <Box>
                <Label htmlFor="email">Email</Label>
                <Input email="email" mb={3} />
              </Box>
              <Box>
                <Label htmlFor="telephone">Telephone</Label>
                <Input type="telephone" name="telephone" mb={3} />
              </Box>
              <Box sx={{ gridColumn: '1 / -1' }}>
                <Label htmlFor="need-help-with">How can we help you?</Label>
                <Textarea name="need-help-with" rows="3" />
              </Box>
            </Grid>
          </Box>
        </Grid>
      </Box>
    </>
  )
}

export default ContactUsSection
