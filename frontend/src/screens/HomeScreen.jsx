import { Col, Row } from "react-bootstrap";
import Product from "../components/Product";
import { useGetProductsQuery } from "../store/slices/productApiSlice";

const HomeScreen = () => {
  const { data, isLoading, isError, error } = useGetProductsQuery();
  return (
    <div>
      <h1>Product page</h1>
      {isLoading ? (
        <>Loadiing</>
      ) : error ? (
        <>{error?.data.message || error.error}</>
      ) : (
        <Row className="">
          {data?.map((product) => (
            <Col className="mb-5" sm={12} md={6} lg={4} xl={3} key={product._id}>
              <Product product={product} />
            </Col>
          ))}
        </Row>
      )}
    </div>
  );
};

export default HomeScreen;
