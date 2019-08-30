/** @jsx jsx */
import { Container, jsx, Styled, Box, Flex, useColorMode } from "theme-ui"
// import Logo from "../icons/logo";

const AboutMe = () => {
  const [mode] = useColorMode()
  const isStrange = mode === `strangerThings`
  return (
    <section data-name="about-me" sx={{ position: `relative`, py: 6 }}>
      <Container>
        <div sx={{ maxWidth: `760px` }}>
          <Styled.h1 as="h2">About Me</Styled.h1>
          <Styled.p>
            Hi{` `}
            <span role="img" aria-label="Hand Wave">
              👋
            </span>
          </Styled.p>
          <Styled.p>
            I’m Lennart — also known as LekoArts — and I’m a self-taught and
            passionate graphic designer & front-end developer from Germany.
          </Styled.p>
          <Styled.p>
            You can find me on my{" "}
            <Styled.a href="https://www.lekoarts.de/en">homepage</Styled.a>{" "}
            where I blog about front-end development and design. I also like to
            create 3D art or other experiments which you can find on
            {` `}
            <Styled.a href="https://www.instagram.com/lekoarts.de">
              Instagram
            </Styled.a>
            .
          </Styled.p>
          <Styled.p>
            I started using Gatsby in its early stages and since then created a
            bunch of starters aimed at designers & photographers. I myself
            learned so much with free and open source content that I wanted to
            contribute back. Since the starters are a huge success it’s only
            logical to convert those to Gatsby themes! Of course more themes
            will follow in the future. My Gatsby themes are created with{` `}
            <Styled.a href="https://theme-ui.com/">Theme UI</Styled.a> — which
            makes them really customizable{` `}
            <span role="img" aria-label="Party Popper">
              🎉
            </span>
            .
          </Styled.p>
          <Styled.p>
            If you're interested in how I built this site you should definitely
            read my blogpost{` `}
            <Styled.a href="https://www.lekoarts.de/en/blog/how-i-used-theme-ui-to-build-my-gatsby-themes-library">
              "How I used Theme UI to build my Gatsby Themes library"
            </Styled.a>
            .
          </Styled.p>
        </div>
      </Container>
      {/* <Logo sx={{ */}
      {/*   width: [70, 70, 90], */}
      {/*   height: [70, 70, 90], */}
      {/*   top: `105px`, */}
      {/*   right: [`40px`, `40px`, `240px`], */}
      {/*   position: `absolute`, */}
      {/*   color: `white`, */}
      {/* }}/> */}
      <Container sx={{ mt: [6, 7], position: `relative` }}>
        <Box
          sx={{
            borderRadius: `xl`,
            variant: isStrange
              ? `gradients.strangerThings`
              : `gradients.indigo`,
            p: [4, 4, 5],
            color: `white`,
            boxShadow: t => `0px 20px 25px ${t.colors.shadow}`,
          }}
        >
          <h3
            sx={{
              fontWeight: `bold`,
              fontSize: [2, 3, 4],
              textAlign: `center`,
              mb: 4,
              mt: 0,
              textShadow: `0 1px 1px rgba(0, 0, 0, 0.2)`,
            }}
          >
            Do you want to support me?
          </h3>
          <Styled.p sx={{ textShadow: `0 1px 1px rgba(0, 0, 0, 0.2)` }}>
            I'm grateful for every form of support: Share this website with your
            friends & colleagues, buy me a tea ('cause I don't drink coffee), or
            consider supporting me on Patreon. The latter will allow me to
            allocate more time to maintaining these themes. Thanks for using my
            themes!{` `}
            <span role="img" aria-label="Smile">
              😊
            </span>
          </Styled.p>
          <Flex
            sx={{
              justifyContent: `space-evenly`,
              mt: 4,
              flexWrap: `wrap`,
              a: { mt: 3, textAlign: `center` },
              div: { mt: 3 },
              flexDirection: [`column`, `row`],
            }}
          >
            <a
              href="https://leko.io/newsletter-themes"
              sx={{ variant: `buttons.outline` }}
            >
              Newsletter
            </a>
            <a
              href="https://www.patreon.com/lekoarts"
              sx={{ variant: `buttons.white` }}
            >
              Patreon
            </a>

            <a
              href="https://ko-fi.com/N4N0W91I"
              sx={{ variant: `buttons.outline` }}
            >
              Buy me a tea
            </a>
          </Flex>
        </Box>
      </Container>
    </section>
  )
}

export default AboutMe
