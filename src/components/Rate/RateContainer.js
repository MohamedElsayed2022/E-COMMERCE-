import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import rate from "../../images/rate.png";
import RateItem from "./RateItem";
import RatePost from "./RatePost";
import Pagination from '../utils/Pagination'
import CardProductsContainer from '../Products/CardProductsContainer'
import AddReviewHook from "../../hook/review/add-review-hook";
const RateContainer = ({ allreviews , id , rateQty , rateAvg }) => {

  // const [onChangeReview, onChangeStars, review, stars , onSubmit , reviews] = AddReviewHook(id)

  return (
    <Container className="rate-container">
      <Row>
        <Col className="d-flex align-items-center">
          <div clas="sub-tile d-inline p-1">التقييمات</div>
          <img
            src={rate}
            alt="Rate"
            className="me-2"
            height="16px"
            width="16px"
          />
          <div className="cat-rate d-inline  p-1 pt-2">{rateQty}</div>
          <div className="rate-count d-inline p-1 pt-2">({rateAvg} تقييم)</div>
        </Col>
      </Row>
      <RatePost id={id}/>
      {
        allreviews ? (
          allreviews.map(review => (
            <RateItem key={review._id} review={review} />
          ))

        ): <h2 className="text-danger text-center mt-2">لاتوجد تقييمات</h2>
      }
      <Pagination/>

    </Container>
  );
};

export default RateContainer;
