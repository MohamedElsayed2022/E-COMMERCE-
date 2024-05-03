import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const RegisterPage = () => {
  return (
    <div style={{minHeight:"670px"}}>
        <Container style={{minHeight:"680px"}}>
            <Row className='d-flex justify-content-center'>
                <Col sm="12" className='d-flex flex-column'>
                    <label className='mx-auto text-login my-3'>تسجيل جديد</label>
                    <input type='text' className='mx-auto text-center user-input ' placeholder='اسم المستخدم...'/>
                    <input type='password' className='mx-auto text-center user-input my-3 ' placeholder='الايميل ...'/>
                     <input type='password' className='user-input mx-auto text-center ' placeholder=' كلمة السر...' />
                      <button className='btn-login mx-auto my-3'>تسجيل الحساب</button>
                      <label className="mx-auto ">
                        اذا لديك حساب بالفعل؟
                        <Link to="/login" style={{ textDecoration: 'none' }}>
                            <span style={{ cursor: "pointer" }} className="text-danger">
                                اضغط هنا
                            </span>
                        </Link>
                    </label>
                </Col>
            </Row>

        </Container>
    </div>
  )
}

export default RegisterPage
