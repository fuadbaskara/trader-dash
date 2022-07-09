/* eslint-disable import/named */
import { ReactNode } from 'react'
import { RouteProps } from 'react-router-dom'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type FixMeLater = any

export interface AppRouteProps extends RouteProps {
  icon: ReactNode
  title: string
  hidden: boolean
  query?: FixMeLater
}

export interface AppRouteConfig {
  key: string
  children: ReactNode
  hidden?: boolean
  query?: FixMeLater
}
