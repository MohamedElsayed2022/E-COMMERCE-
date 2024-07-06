import React from "react";
import { Form, FormControl } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Logo from '../../images/logo.png'
import Login from '../../images/login.png'
import Cart from '../../images/cart.png'
import { Link } from "react-router-dom";
import NavbarSearchHook from "../../hook/navbar/navbar-search-hook";
const NavbarLogin = () => {
  const [ OnChangeSearch , searchWord] = NavbarSearchHook()
  let word = ""
  if(localStorage.getItem("searchWord") != null)
      word = localStorage.getItem("searchWord")
  return (
    <Navbar className="sticky-top" bg="dark" variant="dark" expand="sm">
    <Container>
        <Navbar.Brand href="#home">
          <a href="/">
            <img src={Logo} alt="logo" className="logo"/>
          </a>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <FormControl 
        onChange={OnChangeSearch}
                value={word}
                type="search"
                placeholder="ابحث..."
                className="me-2 w-100 text-center"
                aria-label="Search"
              />
          <Nav className="me-auto">
         
            <Nav.Link href="/login" className="nav-text d-flex mt-3  gap-2 justify-content-center  ">
              <img src={Login} alt="sfvs" className="login-img"/>
              <p style={{color:"white"}}>دخول</p>
            </Nav.Link>
            <Nav.Link
              href="/cart"
              className="nav-text position-relative d-flex gap-2 mt-3 justify-content-center"
              style={{ color: "white" }}
            >
              <img src={Cart} className="login-img" alt="sfvs" />
              <p style={{ color: "white" }}>العربه</p>
              <span class="position-absolute top-10 start-0 translate-middle badge rounded-pill bg-danger">
                10
              </span>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarLogin;
