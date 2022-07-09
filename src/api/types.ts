export interface CommonListResponse<T> {
  data: T[]
  code: number
}

export interface CommonDetailResponse<T> {
  data: T
}

export interface CommonListParams {
  id?: string
  search?: string
  page?: number
  perPage?: number
  orderDirection?: 'ASC' | 'DESC'
  orderBy?: string
}
