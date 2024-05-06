import React from "react";
import { Container, Row } from "react-bootstrap";
import SubTitle from "../utils/SubTitle";
import ProductCard from "./ProductCard";

const CardProductsContainer = ({ title, btntitle, PathTitle, products }) => {
  return (
    <Container>
      {products ? (
        <SubTitle title={title} btntitle={btntitle} PathTitle={PathTitle} />
      ) : null}
      <Row className="my-2 d-flex justify-content-between">
        {products
          ? products.map((product, index) => (
              <ProductCard item={product} key={index} />
            ))
          : null}
      </Row>
    </Container>
  );
};

export default CardProductsContainer;
