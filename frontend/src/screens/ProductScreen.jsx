import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";
import { Container, Row, Col, Button, ListGroupItem, ListGroup, Form } from "react-bootstrap";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useGetProductDetailsQuery, useGetProductsQuery } from "../store/slices/productApiSlice";
import { useDispatch } from "react-redux";
import { addToCart } from "../store/slices/cartSlice";

const ProductScreen = () => {
  const { id: productId } = useParams();
  const [qty, setQty] = useState(1);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { data: product, error, isLoading } = useGetProductDetailsQuery(productId);
  // console.log(error);
  const handleAddTocart = () => {
    console.log(product);
    dispatch(addToCart({ ...product, qty }));
    // navigate("/cart");
  };
  return (
    <>
      <section className="py-5">
        <Container>
          {isLoading ? (
            <>Loading</>
          ) : error ? (
            <>{error?.data?.message || error.error}</>
          ) : (
            <>
              <Row className="gx-5">
                <Col lg={6}>
                  <div className="border rounded-4 mb-3 d-flex justify-content-center">
                    <Link
                      data-fslightbox="mygalley"
                      className="rounded-4"
                      target="_blank"
                      rel="noreferrer"
                      data-type="image"
                      href="https://bootstrap-ecommerce.com/bootstrap5-ecommerce/images/items/detail1/big.webp"
                    >
                      <img
                        style={{ maxWidth: "100%", maxHeight: "100vh", margin: "auto" }}
                        className="rounded-4 fit"
                        // src="https://bootstrap-ecommerce.com/bootstrap5-ecommerce/images/items/detail1/big.webp"
                        src={product?.image}
                        alt="Product"
                      />
                    </Link>
                  </div>
                </Col>
                <Col lg={6}>
                  <div className="ps-lg-3">
                    <h4 className="title text-dark">{product?.name}</h4>
                    <div className="d-flex flex-row my-3">
                      <div className="text-warning mb-1 me-2">
                        {[1, 2, 3, 4].map((index) => (
                          <FaStar key={index} />
                        ))}
                        <FaStarHalfAlt className="ms-1" />
                        <span className="ms-1">4.5</span>
                      </div>
                      <span className="text-muted">
                        <i className="fas fa-shopping-basket fa-sm mx-1"></i>154 orders
                      </span>
                      <span className="text-success    ms-2">In stock</span>
                    </div>

                    <div className="mb-3">
                      <span className="h5">${product?.price}</span>
                      <span className="ms-2 text-muted text-decoration-line-through">$89.99</span>
                    </div>

                    <div className="mb-3">
                      <p>{product?.description}</p>
                    </div>

                    <div className="mb-3">
                      <ListGroupItem>
                        {product.countInStock > 0 && (
                          <>
                            <ListGroup.Item>
                              <Row>
                                <Col>Qty</Col>
                                <Col>
                                  <Form.Control
                                    as="select"
                                    value={qty}
                                    onChange={(e) => setQty(Number(e.target.value))}
                                  >
                                    {[...Array(product.countInStock).keys()].map((x) => (
                                      <option key={x + 1} value={x + 1}>
                                        {x + 1}
                                      </option>
                                    ))}
                                  </Form.Control>
                                </Col>
                              </Row>
                            </ListGroup.Item>
                          </>
                        )}
                      </ListGroupItem>

                      <Button variant="primary" className="me-2" onClick={handleAddTocart}>
                        Add to Cart
                      </Button>
                      <Button variant="outline-primary">Wishlist</Button>
                    </div>
                  </div>
                </Col>
              </Row>
            </>
          )}
        </Container>
      </section>
    </>
  );
};

export default ProductScreen;
