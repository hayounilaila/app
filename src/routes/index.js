import React from "react";
import { Route, Switch } from "react-router-dom";

import UserForm from "auth/components";
import { routes } from "utils/constants";

export function AppRoutes() {
  return (
    <Switch>
      <Route exact path={routes.login} component={UserForm} />
      <Route exact path={routes.register} component={UserForm} />
    </Switch>
  );
}
