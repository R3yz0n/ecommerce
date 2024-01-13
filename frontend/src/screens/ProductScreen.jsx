import React from "react";
import {
  Container,
  Row,
  Col,
  Navbar,
  Nav,
  InputGroup,
  FormControl,
  Button,
  Card,
  NavDropdown,
} from "react-bootstrap";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { products } from "../products";
import { useParams } from "react-router-dom";

const ProductScreen = () => {
  const { id: productId } = useParams();
  const product = products.find((product) => product._id === productId);
  console.log(product);
  return (
    <>
      {/* Content */}
      <section className="py-5">
        <Container>
          <Row className="gx-5">
            <Col lg={6}>
              <div className="border rounded-4 mb-3 d-flex justify-content-center">
                <a
                  data-fslightbox="mygalley"
                  className="rounded-4"
                  target="_blank"
                  data-type="image"
                  href="https://bootstrap-ecommerce.com/bootstrap5-ecommerce/images/items/detail1/big.webp"
                >
                  <img
                    style={{ maxWidth: "100%", maxHeight: "100vh", margin: "auto" }}
                    className="rounded-4 fit"
                    // src="https://bootstrap-ecommerce.com/bootstrap5-ecommerce/images/items/detail1/big.webp"
                    src={product.image}
                    alt="Product"
                  />
                </a>
              </div>

              {/* simliar items list */}
              {/* <div className="d-flex justify-content-center mb-3">
                {[1, 2, 3, 4, 5].map((index) => (
                  <a
                    key={index}
                    data-fslightbox="mygalley"
                    className="border mx-1 rounded-2 item-thumb"
                    target="_blank"
                    data-type="image"
                    href={`https://bootstrap-ecommerce.com/bootstrap5-ecommerce/images/items/detail1/big${index}.webp`}
                  >
                    <img
                      width="60"
                      height="60"
                      className="rounded-2"
                      src={`https://bootstrap-ecommerce.com/bootstrap5-ecommerce/images/items/detail1/big${index}.webp`}
                      alt={`Thumbnail ${index}`}
                    />
                  </a>
                ))}
              </div> */}
            </Col>
            <Col lg={6}>
              <div className="ps-lg-3">
                <h4 className="title text-dark">
                  Quality Men's Hoodie for Winter, Men's Fashion <br />
                  Casual Hoodie
                </h4>
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
                  <span className="h5">$75.99</span>
                  <span className="ms-2 text-muted text-decoration-line-through">$89.99</span>
                </div>

                <div className="mb-3">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam iaculis egestas
                    laoreet. Etiam faucibus massa sed risus lacinia in vulputate dolor imperdiet.
                    Curabitur pharetra, purus a commodo dignissim, sapien nulla tempus nisi, et
                    varius nulla urna at arcu. Curabitur pharetra, purus a commodo dignissim, sapien
                    nulla tempus nisi, et varius nulla urna at arcu.
                  </p>
                </div>

                <div className="mb-3">
                  <h6>Size:</h6>
                  <div className="d-flex">
                    <div className="me-3">
                      <input className="btn-check" type="radio" name="size" id="size-s" />
                      <label className="btn btn-outline-primary" htmlFor="size-s">
                        S
                      </label>
                    </div>
                    <div className="me-3">
                      <input className="btn-check" type="radio" name="size" id="size-m" />
                      <label className="btn btn-outline-primary" htmlFor="size-m">
                        M
                      </label>
                    </div>
                    <div>
                      <input className="btn-check" type="radio" name="size" id="size-l" />
                      <label className="btn btn-outline-primary" htmlFor="size-l">
                        L
                      </label>
                    </div>
                  </div>
                </div>

                <div className="mb-3">
                  <h6>Color:</h6>
                  <div className="d-flex">
                    <div className="me-3">
                      <input className="btn-check" type="radio" name="color" id="color-blue" />
                      <label className="btn btn-outline-primary" htmlFor="color-blue">
                        Blue
                      </label>
                    </div>
                    <div className="me-3">
                      <input className="btn-check" type="radio" name="color" id="color-black" />
                      <label className="btn btn-outline-primary" htmlFor="color-black">
                        Black
                      </label>
                    </div>
                    <div>
                      <input className="btn-check" type="radio" name="color" id="color-gray" />
                      <label className="btn btn-outline-primary" htmlFor="color-gray">
                        Gray
                      </label>
                    </div>
                  </div>
                </div>

                <div className="mb-3">
                  <Button variant="primary" className="me-2">
                    Add to Cart
                  </Button>
                  <Button variant="outline-primary">Wishlist</Button>
                </div>

                <div className="mb-3">
                  <h6>Share:</h6>
                  <div className="d-flex">
                    <Button variant="light" className="me-2">
                      <i className="fab fa-facebook"></i>
                    </Button>
                    <Button variant="light" className="me-2">
                      <i className="fab fa-twitter"></i>
                    </Button>
                    <Button variant="light">
                      <i className="fab fa-pinterest"></i>
                    </Button>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      {/* Content */}
    </>
  );
};

export default ProductScreen;
