import React, { useState, useEffect } from "react"
import { Container, Row, Col } from "react-bootstrap"
import styled from "styled-components"
import { projectTextData } from "../copy/projects"
import Img from "gatsby-image"
import { graphql, useStaticQuery, Link } from "gatsby"

const Styled = styled.div`
  .active {
    background-color: #d9d8fa;
  }
  .grey {
    background-color: none;
  }
`

const ProjectSummary = () => {
  const data = useStaticQuery(graphql`
    query projectsSummaryQuery {
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

  //switch the photos with setInterval
  const [imageIndex, setImageIndex] = useState(0)
  const images = data.projectImages.edges

  useEffect(() => {
    setTimeout(() => {
      if (imageIndex >= images.length - 1) {
        setImageIndex(0)
      } else {
        setImageIndex(imageIndex + 1)
      }
    }, 5000)
  }, [imageIndex, images.length])

  return (
    <Styled>
      <Container>
        <Row>
          <Col md={6} className="my-auto">
            <Img
              className="shadow rounded mb-4"
              fluid={images[imageIndex].node.childImageSharp.fluid}
            />
            <h3>Our team has helped start-ups build innovative products</h3>
            <Link className="float-right btn btn-outline-danger" to="/projects">
              See Projects
            </Link>
          </Col>
          <Col md={6}>
            {images.map((value, index) => {
              const image = value.node.childImageSharp.fluid
              return (
                <SummaryItem
                  key={index}
                  lookUp={image.originalName.slice(0, -4)}
                  background={index === imageIndex ? "active" : "grey"}
                />
              )
            })}
          </Col>
        </Row>
      </Container>
    </Styled>
  )
}

const SummaryItem = ({ lookUp, background }) => {
  const textData = projectTextData[lookUp]

  return (
    <Row className="mb-2">
      <Col>
        <div className={`summary-item p-2 rounded ${background}`}>
          <h6>
            <span style={{ color: "#444EA0" }}>
              {textData.icon} {textData.title}
            </span>{" "}
          </h6>
          <span style={{ fontSize: "15px", color: "grey" }}>
            {textData.des}
          </span>
        </div>
      </Col>
    </Row>
  )
}

export default ProjectSummary
