/* eslint-disable import/named */
import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'
import { getOrderListApi } from '../../api/orders'
import { ParsedDate } from '../../components/CalendarPicker/types'
import { RootState } from '../../store'
import { FixMeLater } from '../../types/common'
import { dateStillInRange } from '../../utils/date'
import { OrdersTableState } from './types'

const getOrderList = createAsyncThunk<
  FixMeLater,
  { page?: number; perPage?: number },
  { state: RootState }
>('order/fetchOrderList', async () => {
  const res = await getOrderListApi()
  return res
})

const initialState: OrdersTableState = {
  loading: false,
  page: 1,
  user_category: null,
  tempOrders: [],
  orders: [],
}

const ordersSlice = createSlice({
  name: 'orders',
  initialState,
  reducers: {
    onFilterChange(state, action: PayloadAction<ParsedDate>) {
      const { start_date, due_date } = action.payload
      if (start_date && due_date) {
        state.orders = state.tempOrders.filter((order) =>
          dateStillInRange(
            start_date,
            due_date,
            order.start_date,
            order.due_date,
          ),
        )
      }
    },
    resetOrderList(state) {
      state.orders = state.tempOrders
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getOrderList.pending, (state) => {
      state.loading = true
    })
    builder.addCase(getOrderList.fulfilled, (state, { payload }) => {
      state.user_category = payload.data.user_category
      state.tempOrders = payload.data.orders
      state.orders = payload.data.orders
      state.loading = false
    })
    builder.addCase(getOrderList.rejected, (state) => {
      state.loading = false
    })
  },
})

// Export all of the actions:
export { getOrderList }
export const { onFilterChange, resetOrderList } = ordersSlice.actions

// Create and export the selector:
export const selectOrders = (state: RootState) => state.orders

// It is a convention to export reducer as a default export:
export default ordersSlice.reducer
