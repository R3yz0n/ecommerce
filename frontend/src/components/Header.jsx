import React from "react";
import { Badge, Container, Navbar } from "react-bootstrap";
import NavDropdown from "react-bootstrap/NavDropdown";
import Nav from "react-bootstrap/Nav";
import { FaShoppingCart, FaUser } from "react-icons/fa";
import { LinkContainer } from "react-router-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useLogoutMutation } from "../store/slices/userApiSlice";
import { logout } from "../store/slices/authSlice";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const { cartItems } = useSelector((state) => state.cart);
  const { userInfo } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [logoutService] = useLogoutMutation();

  const logoutHandler = async () => {
    try {
      const a = await logoutService().unwrap();
      dispatch(logout());
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <header>
      <Navbar expand="sm " bg="dark" variant="dark" style={{ width: "100vw" }} collapseOnSelect>
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand>Ecommerce</Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto ">
              <LinkContainer to="/cart">
                <Nav.Link className=" d-flex  align-items-center gap-2 ">
                  <FaShoppingCart />
                  Cart
                  {cartItems.length > 0 && (
                    <Badge bg="danger">{cartItems.reduce((acc, c) => acc + c.qty, 0)}</Badge>
                  )}
                </Nav.Link>
              </LinkContainer>
              {userInfo ? (
                <NavDropdown title={userInfo.name} id="username">
                  <LinkContainer to="/profile">
                    <NavDropdown.Item>Profile</NavDropdown.Item>
                  </LinkContainer>
                  <NavDropdown.Item onClick={logoutHandler}>Logout</NavDropdown.Item>
                </NavDropdown>
              ) : (
                <LinkContainer to="/login">
                  <Nav.Link className="d-flex gap-2 align-items-center">
                    <FaUser />
                    Sign In
                  </Nav.Link>
                </LinkContainer>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
