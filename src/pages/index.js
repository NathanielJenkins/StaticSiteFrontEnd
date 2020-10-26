import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import HeaderImage from "../components/headerImage"
import Helped from "../components/helped"
import ProjectSummary from "../components/projectSummary"

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <HeaderImage />
      <Helped />
      <ProjectSummary />
    </Layout>
  )
}

export default IndexPage
