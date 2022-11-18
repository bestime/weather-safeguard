import { createRouter, createWebHashHistory, RouteRecordRaw, createWebHistory } from 'vue-router';

export const routes: Array<RouteRecordRaw> = [  
  {
    path: '/',
    name: 'HOME',
    component: () => import('@/views/Home/index.vue'), 
    redirect: {
      name: 'HOME_DATAANALYSIS'
    },   
    children: [
      {
        path: 'DataAnalysis',
        name: 'HOME_DATAANALYSIS',
        component: () => import('@/views/Home/views/DataAnalysis/index.vue'), 
      },
      {
        path: 'ClimatologicalStatistics',
        name: 'HOME_CLIMATOLOGICALSTATISTICS',
        component: () => import('@/views/Home/views/ClimatologicalStatistics/index.vue'), 
      },
      {
        path: 'ProductMake',
        name: 'HOME_PRODUCTMAKE',
        component: () => import('@/views/Home/views/ProductMake/index.vue'), 
      }
    ]
  },
  
]

const routerMode = import.meta.env.VITE_ROUTER_MODE
const baseUrl = import.meta.env.BASE_URL

const iRouter = createRouter({
  history: routerMode === 'history' ? createWebHistory(baseUrl) : createWebHashHistory(),
  routes
});


export default iRouter;