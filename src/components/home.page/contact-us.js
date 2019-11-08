/** @jsx jsx */
import React, { useState } from 'react'
import { jsx, Styled, Box, Flex } from 'theme-ui'
import { Formik } from 'formik'
import {
  Button,
  Grid,
  Input,
  Label,
  Textarea,
  Text,
} from '@theme-ui/components'
import { lightness } from '@theme-ui/color'

const InputField = ({
  fieldName,
  text,
  errors,
  touched,
  values,
  handleBlur,
  handleChange,
  field,
  fieldProps,
  isRequired,
  isDisabled,
}) => {
  const errorMsg = errors[fieldName] && touched[fieldName] && errors[fieldName]
  const Field = field

  const borderColor = isDisabled ? lightness('muted', 0.2) : undefined
  const color = isDisabled ? lightness('text', 0.4) : undefined
  const boxShadow = isDisabled ? 'none' : undefined

  const labelStyles = {
    color: isDisabled ? lightness('text', 0.65) : undefined,
  }
  const fieldStyles = {
    borderColor,
    color,
    boxShadow,

    '&:hover': isDisabled
      ? {
          borderColor,
        }
      : undefined,
  }

  return (
    <Box sx={{ pb: 40 }}>
      <Label htmlFor={fieldName} sx={{ ...labelStyles }}>
        {text}
        {isRequired && '*'}
      </Label>
      <Field
        name={fieldName}
        onChange={handleChange}
        onBlur={handleBlur}
        value={values[fieldName]}
        sx={{
          bg: errorMsg ? 'inputBackgroundError' : undefined,
          ...fieldStyles,
        }}
        {...fieldProps}
        disabled={isDisabled}
      />
      <Text
        sx={{
          color: 'error',
          textAlign: 'right',
          fontSize: '14px',
          height: 1,
        }}>
        {errorMsg}
      </Text>
    </Box>
  )
}

const ContactUsSection = () => {
  const [isMsgSent, setIsMsgSent] = useState(false)

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
            <Formik
              initialValues={{
                name: '',
                email: '',
                company: '',
                phone: '',
                subject: 'Uptrend Website - Contact Us Form',
                message: '',
              }}
              validate={values => {
                const errors = {}
                if (!values.name) {
                  errors.name = 'This field is required'
                }

                if (!values.email) {
                  errors.email = 'This field is required'
                } else if (
                  !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                ) {
                  errors.email = 'Invalid email address'
                }

                if (!values.message) {
                  errors.message = 'This field is required'
                }
                return errors
              }}
              onSubmit={async (values, { setSubmitting, ...rest }, other) => {
                console.log('onSubmit', {
                  values,
                  rest,
                  setSubmitting,
                  other,
                })
                try {
                  const response = await fetch('/.netlify/functions/sendmail', {
                    method: 'POST',
                    body: JSON.stringify(values),
                  })

                  if (!response.ok) {
                    setSubmitting(false)
                    setIsMsgSent(true)
                    //not 200 response
                    return
                  }

                  //all OK
                } catch (e) {
                  //error
                  setSubmitting(false)
                }
              }}>
              {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting,
                isValid,
                /* and other goodies */
              }) => (
                <Grid
                  as="form"
                  columns={[1, 2]}
                  gap={29}
                  sx={{ gridRowGap: 0 }}
                  onSubmit={handleSubmit}>
                  <InputField
                    fieldName="name"
                    text="Name"
                    errors={errors}
                    touched={touched}
                    values={values}
                    handleChange={handleChange}
                    handleBlur={handleBlur}
                    field={Input}
                    isDisabled={isSubmitting || isMsgSent}
                    isRequired
                  />
                  <InputField
                    fieldName="email"
                    text="Email"
                    errors={errors}
                    touched={touched}
                    values={values}
                    handleChange={handleChange}
                    handleBlur={handleBlur}
                    field={Input}
                    isDisabled={isSubmitting || isMsgSent}
                    isRequired
                  />
                  {/*
                  <InputField
                    fieldName="company"
                    text="Company Name"
                    errors={errors}
                    touched={touched}
                    values={values}
                    handleChange={handleChange}
                    handleBlur={handleBlur}
                    field={Input}
                  />
                  <InputField
                    fieldName="phone"
                    text="Telephone"
                    errors={errors}
                    touched={touched}
                    values={values}
                    handleChange={handleChange}
                    handleBlur={handleBlur}
                    field={Input}
                  />
                  */}
                  <Box sx={{ gridColumn: '1 / -1' }}>
                    <InputField
                      fieldName="message"
                      text="How can we help you?"
                      errors={errors}
                      touched={touched}
                      values={values}
                      handleChange={handleChange}
                      handleBlur={handleBlur}
                      field={Textarea}
                      fieldProps={{
                        rows: '3',
                      }}
                      isDisabled={isSubmitting || isMsgSent}
                      isRequired
                    />
                  </Box>
                  <Box sx={{ gridColumn: '1 / -1' }} />
                  {isMsgSent && (
                    <Text
                      sx={{
                        textAlign: 'center',
                        mb: [4, 0],
                        display: [undefined, 'none'],
                      }}>
                      Your message was sent.
                      <br />
                      We will be in contact shortly!
                    </Text>
                  )}
                  <Box sx={{ width: '100%', mb: 80 }}>
                    <Button
                      type="submit"
                      sx={{ width: '100%' }}
                      disabled={!isValid || isSubmitting || isMsgSent}>
                      {isMsgSent ? 'Message Sent!' : 'Send Message'}
                    </Button>
                  </Box>
                  {isMsgSent && (
                    <Text
                      sx={{
                        textAlign: 'center',
                        mb: [4, 0],
                        display: ['none', 'block'],
                      }}>
                      Your message was sent.
                      <br />
                      We will be in contact shortly!
                    </Text>
                  )}
                </Grid>
              )}
            </Formik>
          </Box>
        </Grid>
      </Box>
    </>
  )
}

export default ContactUsSection
