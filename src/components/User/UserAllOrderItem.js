import React, { useEffect, useState } from "react";
import UserAllOrderCard from "./UserAllOrderCard";
import { Col, Row } from "react-bootstrap";
import Pagination from "../utils/Pagination";

const UserAllOrderItem = ({order}) => {
  
  console.log("Order Status :- " , order.isDelivered)
  console.log(order.cartItems)
  // const [items , setItems] = useState([])
  // useEffect(()=>{
  //   if(order.cartItems)
  //     setItems(order.cartItems)
  // },[])
 

  // console.log("Items :- " , items)
  return (
    <>
     <div className="user-order mt-2">
      <Row>
        <div className="py-2 order-title">طلب رقم #{order.id || 0}</div>
      </Row>
       {
        order && order.cartItems ? (
          order.cartItems.map((cart , index)=>{
            return <UserAllOrderCard key={index} cart={cart} />
          })
        ) : (<h3>لا توجد منتجات فى العربة</h3>)
       }
      <Row className="d-flex justify-content-between">
        <Col xs="6" className="d-flex">
          <div>
            <div className="d-inline">التوصيل</div>
            <div className="d-inline mx-2 stat" > {order?.isDelivered === true ? 'تم ' : 'لم يتم '}</div>
          </div>
          <div>
            <div className="d-inline">الدفع</div>
            <div className="d-inline mx-2 stat"> {order?.isPaid === true ? 'تم ' : 'لم يتم '}</div>
          </div>
          <div>
            <div className="d-inline">طريقة الدفع </div>
            <div className="d-inline mx-2 stat"> {order?.paymentMethodType === 'cash' ? 'كاش' : ' بطاقة ائتمانية'}</div>
          </div>
        </Col>
        <Col xs="6" className="d-flex justify-content-end">
          <div>
            <div className="barnd-text">{order.totalOrderPrice} جنيه</div>
          </div>
        </Col>
      </Row>

    </div>

    </>
   
  );
};

export default UserAllOrderItem;
