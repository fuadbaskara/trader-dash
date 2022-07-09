/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react'
import { Table } from 'antd'
import { useAppDispatch, useAppSelector } from '../../../../hooks'
import {
  getOrderList,
  onFilterChange,
  selectOrders,
  resetOrderList,
} from '../../slice'
import { selectCalendarPicker } from '../../../../components/CalendarPicker/slice'
import { columns } from './column'

const OrdersTable = () => {
  const dispatch = useAppDispatch()
  const { loading, orders } = useAppSelector(selectOrders)
  const { filter } = useAppSelector(selectCalendarPicker)

  useEffect(() => {
    dispatch(getOrderList({}))
  }, [])

  useEffect(() => {
    if (filter?.start_date && filter?.due_date) {
      dispatch(onFilterChange({ ...filter }))
    } else dispatch(resetOrderList())
  }, [filter])

  return (
    <Table
      loading={loading}
      dataSource={orders}
      columns={columns}
      rowKey="order_id"
      pagination={{
        pageSize: 5,
        total: orders.length,
      }}
    />
  )
}

export default OrdersTable
