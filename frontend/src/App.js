import React, { useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Container } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getProductDetails, useGetProductDetailsQuery } from "./store/slices/productApiSlice";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProductDetails.initiate("65ae4511eb621001c7663c1e"));
  }, [dispatch]);
  return (
    <div>
      <Header />
      <main py="3">
        <Container>
          <Outlet />
        </Container>
      </main>
      <Footer />
    </div>
  );
};

export default App;
