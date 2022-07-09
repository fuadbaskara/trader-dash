import { ReactNode } from 'react'

export interface CommonConstantsObj<T> {
  [key: string]: T
}

interface Menu extends CommonConstantsObj<string> {
  HOME: string
  DASHBOARD: string
}

export const MENUS: Menu = {
  HOME: '/',
  DASHBOARD: '/dashboard',
}

export const MENU_KEYS: Menu = {
  HOME: '/',
  DASHBOARD: 'DASHBOARD',
}

export const MENU_TITLES: Menu = {
  HOME: 'Dashboard',
  DASHBOARD: 'Dashboard',
}

export const MENU_ICONS: CommonConstantsObj<ReactNode> = {}

export const MENU_ACCESS_KEYS: CommonConstantsObj<string> = {}
