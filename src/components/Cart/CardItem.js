import React , {useEffect, useState} from "react";
import { Col, Row } from "react-bootstrap";
import mobile from "../../images/mobile.png";
import deleteicon from "../../images/delete.png";
import { useDispatch, useSelector } from 'react-redux'
import { getOneProduct } from "../../Redux/Actions/productsAction";
import { ToastContainer } from "react-toastify";

const CardItem = ({product}) => {
 
  
  return (
    <Col xs="12" className="cart-item-body my-2 d-flex px-2">
      
      <img src={product?.product?.imageCover || mobile} width="160px" height="197px" alt="" />
      <div className="w-100">
        <Row className="justify-content-between">
          <Col sm="12" className="d-flex justify-content-between">
            <div className="cat-text p-2 d-inline">{product?.product?.category?.name || ""}</div>
            <div className="d-flex pt-2">
              <img
                src={deleteicon}
                height="24px"
                width="20px"
                alt="Delete Item"
              />
              <div className="cat-text me-2 d-inline">ازالة </div>
            </div>
          </Col>
        </Row>
        <Row className="justify-content-center mt-2">
        <Col sm="12" className=" d-flex flex-row justify-content-start">
            <div className="cat-title pt-2 d-inline">
            {product?.product?.title}
            </div>
            <div className="d-inline pt-2 cat-rate me-2">{product?.product?.ratingsAverage || 0}</div>
          </Col>
        </Row>
        <Row>
          <Col sm="12" className="mt-1 d-flex">
            <div className="cat-text d-inline">الماركة : </div>
            <div className="barnd-text me-1 d-inline mx-1">{product?.product?.brand?.name}</div>
          </Col>
        </Row>
        <Row>
          <Col sm="12" className="mt-1">
          {
            product.color === "" ? null : (
              <div
              className="color ms-2 border"
              style={{ backgroundColor: product?.color }}
            ></div>
            )
          }
           
          </Col>
        </Row>
        <Row className="justify-content-between">
        <Col sm="12" className=" d-flex flex-row justify-content-between">
                <div className="d-flex d-inline pt-2">
                <div className="cat-text d-inline">الكمية :</div>
              <input
              value={product?.count}
                  className="mx-2 "
                  type="number"
                  style={{ width: "40px", height: "25px" }}
                />
                </div>
                <div className="barnd-text d-inline pt-2">{product?.price || 0} جنيه</div>
              
            </Col>
            
        </Row>
      </div>
      <ToastContainer/>

    </Col>
  );
};

export default CardItem;
