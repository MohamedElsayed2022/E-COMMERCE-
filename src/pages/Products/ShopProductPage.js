import React from 'react'
import CategoryHeader from '../../components/Category/CategoryHeader'
import { Col, Container, Row } from 'react-bootstrap'
import SearchCountResult from '../../components/utils/SearchCountResult'
import SideFilter from '../../components/utils/SideFilter'
import CardProductsContainer from '../../components/Products/CardProductsContainer'
import  Pagination from '../../components/utils/Pagination'
import ViewSearchProductsHook from '../../hook/product/view-search-products-hook'
const ShopProductPage = () => {
  const [items] = ViewSearchProductsHook()
  return (
    <div style={{minHeight:"670px"}}>
          <CategoryHeader/>
          <Container>
          <SearchCountResult title={`${items.length} نتيجة بحث ....`} />
          <Row>
            <Col xs="2" sm="2" md="1" className='d-flex'>
               <SideFilter/>
            </Col>
            <Col xs="10" sm="10" md="11">
                <CardProductsContainer products={items}/>
            </Col>

          </Row>
          <Pagination/>
          </Container>

    </div>
  )
}

export default ShopProductPage
