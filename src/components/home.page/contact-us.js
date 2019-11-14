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
import { IoIosCloseCircleOutline } from 'react-icons/io'

const wait = (ms, value) =>
  new Promise((r, j) => setTimeout(() => r(value), ms))

const sendEmailMock = () => wait(3000, { ok: true })

const sendEmail = async values => {
  const response = fetch('/.netlify/functions/sendmail', {
    method: 'POST',
    body: JSON.stringify(values),
  })
  await wait(1000)
  return response
}

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
  const fieldId = `contact-us--${fieldName}`

  const borderColor = isDisabled
    ? lightness('muted', 0.2)
    : errorMsg
    ? 'errorFlat'
    : undefined

  const labelColor = isDisabled ? lightness('text', 0.65) : undefined
  const boxShadow = isDisabled ? 'none' : undefined
  const color = isDisabled ? lightness('text', 0.4) : undefined

  return (
    <Box sx={{ pb: 40 }}>
      <Label
        htmlFor={fieldId}
        sx={{
          color: labelColor,
          mb: 0,
          pb: 10,
        }}>
        {text}
        {isRequired && '*'}
      </Label>
      <Field
        id={fieldId}
        name={fieldName}
        onChange={handleChange}
        onBlur={handleBlur}
        value={values[fieldName]}
        sx={{
          borderColor,
          color,
          boxShadow,
          '&:hover': isDisabled ? { borderColor } : undefined,
          '&:focus': errorMsg ? { borderColor: 'error' } : undefined,
        }}
        {...fieldProps}
        disabled={isDisabled}
      />
      {errorMsg && (
        <Box sx={{ position: 'relative', top: 1 }}>
          <Flex
            sx={{
              alignItems: 'end',
              height: 0,
              color: 'error',
              mt: 1,
            }}>
            <IoIosCloseCircleOutline sx={{ fontSize: '18px', mr: 1 }} />
            <Text sx={{ fontSize: '14px' }}>{errorMsg}</Text>
          </Flex>
        </Box>
      )}
    </Box>
  )
}

const ContactUsSection = () => {
  const [isMsgSent, setIsMsgSent] = useState(false)
  const [isMsgError, setIsMsgError] = useState(false)

  const onSubmit = async (values, { setSubmitting }) => {
    try {
      setIsMsgError(false)
      setIsMsgSent(false)

      // NOTE: the following lines are for local dev testing and SHOULD be commented out
      // const response = await sendEmailMock()
      // throw new Error()
      // response.ok = false

      const response = await sendEmail(values)
      setSubmitting(false)

      if (!response.ok) {
        //not 200 response
        setIsMsgError(true)
        return
      }

      //all OK
      setIsMsgSent(true)
    } catch (e) {
      //error
      setIsMsgError(true)
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
              onSubmit={onSubmit}>
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
                  {/*
                  {isMsgError && (
                    <Text
                      sx={{
                        textAlign: 'center',
                        mb: [4, 0],
                        display: [undefined, 'none'],
                        color: lightness('error', 0.8),
                        fontSize: 0,
                      }}>
                      Failed to send your message.
                      <br />
                      Please try again later.
                    </Text>
                  )}
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
                    */}
                  <Box sx={{ width: '100%', mb: 80 }}>
                    <Button
                      type="submit"
                      sx={{ width: '100%' }}
                      disabled={!isValid || isSubmitting || isMsgSent}>
                      {isMsgSent ? 'Message Sent!' : 'Send Message'}
                    </Button>
                  </Box>
                  {isMsgError && (
                    <Text
                      sx={{
                        textAlign: 'center',
                        height: 'fit-content',
                        borderRadius: 5,
                        mb: [4, 0],
                        display: ['none', 'block'],
                        color: lightness('errorFlat', 0.8),
                        fontSize: 0,
                      }}>
                      Failed to send your message.
                      <br />
                      Please try again later.
                    </Text>
                  )}
                  {isMsgSent && (
                    <Flex>
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
                    </Flex>
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
