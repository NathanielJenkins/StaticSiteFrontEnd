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

  const imageSideCol = (
    <Col className="m-4">
      <Img className="shadow rounded" fluid={image} />
    </Col>
  )
  const textSideCol = (
    <Col className="m-4 my-auto">
      <span>
        <h2>{image.projectTextData.title}</h2>
        <p className="grey">{image.projectTextData.des}</p>
      </span>
    </Col>
  )

  return (
    <Styled>
      <div className={`${rowClass} p-4 p-4`}>
        <Container>
          <Row>
            {left ? (
              <>
                {imageSideCol}
                {textSideCol}
              </>
            ) : (
              <>
                {textSideCol}
                {imageSideCol}
              </>
            )}
          </Row>
        </Container>
      </div>
    </Styled>
  )
}

export default ProjectComponent
