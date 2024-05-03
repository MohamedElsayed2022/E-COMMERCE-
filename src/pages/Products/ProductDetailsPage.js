import React from 'react'
import CategoryHeader from '../../components/Category/CategoryHeader'
import { Container } from 'react-bootstrap'
import ProductDetails from '../../components/Products/ProductDetails'
import RateContainer from '../../components/Rate/RateContainer'
import CardProductsContainer from '../../components/Products/CardProductsContainer'

const ProductDetailsPage = () => {
  return (
    <div style={{minHeight:"670px"}}>
      <CategoryHeader/>
      <Container>
        <ProductDetails/>
        <RateContainer/>
        <CardProductsContainer title="منتجات قد تعجبك"  />
      </Container>
    </div>
  )
}

export default ProductDetailsPage
