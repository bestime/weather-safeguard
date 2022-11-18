import { RouteLocationNormalizedLoaded } from 'vue-router';


/**
 * 判断是否当前路由链
 */
export function isActiveRouter(routeName: string, route: RouteLocationNormalizedLoaded): boolean {
  return route.matched.some(function (matchRouter) {
    return routeName === matchRouter.name;
  });
}