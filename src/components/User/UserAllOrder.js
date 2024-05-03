import React from 'react'
import { Row } from 'react-bootstrap'
import UserAllOrderItem from './UserAllOrderItem'

const UserAllOrder = () => {
  return (
    <div>
              <div className="admin-content-text pb-2">اهلا محمد السيد عبدالله  </div>
              <Row className='justify-content-between'>
                <UserAllOrderItem/>
                <UserAllOrderItem/>
                <UserAllOrderItem/>
                <UserAllOrderItem/>
                <UserAllOrderItem/>
                <UserAllOrderItem/>
                <UserAllOrderItem/>
                <UserAllOrderItem/>


              </Row>

    </div>
  )
}

export default UserAllOrder
