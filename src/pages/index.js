import React from 'react'
import { graphql } from 'gatsby'

import Layout from '@src/components/layout'
import HomePage from '@src/components/home.page'

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
        fluid(maxWidth: 624, maxHeight: 393) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    heroImageShadow: file(relativePath: { eq: "hero-image-shadow.png" }) {
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
