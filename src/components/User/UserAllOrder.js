import React from "react";
import { Row } from "react-bootstrap";
import UserAllOrderItem from "./UserAllOrderItem";
import UserGetAllOrdersHook from "../../hook/user/user-get-all-orders-hook";
import Pagination from "../utils/Pagination";
import { useDispatch } from "react-redux";
import { getOrdersPage } from "../../Redux/Actions/ordersAction";

const UserAllOrder = () => {
  const [username , results ,paginate , orderData , onPress  ] = UserGetAllOrdersHook();
  console.log("Results: ", results);
  console.log("paginate: ", paginate);
  console.log("orderData: ", orderData);
  console.log("orderData: ", orderData[0]);
  
  return (
    <div>
      <div className="admin-content-text pb-2"> عدد الطلبات # {results} </div>
      <Row className="justify-content-between">
        {orderData.length >=1
          ? orderData.map((order) => (
              <UserAllOrderItem key={order._id} order={order} />
            ))
          :
          <div class="d-flex justify-content-center">
            <div class="spinner-border" role="status">
              <span class="sr-only">Loading...</span>
            </div>
            <div class="spinner-border" role="status">
              <span class="sr-only">Loading...</span>
            </div>
            <div class="spinner-border" role="status">
              <span class="sr-only">Loading...</span>
            </div>
            <div class="spinner-border" role="status">
              <span class="sr-only">Loading...</span>
            </div>
          </div> 
          }
      </Row>
      {
         paginate?.numberOfPages >=2 ? (
          <Pagination pageCount={paginate?.numberOfPages ? paginate?.numberOfPages : 0} onPress={onPress} />

         ) : (null)
      }
    </div>
  );
};

export default UserAllOrder;
