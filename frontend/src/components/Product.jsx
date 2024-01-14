import React from "react";
import { Card, CardBody, CardImg, CardText, CardTitle } from "react-bootstrap";
import { Link } from "react-router-dom";
import Rating from "./Rating";

const Product = ({ product }) => {
  // console.log("hi");
  return (
    <Card className="t">
      <Link to={`/product/${product._id}`}>
        <CardImg src={product.image} variant="top" />
      </Link>

      <CardBody>
        <Link to={`/product/${product._id}`} className="text-decoration-none text-body-secondary">
          <CardTitle as={"div"}>
            <strong>{product.name}</strong>
          </CardTitle>
        </Link>

        <CardText as="h3" className="text-body opacity-75">
          ${product.price}
        </CardText>

        <CardText as="div">
          <Rating value={product.rating} text={product.numReviews} />
        </CardText>
      </CardBody>
    </Card>
  );
};

export default Product;
