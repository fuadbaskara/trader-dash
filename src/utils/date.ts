import dayjs from 'dayjs'

const DEBUGGING_DATE_FORMAT = 'MMMM D, YYYY h:mm A'

export const dateFormat = (date: string) => {
  return dayjs(new Date(date)).format('MMMM D, YYYY HH:mm')
}

export const debuggingDate = (date: string) => {
  return dayjs(date).format(DEBUGGING_DATE_FORMAT)
}

export const dateStillInRange = (
  filterStartDate: string,
  filterEndDate: string,
  startDate: string,
  dueDate: string,
) => {
  const filterStart = new Date(filterStartDate).getTime()
  const filterEnd = new Date(filterEndDate).getTime()
  const start = new Date(startDate).getTime()
  const due = new Date(dueDate).getTime()
  return (
    start >= filterStart &&
    start <= filterEnd &&
    due >= filterStart &&
    filterEnd <= due
  )
}
