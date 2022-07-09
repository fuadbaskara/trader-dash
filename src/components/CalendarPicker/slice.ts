/* eslint-disable import/named */
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { DayRange } from 'react-modern-calendar-datepicker'
import { RootState } from '../../store'
import { CalendarState, ParsedDate } from './types'

const initialState: CalendarState = {
  filter: undefined,
  selectedDayRange: {
    from: null,
    to: null,
  },
}

const calendarPickerSlice = createSlice({
  name: 'calendarPicker',
  initialState,
  reducers: {
    setSelectedDayRange(state, action: PayloadAction<DayRange>) {
      const { from, to } = action.payload
      state.selectedDayRange = { from, to }
    },
    setFilter(state, action: PayloadAction<{ filter: ParsedDate }>) {
      const { filter } = action.payload
      state.filter = filter
    },
  },
  extraReducers: () => {},
})

// Export all of the actions:
export {}
export const { setSelectedDayRange, setFilter } = calendarPickerSlice.actions

// Create and export the selector:
export const selectCalendarPicker = (state: RootState) => state.calendarPicker

// It is a convention to export reducer as a default export:
export default calendarPickerSlice.reducer
