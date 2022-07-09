import { combineReducers } from '@reduxjs/toolkit'

// orders slice
import ordersReducer from '../pages/Dashboard/slice'

// calendar picker slice
import calendarReducer from '../components/CalendarPicker/slice'

const rootReducer = combineReducers({
  orders: ordersReducer,
  calendarPicker: calendarReducer,
})

export default rootReducer
