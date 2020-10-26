import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Projects from "../components/projects"

const ProjectsPage = () => {
  return (
    <Layout>
      <SEO title="Products" />
      <Projects />
    </Layout>
  )
}

export default ProjectsPage
