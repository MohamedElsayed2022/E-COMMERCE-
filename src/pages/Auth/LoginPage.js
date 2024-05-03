import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from "react-router-dom";
const LoginPage = () => {
  return (
    <div style={{ minHeight: "670px" }}>
      <Container style={{minHeight:"680px"}}>
        <Row className="d-flex justify-content-center py-5">
          <Col sm="12" className="d-flex flex-column">
              <label className="mx-auto text-login">تسجيل الدخول</label>
              <input type="text" placeholder="الايميل..." className="user-input my-3 text-center mx-auto" />
              <input type="password" placeholder="الايميل..." className="user-input text-center mx-auto" />
              <button className="btn-login mx-auto mt-4">تسجيل الدخول</button>
              <label className="mx-auto my-4">
                        ليس لديك حساب ؟{" "}
                        <Link to="/register" style={{ textDecoration: 'none' }}>
                            <span style={{ cursor: "pointer" }} className="text-danger">
                                اضغط هنا
                            </span>
                        </Link>
                    </label>


                    <label className="mx-auto my-4">

                        <Link to="/user/forget-password" style={{ textDecoration: 'none', color: 'red' }}>
                            هل نسيت كلمه السر
                        </Link>
                    </label>
          </Col>
          <label className="mx-auto my-4">

<Link to="/admin/allproducts" style={{ textDecoration: 'none', color: 'red' }}>
       حساب ادمن
</Link>
<Link to="/user/allorders" style={{ textDecoration: 'none', color: 'red' , display:"block" }}>
       حساب مستخدم
</Link>
</label>
        </Row>
      </Container>
    </div>
  );
};

export default LoginPage;
