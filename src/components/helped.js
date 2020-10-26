import React from "react"
import styled from "styled-components"
import { Container, Row, Col } from "react-bootstrap"
import Img from "gatsby-image"
import { graphql, useStaticQuery } from "gatsby"

const Styled = styled.div`
  background-color: #d9d8fa;
`
const Helped = () => {
  const data = useStaticQuery(graphql`
    query helpedQuery {
      helpedImages: allFile(filter: { relativeDirectory: { eq: "helped" } }) {
        edges {
          node {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `)
  //create all the helped into the rows and cols
  let helpedImages = []
  let helpedRow = []
  let counter = 0
  for (let i = 0; i < data.helpedImages.edges.length; i++) {
    let image = data.helpedImages.edges[i].node.childImageSharp.fluid
    counter++
    helpedRow.push(
      <Col sm className="p-4" key={`col-${counter}-${i}`}>
        <Img fluid={image} />
      </Col>
    )
    if (counter === 5 || i === data.helpedImages.edges.length - 1) {
      helpedImages.push(<Row key={`row-${counter}-${i}`}>{helpedRow}</Row>)
      helpedRow = []
      counter = 0
    }
  }
  return (
    <Styled className="mt-4 mb-4 pt-4 pb-4">
      <Container>
        <Row>
          <Col>
            <h2 className="text-center mb-4">
              Our team helped these organizations in the past
            </h2>
          </Col>
        </Row>
        {helpedImages}
      </Container>
    </Styled>
  )
}

export default Helped
