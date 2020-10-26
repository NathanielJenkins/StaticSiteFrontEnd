import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import Img from "gatsby-image"
import styled from "styled-components"

import { graphql, useStaticQuery, Link } from "gatsby"

const Styled = styled.div`
  .grey-text {
    color: grey;
  }
  .small-text {
    font-size: 12px;
  }
`

const HeaderImage = () => {
  const data = useStaticQuery(graphql`
    query headerQuery {
      headerImage: file(relativePath: { eq: "header-image.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Styled>
      <Container className="mt-4">
        <Row>
          <Col md={6} className="my-auto">
            <h2>Eigen Research is a team of experts.</h2>
            <h6>
              Help your organization stay at the cutting edge of research and
              technology.
            </h6>
            <hr />
            <p className="grey-text">
              Machine learning scientists and data engineers to augment your
              core engineering team
            </p>

            <Link className="btn btn-danger" to="/contact">
              Learn More
            </Link>
          </Col>
          <Col md={6} className="my-auto">
            <Img fluid={data.headerImage.childImageSharp.fluid} />
          </Col>
        </Row>
      </Container>
    </Styled>
  )
}

export default HeaderImage
