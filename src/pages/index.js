import React from "react"
import { Box, Flex, jsx, Styled } from "theme-ui"
import Layout from "../components/layout"
import Hero from "../components/hero"
import GridSection from "../components/grid-section"
import HomePage from "../components/home.page"

const Index = () => (
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
    <HomePage />
  </Layout>
)

export default Index
