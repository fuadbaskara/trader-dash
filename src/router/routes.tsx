import React from 'react'
import Dashboard from '../pages/Dashboard'
import { AppRouteConfig } from '../types/common'

export const routeConfig: Array<AppRouteConfig> = [
  {
    key: 'HOME',
    children: <Dashboard />,
  },
  {
    key: 'DASHBOARD',
    children: <Dashboard />,
  },
]
