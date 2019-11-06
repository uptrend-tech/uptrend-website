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
}) => {
  const errorMsg = errors[fieldName] && touched[fieldName] && errors[fieldName]
  const Field = field

  return (
    <Box sx={{ pb: 40 }}>
      <Label htmlFor={fieldName}>
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
        }}
        {...fieldProps}
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
                console.log('onSubmit', { values, rest, setSubmitting, other })
                try {
                  const response = await fetch('/.netlify/functions/sendmail', {
                    method: 'POST',
                    body: JSON.stringify(values),
                  })

                  if (!response.ok) {
                    setSubmitting(false)
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
                      fieldProps={{ rows: '3' }}
                      isRequired
                    />
                  </Box>
                  <Box sx={{ gridColumn: '1 / -1' }} />
                  <Button
                    type="submit"
                    sx={{ width: '100%', mb: 80 }}
                    disabled={!isValid || isSubmitting}>
                    Send Your Message
                  </Button>
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
