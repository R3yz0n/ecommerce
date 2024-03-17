import React, { useEffect, useState } from "react";
import FormContainer from "../components/FormContainer";
import CheckoutSteps from "../components/CheckoutSteps";
import { Button, Col, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { savePaymentMethod } from "../store/slices/cartSlice";

const PaymentScreen = () => {
  const [paymentMethod, setPaymentMehod] = useState("PayPal");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { shippingAddress } = useSelector((state) => state.cart);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(savePaymentMethod(paymentMethod));
    navigate("/placeorder");
  };
  useEffect(() => {
    if (!shippingAddress) {
      navigate("/shipping");
    }
  }, []);
  return (
    <FormContainer>
      <CheckoutSteps step1 step2 step3 />
      <h1>Payment Method</h1>
      <Form onSubmit={submitHandler}>
        <Form.Group>
          <Form.Label as="legend">Select Method</Form.Label>
          <Col>
            <Form.Check
              type="radio"
              label="PayPal or Credit Card"
              id="PayPal"
              name="paymentMethod"
              value="PayPal"
              checked
              onChange={(e) => setPaymentMehod(e.target.value)}
            ></Form.Check>
            <Form.Check
              className="mt-2"
              type="radio"
              label="Stripe"
              id="Stripe"
              name="paymentMethod"
              value="Stripe"
              onChange={(e) => setPaymentMehod(e.target.value)}
            ></Form.Check>

            <Button type="submit" variant="primary" className="mt-4">
              Continue{" "}
            </Button>
          </Col>
        </Form.Group>
      </Form>
    </FormContainer>
  );
};

export default PaymentScreen;
