import React, { useEffect, useState } from "react";
import FormContainer from "../components/FormContainer";
import { Button, Col, Form, Row } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useLoginMutation } from "../store/slices/userApiSlice";
import { setCredentials } from "../store/slices/authSlice";
import { toast } from "react-toastify";
import axios from "axios";

const LoginScreen = () => {
  const dispatch = useDispatch();
  const { userInfo } = useSelector((state) => state.auth);
  const { search } = useLocation();
  const navigate = useNavigate();
  const [login, { isLoading, isError, error }] = useLoginMutation();
  // console.log(login);
  // console.log(isLoading);
  const searchParams = new URLSearchParams(search);
  const redirect = searchParams.get("redirect") || "/";
  const [password, setPassword] = useState("123456");
  const [email, setEmail] = useState("sagar@test.com");

  useEffect(() => {
    if (userInfo) {
      navigate(redirect);
    }
  }, [userInfo, redirect, navigate]);
  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const res = await login({ email, password }).unwrap();

      dispatch(setCredentials({ ...res }));
    } catch (error) {
      toast.error(error.data?.message || error.message || "An error occurred. Please try again.");
      console.log(error.data?.message || error);
    }
  };
  return (
    <FormContainer>
      <h1>Sign In</h1>
      <Form onSubmit={submitHandler}>
        <Form.Group controlId="email">
          <Form.Label className="mt-4">Email Address</Form.Label>
          <Form.Control
            type="email"
            placeholder="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId="password">
          <Form.Label className="mt-4">Password </Form.Label>
          <Form.Control
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></Form.Control>
        </Form.Group>
        {isError && (
          <div className="mt-3 text-danger">
            {error?.data?.message || error?.message || "An error occurred. Please try again."}
          </div>
        )}
        <Button type="submit" variant="primary" className="mt-3 px-4" disabled={isLoading}>
          {isLoading ? "Loading..." : "Sign In"}
        </Button>
      </Form>
      <Row className="mt-3">
        <Col>
          New Customer?{" "}
          <Link to={redirect ? `/register?redirect=${redirect}` : "/register"}>Register</Link>
        </Col>
      </Row>
    </FormContainer>
  );
};

export default LoginScreen;
