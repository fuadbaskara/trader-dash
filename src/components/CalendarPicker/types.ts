import { DayRange } from 'react-modern-calendar-datepicker'

export type ParsedDate = {
  start_date: string | null
  due_date: string | null
}

export interface CalendarState {
  filter: ParsedDate | undefined | null
  selectedDayRange: DayRange
}
