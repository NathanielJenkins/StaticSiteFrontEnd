import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import ProjectComponent from "./projectComponent"
import { projectTextData } from "../copy/projects"
import { graphql, useStaticQuery } from "gatsby"

const Projects = () => {
  const data = useStaticQuery(graphql`
    query projectsQuery {
      projectImages: allFile(
        filter: { relativeDirectory: { eq: "projects" } }
      ) {
        edges {
          node {
            childImageSharp {
              fluid {
                originalName
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `)
  //create all the project into the rows and cols
  let projectList = []
  for (let i = 0; i < data.projectImages.edges.length; i++) {
    let image = data.projectImages.edges[i].node.childImageSharp.fluid
    let imageName = image.originalName.slice(0, -4)

    if (projectTextData[imageName]) {
      image.projectTextData = projectTextData[imageName]
      projectList.push(
        <ProjectComponent key={imageName} image={image} left={i % 2} />
      )
    }
  }
  return (
    <>
      <Container>
        <Row className="m-4">
          <Col>
            <h2 className="text-center">
              Our team has helped start-ups build innovative products
            </h2>
          </Col>
        </Row>
      </Container>
      {projectList}
    </>
  )
}

export default Projects
