import React from 'react'
import { Row } from 'react-bootstrap'
import ProductCard from '../Products/ProductCard'
import Pagination from '../utils/Pagination'

const UserFavoriteProduct = () => {
  return (
    <div>
              <div className="admin-content-text pb-2">  قائمة المفضلة </div>
              <Row className='justify-content-start'>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>



              </Row>
              <Pagination/>
    </div>
  )
}

export default UserFavoriteProduct
