import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import Product from "../components/Product";
import axios from "axios";

const HomeScreen = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const { data } = await axios.get("/api/products");
      console.log(data);
      setProducts(data);
    }
    fetchData();
  }, []);

  return (
    <div>
      <h1>Product page</h1>
      <Row className="">
        {products?.slice(0).map((product) => (
          <Col className="mb-5" sm={12} md={6} lg={4} xl={3} key={product._id}>
            <Product product={product} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default HomeScreen;
