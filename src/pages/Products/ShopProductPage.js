import React from 'react'
import CategoryHeader from '../../components/Category/CategoryHeader'
import { Col, Container, Row } from 'react-bootstrap'
import SearchCountResult from '../../components/utils/SearchCountResult'
import SideFilter from '../../components/utils/SideFilter'
import CardProductsContainer from '../../components/Products/CardProductsContainer'
import  Pagination from '../../components/utils/Pagination'
const ShopProductPage = () => {
  return (
    <div style={{minHeight:"670px"}}>
          <CategoryHeader/>
          <Container>
          <SearchCountResult title=" 400 نتيجة بحث ...."/>
          <Row>
            <Col xs="2" sm="2" md="1" className='d-flex'>
               <SideFilter/>
            </Col>
            <Col xs="10" sm="10" md="11">
                <CardProductsContainer/>
            </Col>

          </Row>
          <Pagination/>
          </Container>

    </div>
  )
}

export default ShopProductPage
