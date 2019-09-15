import React from 'react'
import { graphql } from 'gatsby'
import { Main, Box, Flex, jsx, Styled } from 'theme-ui'
import Layout from '../components/layout'
// import Hero from '../components/hero'
// import GridSection from '../components/grid-section'
import HomePage from '../components/home.page'

const Index = props => (
  <Layout>
    {/*
    <Hero />

    <div>
      <GridSection name="what-we-do">
        <Box sx={{ gridArea: `1 / 1 / 2 / 7` }}>
          <Styled.h2>What We Do</Styled.h2>
          <Box sx={{ mt: 5 }} />
        </Box>
        <Box sx={{ gridArea: `1 / 6 / 2 / 13` }}>
          <Flex
            sx={{
              alignItems: `center`,
              justifyContent: `space-between`,
              flexDirection: [`column`, `row`],
            }}
          />
        </Box>
      </GridSection>
    </div>
    */}
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
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
