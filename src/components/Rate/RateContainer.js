import React, { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import rate from "../../images/rate.png";
import RateItem from "./RateItem";
import RatePost from "./RatePost";
import Pagination from "../utils/Pagination";
import CardProductsContainer from "../Products/CardProductsContainer";
import AddReviewHook from "../../hook/review/add-rate-hook";
import ViewAllHook from "../../hook/review/view-all-review-hook";
import ViewAllReviewHook from "../../hook/review/view-all-review-hook";
const RateContainer = ({ id, rateQty, rateAvg }) => {
  // const [onChangeReview, onChangeStars, review, stars , onSubmit , reviews] = AddReviewHook(id)
  const [allReviews, onPress, loading] = ViewAllReviewHook(id);

  useEffect(() => {
    if (allReviews) console.log(allReviews);
  }, [allReviews]);
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
          <div className="cat-rate d-inline  p-1 pt-2">{rateAvg}</div>
          <div className="rate-count d-inline p-1 pt-2">({rateQty} تقييم)</div>
        </Col>
      </Row>
      <RatePost id={id} />
      {allReviews.data && allReviews.data.length > 0 ? (
        allReviews.data.map((review) => (
          <RateItem key={review._id} review={review} />
        ))
      ) : (
        <div class="spinner-border text-center d-flex justify-content-center mt-2 mx-auto"role="status"></div>
      )}
      {allReviews.paginationResult &&
      allReviews.paginationResult.numberOfPages >= 2 ? (
        <Pagination
          pageCount={
            allReviews.paginationResult
              ? allReviews.paginationResult.numberOfPages
              : 0
          }
          onPress={onPress}
        />
      ) : null}{" "}
    </Container>
  );
};

export default RateContainer;
