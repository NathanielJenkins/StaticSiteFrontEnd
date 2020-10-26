import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import Img from "gatsby-image"
import styled from "styled-components"

const Styled = styled.div`
  .left {
    background-color: #d9d8fa;
  }
  .grey {
    color: grey;
  }
`

const ProjectComponent = ({ image, left }) => {
  let rowClass = "right"
  if (left) {
    rowClass = "left"
  }

  const imageSideCol = reorder => {
    let reorderClass = ""
    if (reorder) reorderClass = "order-md-1"
    return (
      <Col md className={`col-sm-6 m-4 my-auto ${reorderClass}`}>
        <Img className="shadow rounded" fluid={image} />
      </Col>
    )
  }
  const textSideCol = reorder => {
    let reorderClass = ""
    if (reorder) reorderClass = "order-md-12"
    return (
      <Col md className={`m-4 my-auto ${reorderClass}`}>
        <span>
          <h2>{image.projectTextData.title}</h2>
          <p className="grey">{image.projectTextData.des}</p>
        </span>
      </Col>
    )
  }

  return (
    <Styled>
      <div className={`${rowClass} p-4 p-4`}>
        <Container>
          <Row>
            <>
              {textSideCol(left)}
              {imageSideCol(left)}
            </>
          </Row>
        </Container>
      </div>
    </Styled>
  )
}

export default ProjectComponent
