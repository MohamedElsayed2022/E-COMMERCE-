import React from 'react'
import { Col, Row } from 'react-bootstrap'
import rate from "../../images/rate.png";
const RateItem = ({review}) => {
  return (
    <div>
      
      <Row className='mt-3'>
        <Col className="d-flex me-5">
          <div className="rate-name d-inline ms-2">{review.user.name} </div>
          <img
            src={rate}
            alt="Rate"
            className=""
            width="16px"
            height="16px"
          />
          <div className="cat-rate me-1  d-inline ">{review.rating}</div>
        </Col>
      </Row>
      <Row className='border-bottom mx-2'>
        <Col className='d-flex me-4 pb-2'>
          <div className="rate-description ms-2 mt-2 d-inline">
            {review.review}
          </div>
        </Col>
      </Row>
    </div>
  )
}

export default RateItem
