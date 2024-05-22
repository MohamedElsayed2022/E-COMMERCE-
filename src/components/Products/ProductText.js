import React from "react";
import { Row, Col } from "react-bootstrap";
import { useParams } from "react-router-dom";
import ViewProductsDetailsHook from "../../hook/product/view-products-details-hook";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getOneCategory } from "../../Redux/Actions/categoryAction";

const ProductText = () => {
  const {id} = useParams()
  const [item , images , cat , brand] = ViewProductsDetailsHook(id)

  console.log(cat)
 
  console.log(item.description)
  return (
    <div >
      <Row>
        <div className="cat-text"> {cat.name}</div>
      </Row>
      <Row>
        <Col md="8">
          <div className="cat-title d-inline">
            {item.title}
             <div className="cat-rate d-inline mx-3">{item.ratingsQuantity}</div>
          </div>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col>
          <div className="cat-text d-inline">الماركة :</div>
          <div className="brand-text d-inline" >{brand.name}</div>
        </Col>
      </Row>
      <Row>
        <Col md="8" className="mt-1 d-flex">
          {
            item.availableColors ? (
              item.availableColors.map((color , index) => (
                <div className="color border ms-2" key={index} style={{ backgroundColor: color }}></div>
              ))
            ): null
          }
        <div className="color border ms-2"   style={{ backgroundColor: "#E52C2C" }}></div>
     
        </Col>
        
      </Row>
      <Row className="mt-4">
        <div className="cat-text">المواصفات :</div>
      </Row>
      <Row>
        <Col md="10">
        <div className="product-description d-inline">
          {item.description}
       </div>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col md="12" >
        <div className="product-price d-inline px-3 py-3 border">{item.price} جنية</div>
        <div className="product-cart-add px-3 py-3 d-inline mx-3">اضف للعربة</div>

        </Col>
      </Row>
    </div>
  );
};

export default ProductText;
