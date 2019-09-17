import React from 'react'
import { graphql } from 'gatsby'
import { Main, Box, Flex, jsx, Styled } from 'theme-ui'
import Layout from '../components/layout'
// import Hero from '../components/hero'
// import GridSection from '../components/grid-section'
import HomePage from '../components/home.page'

const Index = props => (
  <Layout>
    <Main>
      <HomePage {...props} />
    </Main>
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
  }
`
