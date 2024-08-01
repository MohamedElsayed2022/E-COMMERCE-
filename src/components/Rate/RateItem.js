import React from "react";
import { Button, Col, Modal, Row } from "react-bootstrap";
import rate from "../../images/rate.png";
import { ToastContainer } from "react-toastify";
import DeleteRateHook from "../../hook/review/delete-rate-hook";
import deleteicon from "../../images/delete.png";
import editicon from "../../images/edit.png";

const RateItem = ({ review }) => {
  const [isUser ,  handleClose , handleShow , handelDelete , showDelete ] = DeleteRateHook(review);

  return (
    <div>
      <Modal show={showDelete} onHide={handleClose}>
                <Modal.Header >
                    <Modal.Title> <div className='font'>تاكيد الحذف</div></Modal.Title>
                </Modal.Header>
                <Modal.Body><div className='font'>هل انتا متاكد من حذف التقييم  ؟</div></Modal.Body>
                <Modal.Footer>
                    <Button className='font' variant="dark" onClick={handleClose}>
                        تراجع
                    </Button>
                    <Button className='font' variant="danger" onClick={handelDelete}>
                        حذف
                    </Button>
                </Modal.Footer>
            </Modal>

      <Row className="mt-3">
        <Col className="d-flex me-5">
          <div className="rate-name d-inline ms-2">{review.user.name} </div>
          <img src={rate} alt="Rate" className="" width="16px" height="16px" />
          <div className="cat-rate me-1  d-inline ">{review.rating}</div>
        </Col>
      </Row>
      <Row className="border-bottom mx-2">
        <Col className="d-flex me-4 pb-2">
          <div className="rate-description ms-2 mt-2 d-inline">
            {review.review}
          </div>
          {
            isUser === true ? (
              <div className='d-inline d-flex justify-content-end mx-end'>
              <img
                src={deleteicon}
                width="20px"
                height="20px"
                style={{ cursor: "pointer" }}
                alt="delete"
                onClick={handleShow}
              />
  
              <img
                src={editicon}
                width="20px"
                height="20px"
                style={{ cursor: "pointer" }}
                alt="edit"
              />
            </div>
            ) : null
          }
      
        </Col>
      </Row>
      <ToastContainer />
    </div>
  );
};

export default RateItem;
