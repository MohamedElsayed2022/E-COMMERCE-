import React, { useState } from "react";
import { Button, Col, Container, Modal, Row } from "react-bootstrap";
import CartItem from "../../components/Cart/CardItem";
import CartCheckout from "../../components/Cart/CartCheckout";
import ViewProductInCart from "../../hook/cart/view-product-in-cart";
import ClearItemsCart from "../../hook/cart/clear-items-cart";
import { ToastContainer } from "react-toastify";

const CartPage = () => {
  const [
    cartNum,
    cartItems,
    couponNameRes,
    totalCartPrice,
    totalCartPriceAfterDiscount,
  ] = ViewProductInCart();

  return (
    <Container style={{ minHeight: "670px" }}>
      <Row>
        <div className="cart-title mt-4">عربة التسوق</div>
      </Row>
      <Row>
        <Col md="9">
          {cartItems && cartItems.length > 0 ? (
            cartItems.map((product, index) => (
              <CartItem key={index} product={product} />
            ))
          ) : (
            <h2 className="text-danger text-center mt-2">
              لاتوجد منتجات فى العربة
            </h2>
          )}
        </Col>
        <Col md="3">
          <CartCheckout
            couponNameRes={couponNameRes}
            totalCartPrice={totalCartPrice}
            totalCartPriceAfterDiscount={totalCartPriceAfterDiscount}
          />
        </Col>
      </Row>
      <ToastContainer />
    </Container>
  );
};

export default CartPage;
