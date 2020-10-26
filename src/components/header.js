import React from "react"
import { Navbar, Nav } from "react-bootstrap"
import { Link } from "gatsby"
import styled from "styled-components"

import logo from "../images/logo.png"

const Styled = styled.div`
  .nav-link {
    color: black !important;
    padding-right: 25px !important;
    padding-left: 25px !important;
  }
  .nav-link:hover {
    color: grey !important;
  }
`

const Header = () => {
  return (
    <Styled>
      <Navbar>
        <Link className="ml-auto" to="/">
          <Navbar.Brand>
            <img
              alt=""
              src={logo}
              width="50"
              height="50"
              className="d-inline-block align-top"
            />
          </Navbar.Brand>
        </Link>

        <Nav className="mx-auto">
          <Link className="nav-link" to="/">
            About
          </Link>
          <Link className="nav-link" to="/projects">
            Capabilities
          </Link>
        </Nav>
        <Nav className="mr-auto">
          <Link className="btn btn-danger" to="/contact">
            Contact
          </Link>
        </Nav>
      </Navbar>
    </Styled>
  )
}

export default Header
