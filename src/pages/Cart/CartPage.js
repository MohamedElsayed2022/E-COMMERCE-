import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import CartItem from '../../components/Cart/CardItem'
import CartCheckout from '../../components/Cart/CartCheckout'
import ViewProductInCart from '../../hook/cart/view-product-in-cart'

const CartPage = () => {
  const [cartNum , products] = ViewProductInCart()
  return (
    <Container style={{minHeight:"670px"}}>
          <Row>
                <div className='cart-title mt-4'>عربة التسوق</div>
            </Row>
      <Row>
        <Col md="9" >
        {products ? (
          products.map((product, index) => (
            <CartItem key={index} product={product} />
          ))
        ) : (null)}
          

        </Col>
        <Col md="3" > 
         <CartCheckout/>
        </Col>
      </Row>
    </Container>
  )
}

export default CartPage
