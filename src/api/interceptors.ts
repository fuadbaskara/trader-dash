import { AxiosError, AxiosResponse } from 'axios'
import { notification } from 'antd'

const notify = (desc: string, msg = 'Error has occured') => {
  notification.error({
    message: msg,
    description: desc,
  })
}

export const responseInterceptor = (response: AxiosResponse) => ({
  ...response,
  ...(response.data && { data: response.data }),
})

export const errorInterceptor = (err: AxiosError): Promise<never> => {
  const { response } = err
  if (response) {
    // const { url = '', method = '' } = response.config
  } else {
    notify('Error')
  }
  return Promise.reject(err)
}
