import React, { useEffect } from 'react'
import CategoryHeader from '../../components/Category/CategoryHeader'
import { Container } from 'react-bootstrap'
import ProductDetails from '../../components/Products/ProductDetails'
import RateContainer from '../../components/Rate/RateContainer'
import CardProductsContainer from '../../components/Products/CardProductsContainer'
import { useDispatch } from 'react-redux'
import { getProductLike } from '../../Redux/Actions/productsAction'
import ViewProductsDetailsHook from '../../hook/product/view-products-details-hook'
import { useParams } from 'react-router-dom'

const ProductDetailsPage = () => {
  const {id} = useParams()
  const [item, images, cat , brand , items] = ViewProductsDetailsHook(id)
  return (
    <div style={{minHeight:"670px"}}>
      <CategoryHeader/>
      <Container>
        <ProductDetails />
        <RateContainer/>
        <CardProductsContainer products={items} title="منتجات قد تعجبك"  />
      </Container>
    </div>
  )
}

export default ProductDetailsPage
