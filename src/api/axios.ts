import axios, { AxiosPromise, AxiosRequestConfig, Method } from 'axios'

import { METHODS } from './methods'
import { errorInterceptor, responseInterceptor } from './interceptors'
import { API_URL } from '../config/env'
import { FixMeLater } from '../types/common'

const instance = axios.create()
instance.interceptors.response.use(responseInterceptor, errorInterceptor)

export const call = (
  method: Method,
  subUrl = '',
  data: Record<string, FixMeLater> = {},
  options?: AxiosRequestConfig,
  overrideBaseUrl?: string,
): AxiosPromise => {
  const token = ''
  const config: AxiosRequestConfig = {
    ...options,
    baseURL: overrideBaseUrl || API_URL,
    method,
    url: subUrl,
    headers: {
      ...(options && options.headers ? options.headers : {}),
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  }
  const payload = { ...data }
  if (method === METHODS.GET) {
    Object.keys(payload).forEach((key) => {
      if (payload[key] === null || payload[key] === '') {
        delete payload[key]
      }
    })
    config.params = payload
  } else {
    config.data = payload
  }
  return instance.request(config)
}
