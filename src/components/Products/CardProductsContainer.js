import React from 'react'
import { Container, Row } from 'react-bootstrap'
import SubTitle from '../utils/SubTitle'
import ProductCard from './ProductCard'

const CardProductsContainer = ({title , btntitle , PathTitle}) => {
  return (
    <Container>
    <SubTitle title={title} btntitle={btntitle} PathTitle={PathTitle}/>
    <Row className='my-2 d-flex justify-content-between'>
    <ProductCard/>
    <ProductCard/>
    <ProductCard/>
    <ProductCard/>
   


   
    
    </Row>


</Container>
  )
}

export default CardProductsContainer
