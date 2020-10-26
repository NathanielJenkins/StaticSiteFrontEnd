import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import styled from "styled-components"

const Styled = styled.div`
  background-color: #180c5b;
  color: white;
  font-size: 10px;
`

const Footer = () => {
  return (
    <Styled>
      <Container className="p-2">
        <Row>
          <Col>
            <span className="float-right">Eigen Research 2020</span>
          </Col>
        </Row>
      </Container>
    </Styled>
  )
}

export default Footer
