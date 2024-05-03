import React from "react";
import { Col, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import prod1 from '../../images/prod1.png'
import favoff from '../../images/fav-off.png'
import rate from '../../images/rate.png'
import { Link } from "react-router-dom";
const AdminAllProductsCard = () => {
  return (
    <Col xs="12" sm="6" md="4" lg="4" className="d-flex">
    <Card
      className="my-2 "
      style={{
        width: "100%",
        height: "390px",
        borderRadius: "8px",
        border: "none",
        backgroundColor: "#ffff",
        boxShadow: "0 2px 2px 0 rgba(151 , 151 , 151 , .5)",
      }}
    >
        <Row className="d-flex justify-content-center px-2 pt-1">
            <Col className="d-flex justify-content-between">
            <div className="item-delete-edit d-inline">أزالة</div>
            <div className="item-delete-edit d-inline">تعديل</div>
            </Col>
          

        </Row>
      <Link to="/products/:id" style={{textDecoration:"none"}}>
         <Card.Img variant="top" src={prod1} style={{height:"228px" , width:"100%" }} />
      </Link>
      <div className="d-flex justify-content-end mx-2">
          <img src={favoff} alt="" className="text-center" style={{height:"24px" , width:"26px"}}/>
      </div>
      <Card.Body>
        <Card.Title>
          <div className="card-title">
               ثانى اكسيد الكربون ثانى اكسيد الكربون  ثانى اكسيد الكربون ثانى  
          </div>
        </Card.Title>
        <Card.Text className="d-flex justify-content-between align-items-center ">
           <div className="d-flex justify-content-between">
              <div className="d-flex">
                  <img src={rate} height="16px" width="16px" alt=""/>
                  <div className="card-rate mx-2">4.5</div>
              </div>

           </div>
           <div className="d-flex">
              <div className="card-price">880</div>
              <div className="card-currency mx-1">جنيه</div>


           </div>
        </Card.Text>
      </Card.Body>
    </Card>
  </Col>
  )
}

export default AdminAllProductsCard
