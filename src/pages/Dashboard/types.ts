export interface UserCateogry {
  conservative: number | string
  moderate: number | string
  risk_averse: number | string
  risk_taker: number | string
}

export interface Order {
  conversion_item: string
  conversion_revenue: string | number
  due_date: string
  full_name: string
  location: string
  order_id: string
  start_date: string
  status: string
}

export interface OrdersTableState {
  loading: boolean
  page: number
  user_category: UserCateogry | null
  tempOrders: Order[]
  orders: Order[]
}
