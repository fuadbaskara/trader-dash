import React, { ReactElement } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import { MENUS, MENU_ICONS, MENU_TITLES } from '../config/menus'
import { PUBLIC_URL } from '../config/env'
import { routeConfig } from './routes'
import NotFound from '../pages/NotFound'
import { AppRouteProps } from '../types/common'

export const routes: Array<AppRouteProps> = routeConfig.map((route) => ({
  path: MENUS[route.key] || MENUS.DASHBOARD,
  children: route.children,
  icon: MENU_ICONS[route.key] || MENU_ICONS.DASHBOARD,
  title: MENU_TITLES[route.key] || '',
  hidden: !!route.hidden,
  query: route.query || null,
}))

const AppRouter = (): ReactElement => {
  return (
    <Router basename={PUBLIC_URL}>
      <Routes>
        {routes.map((route, idx) => (
          <Route key={idx} path={route.path} element={route.children} />
        ))}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  )
}

export default AppRouter
