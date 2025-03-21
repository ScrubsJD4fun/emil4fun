import React, { lazy, Suspense } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Loading from 'components/shared-components/Loading';
import { APP_PREFIX_PATH } from 'configs/AppConfig'

const System = () => {
  return (
    <Suspense fallback={<Loading cover="content"/>}>
      <Switch>
        <Route path={`${APP_PREFIX_PATH}/system/settings`} component={lazy(() => import(`./settings`))} />
        <Route path={`${APP_PREFIX_PATH}/system/mobile-app`} component={lazy(() => import(`./mobile-app`))} />
        <Route path={`${APP_PREFIX_PATH}/system/logs`} component={lazy(() => import(`./logs`))} />
        <Redirect from={`${APP_PREFIX_PATH}/system`} to={`${APP_PREFIX_PATH}/system/settings`} />
      </Switch>
    </Suspense>
  )
}

export default System; 