import React from 'react'
import { Col, Row } from "react-bootstrap";
import mobile from "../../images/mobile.png";
import deleteicon from "../../images/delete.png";
import { Link } from 'react-router-dom';
const AdminAllOrdersItem = () => {
  return (
<Col xs="12" className="cart-item-body my-2 d-flex px-2">
    <Link to="/admin/allorders/23"  className="cart-item-body my-2 px-1 d-flex text-decoration-none" >
    <img src={mobile} width="160px" height="197px" alt="Mobile" />
      <div className="w-100">
        <Row className="justify-content-between">
          <Col sm="12" className="d-flex justify-content-between">
            <div className="cat-text p-2 d-inline">طلب رقم #235485</div>
            <div className="d-flex pt-2">
              {/* <img
                src={deleteicon}
                height="24px"
                width="20px"
                alt="Delete Item"
              /> */}
              <div className="cat-text me-2 d-inline">ازالة </div>
            </div>
          </Col>
        </Row>
        <Row className="justify-content-center mt-2">
        <Col sm="12" className=" d-flex flex-row justify-content-start">
            <div className="cat-title pt-2 d-inline">
              عندما يجتمع محمد السيد عبداله محمد
            </div>
            <div className="d-inline pt-2 cat-rate me-2">4.5</div>
          </Col>
        </Row>
        <Row>
          <Col sm="12" className="mt-1 d-flex">
            <div className="cat-text d-inline">الماركة : </div>
            <div className="barnd-text me-1 d-inline mx-1">ابل </div>
          </Col>
        </Row>
        <Row>
          <Col sm="12" className="mt-1">
            <div
              className="color ms-2 border"
              style={{ backgroundColor: "#E52C2C" }}
            ></div>{" "}
          </Col>
        </Row>
        <Row className="justify-content-between">
        <Col sm="12" className=" d-flex flex-row justify-content-between">
                <div className="d-flex d-inline pt-2">
                <div className="cat-text d-inline">الكمية :</div>
              <input
                  className="mx-2 "
                  type="number"
                  style={{ width: "40px", height: "25px" }}
                />
                </div>
                <div className="barnd-text d-inline pt-2">3000 جنيه</div>
              
      
            </Col>
            
        </Row>
      </div>
      </Link>

    </Col>    
  )
}

export default AdminAllOrdersItem
