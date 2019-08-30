import { graphql, useStaticQuery } from "gatsby"

const useBuildTime = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        buildTime(formatString: "DD/MM/YYYY")
      }
    }
  `)
  return data.site.buildTime
}

export default useBuildTime
