import { lazy, LazyExoticComponent, ComponentType } from 'react'

export interface Route {
    path: string
    name?: string
    title?: string
    requiresAuth?: Boolean
    component: LazyExoticComponent<ComponentType>
}

export const routes: Array<Route> = [
    {
        path: '/',
        name: 'index',
        component: lazy(() => import('../views/index')),
    },
    {
        path: '/transfer',
        name: 'transfer',
        component: lazy(() => import('../views/transfer')),
    },
    {
        path: '/oracle',
        name: 'oracle',
        component: lazy(() => import('../views/oracle')),
    },

]