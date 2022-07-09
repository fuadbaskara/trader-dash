import { call } from '../axios'
import { METHODS } from '../methods'
import { CommonListParams, CommonListResponse } from '../types'
import { OrderListReponse } from './types'

const endpoint = 'takehometest/web/dashboard'

export const getOrderListApi = async (
  params?: CommonListParams,
): Promise<CommonListResponse<OrderListReponse>> => {
  const response = await call(METHODS.GET, endpoint, params)

  return response.data
}
