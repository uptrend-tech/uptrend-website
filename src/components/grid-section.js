/** @jsx jsx */
import { Container, jsx } from "theme-ui"

const GridSection = ({ children, name }) => {
  // const isBigScreen = useMediaQuery({ minWidth: `1100px` })
  // const site = useSiteMetadata()

  return (
    <Container
      as="section"
      data-name={name}
      // data-name="hero"
      sx={{
        display: "grid",
        gridTemplateColumns: `repeat(12, 1fr); `,
        gridColumnGap: "29px",
        gridRowGap: 0,
        maxWidth: "1280px",
        mx: "auto",
      }}
    >
      {children}
    </Container>
  )
}

export default GridSection
