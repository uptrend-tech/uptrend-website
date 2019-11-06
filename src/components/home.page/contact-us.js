/** @jsx jsx */
import React, { useState } from 'react'
import { jsx, Styled, Box, Flex } from 'theme-ui'
import { Button, Grid, Input, Label, Textarea } from '@theme-ui/components'

const ContactUsSection = ({ data }) => {
  const [formState, setFormState] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    subject: 'Uptrend Website - Contact Us Form',
    message: '',
  })

  const onChange = e => {
    setFormState({ ...formState, [e.target.name]: e.target.value })
  }

  const submitForm = async e => {
    e.preventDefault()

    try {
      const response = await fetch('/.netlify/functions/sendmail', {
        method: 'POST',
        body: JSON.stringify(formState),
      })

      if (!response.ok) {
        //not 200 response
        return
      }

      //all OK
    } catch (e) {
      //error
    }
  }

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
              columns={[1, 2]}
              gap={29}
              sx={{ gridRowGap: 0 }}
              onSubmit={submitForm}>
              <Box>
                <Label htmlFor="name">Name</Label>
                <Input name="name" mb={3} onChange={onChange} />
              </Box>
              <Box>
                <Label htmlFor="email">Email</Label>
                <Input name="email" mb={3} onChange={onChange} />
              </Box>
              <Box>
                <Label htmlFor="company">Company</Label>
                <Input name="company" mb={3} onChange={onChange} />
              </Box>
              <Box>
                <Label htmlFor="phone">Telephone</Label>
                <Input name="phone" mb={3} onChange={onChange} />
              </Box>
              <Box sx={{ gridColumn: '1 / -1' }}>
                <Label htmlFor="message">How can we help you?</Label>
                <Textarea name="message" rows="3" onChange={onChange} />
              </Box>
              <Box
                sx={{
                  gridColumn: '1 / -1',
                  // mt: [80],
                  mb: 80, //[223],
                }}>
                <Button type="submit" sx={{ width: '100%' }}>
                  Send
                </Button>
              </Box>
            </Grid>
          </Box>
        </Grid>
      </Box>
    </>
  )
}

export default ContactUsSection
