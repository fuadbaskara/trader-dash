import React from 'react'
import { Button, Col, Row, Space } from 'antd'
import { Calendar, DayRange } from 'react-modern-calendar-datepicker'
import 'react-modern-calendar-datepicker/lib/DatePicker.css'
import { useAppDispatch, useAppSelector } from '../../hooks'
import { selectCalendarPicker, setFilter, setSelectedDayRange } from './slice'

const CalendarPicker = () => {
  const dispatch = useAppDispatch()
  const { selectedDayRange } = useAppSelector(selectCalendarPicker)
  const parseSelectedDayRange = (selectedDate: DayRange) => {
    const { from, to } = selectedDate
    if (!from || !to) return
    return {
      start_date: `${from?.year}-${from?.month}-${from?.day}`,
      due_date: `${to?.year}-${to?.month}-${to?.day}`,
    }
  }

  return (
    <Calendar
      value={selectedDayRange}
      onChange={(newValue) => dispatch(setSelectedDayRange({ ...newValue }))}
      colorPrimary="#0fbcf9"
      colorPrimaryLight="rgba(75, 207, 250, 0.4)"
      renderFooter={() => (
        <Row justify="center">
          <Col>
            <Space style={{ marginBottom: '1.25rem' }}>
              <Button
                type="default"
                onClick={() => {
                  dispatch(setSelectedDayRange({ from: null, to: null }))
                  dispatch(
                    setFilter({ filter: { start_date: null, due_date: null } }),
                  )
                }}
              >
                Cancel
              </Button>
              <Button
                type="primary"
                onClick={() => {
                  const parsedDate = parseSelectedDayRange(selectedDayRange)
                  if (parsedDate)
                    dispatch(setFilter({ filter: { ...parsedDate } }))
                }}
              >
                Filter
              </Button>
            </Space>
          </Col>
        </Row>
      )}
    />
  )
}

export default CalendarPicker
