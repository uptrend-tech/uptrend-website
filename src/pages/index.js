import React from 'react'
import { graphql } from 'gatsby'
import { Main, Box, Flex, jsx, Styled } from 'theme-ui'
import Layout from '../components/layout'
// import Hero from '../components/hero'
// import GridSection from '../components/grid-section'
import HomePage from '../components/home.page'

const Index = props => (
  <Layout>
    <HomePage {...props} />
  </Layout>
)

export default Index

export const pageQuery = graphql`
  query {
    heroImage: file(relativePath: { eq: "hero-image.png" }) {
      childImageSharp {
        fluid(maxWidth: 739, maxHeight: 589) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    ourWorkCareCarImage: file(relativePath: { eq: "our-work--carecar.jpg" }) {
      childImageSharp {
        fluid(maxHeight: 237) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    ourWorkTunelinksImage: file(
      relativePath: { eq: "our-work--tunelinks.jpg" }
    ) {
      childImageSharp {
        fluid(maxHeight: 237) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
  }
`
