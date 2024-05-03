import React from "react";
import { Col, Row } from "react-bootstrap";
import edit from "../../images/edit.png";
import deleteicon from "../../images/delete.png";
import { Link } from "react-router-dom";
const UserAddressCard = () => {
  return (
    <div className="user-address-card  px-2 my-3 ">
      <Row className="d-flex justify-content-between ">
        <Col xs="1">
          <div className="p-2">المنزل</div>
        </Col>
        <Col xs="4" className="d-flex justify-content-end">
          <div className="d-flex p-2">
          <div className="d-flex ms-2">
              <img
                src={edit}
                height="17px"
                width="15px"
                className="d-inline mt-1 ms-1"
                alt=""
              />
              <Link to="/user/edit-address" style={{ textDecoration: "none" }}>
                <p className="item-delete-edit d-inline"> تعديل</p>
              </Link>
            </div>
            <div className="d-flex">
              <img
                src={deleteicon}
                height="17px"
                width="15px"
                className="d-inline mt-1 ms-1"
                alt=""
              />
              <Link to="/user/edit-address" style={{ textDecoration: "none" }}>
                <p className="item-delete-edit d-inline"> ازالة</p>
              </Link>
            </div>
          </div>
        </Col>
      </Row>
      <Row>
        <Col xs="12">
          <div
            style={{
              color: "#555550",
              fontFamily: "Almarai",
              fontSize: "14px",
            }}
          >
            القاهرة مدينه نصر شارع التسعين عماره ١٤
          </div>
        </Col>
      </Row>
      <Row>
        <Col xs="12" className="d-flex mt-3">
          <div
            style={{
              color: "#555550",
              fontFamily: "Almarai",
              fontSize: "16px",
            }}
          >
            رقم الهاتف:
          </div>{" "}
          <div
            style={{
              color: "#979797",
              fontFamily: "Almarai",
              fontSize: "16px",
            }}
            className="mx-2"
          >
            0021313432423
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default UserAddressCard;
