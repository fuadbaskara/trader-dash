import React from 'react'
import { Card, Col, Row } from 'antd'
import OrdersTable from './components/table'
import CalendarPicker from '../../components/CalendarPicker'
import '../../assets/styles/App.scss'

function Dashboard() {
  return (
    <Card>
      <Row justify="center" gutter={24}>
        <Col xs={24} sm={24} md={6}>
          <CalendarPicker />
        </Col>
        <Col xs={24} sm={24} md={18}>
          <OrdersTable />
        </Col>
      </Row>
    </Card>
  )
}

export default Dashboard
