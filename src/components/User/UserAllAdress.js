import React from "react";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import UserAddressCard from "./UserAddressCard";

const UserAllAdress = () => {
  return (
    <div>
      <div className="admin-content-text ">دفتر العنوانين</div>
      <UserAddressCard/>
      <UserAddressCard/>
      <UserAddressCard/>

      <Row className="justify-content-center mt-3">
        <Col sm="5" className="d-flex justify-content-center">
          <Link to="/user/add-address">
            <button className="btn-add-address p-2">اضافة عنوان جديد</button>
          </Link>
        </Col>
      </Row>
    </div>
  );
};

export default UserAllAdress;
