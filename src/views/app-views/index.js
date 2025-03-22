import React, { lazy, Suspense } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Loading from 'components/shared-components/Loading';
import { APP_PREFIX_PATH } from 'configs/AppConfig'

export const AppViews = () => {
  return (
    <Suspense fallback={<Loading cover="content"/>}>
      <Switch>
        
        {/* Планировщик помещения */}
        <Route path={`${APP_PREFIX_PATH}/home/planner`} component={lazy(() => import(`./home/planner`))} />
        
        {/* Каталог */}
        <Route path={`${APP_PREFIX_PATH}/home/catalog/products`} component={lazy(() => import(`./home/catalog/products`))} />
        <Route path={`${APP_PREFIX_PATH}/home/catalog/categories`} component={lazy(() => import(`./home/catalog/categories`))} />
        <Route path={`${APP_PREFIX_PATH}/home/catalog/collections`} component={lazy(() => import(`./home/catalog/collections`))} />
        <Route path={`${APP_PREFIX_PATH}/home/catalog/combos`} component={lazy(() => import(`./home/catalog/combos`))} />
        
        {/* Заказы */}
        <Route path={`${APP_PREFIX_PATH}/home/orders`} component={lazy(() => import(`./home/orders`))} />
        
        {/* Клиенты */}
        <Route path={`${APP_PREFIX_PATH}/home/clients/list`} component={lazy(() => import(`./home/clients/list`))} />
        <Route path={`${APP_PREFIX_PATH}/home/clients/groups`} component={lazy(() => import(`./home/clients/groups`))} />
        <Route path={`${APP_PREFIX_PATH}/home/clients/profile/:id`} component={lazy(() => import(`./home/clients/profile`))} />
        
        {/* Баннеры */}
        <Route path={`${APP_PREFIX_PATH}/home/banners`} component={lazy(() => import(`./home/banners`))} />
        
        {/* Промокоды */}
        <Route path={`${APP_PREFIX_PATH}/home/promocodes`} component={lazy(() => import(`./home/promocodes`))} />
        
        {/* Оффлайн точки */}
        <Route path={`${APP_PREFIX_PATH}/home/addresses/address`} component={lazy(() => import(`./home/addresses/address`))} />
        <Route path={`${APP_PREFIX_PATH}/home/addresses/geo`} component={lazy(() => import(`./home/addresses/geo`))} />
        
        {/* Сотрудники */}
        <Route path={`${APP_PREFIX_PATH}/home/employees`} component={lazy(() => import(`./home/employees`))} />
        
        {/* Рассылки */}
        <Route path={`${APP_PREFIX_PATH}/home/mailing`} component={lazy(() => import(`./home/mailing`))} />
        
        {/* Системные разделы */}
        <Route path={`${APP_PREFIX_PATH}/system/settings`} component={lazy(() => import(`./system/settings`))} />
        <Route path={`${APP_PREFIX_PATH}/system/mobile-app`} component={lazy(() => import(`./system/mobile-app`))} />
        <Route path={`${APP_PREFIX_PATH}/system/logs`} component={lazy(() => import(`./system/logs`))} />
        
        {/* Редиректы */}
        <Redirect from={`${APP_PREFIX_PATH}/home/clients`} to={`${APP_PREFIX_PATH}/home/clients/list`} />
        <Redirect from={`${APP_PREFIX_PATH}/home/addresses`} to={`${APP_PREFIX_PATH}/home/addresses/address`} />
        <Redirect from={`${APP_PREFIX_PATH}/system`} to={`${APP_PREFIX_PATH}/system/settings`} />
        <Redirect from={`${APP_PREFIX_PATH}/home/catalog`} to={`${APP_PREFIX_PATH}/home/catalog/products`} />
        <Redirect from={`${APP_PREFIX_PATH}/home`} to={`${APP_PREFIX_PATH}/home/planner`} />
        <Redirect from={`${APP_PREFIX_PATH}`} to="/" />
      </Switch>
    </Suspense>
  )
}

export default React.memo(AppViews);