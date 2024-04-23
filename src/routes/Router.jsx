import * as React from "react";
import { Outlet, Route } from "react-router-dom";


import { Callback } from "../auth/callback";
import { Logout } from "../auth/logout";
import { LogoutCallback } from "../auth/logoutCallback";
import { PrivateRoute } from "./privateRoute";
import { SilentRenew } from "../auth/silentRenew";


const PrivatePage = () => <h3>Private</h3>;

const PublicPage = () => <h3>Public</h3>;

export const Routes = (
    <Outlet>
        <Route  path="/signin-oidc" Component={Callback} />
        <Route exact={true} path="/logout" Component={Logout} />
        <Route exact={true} path="/logout/callback" Component={LogoutCallback} />
        <Route exact={true} path="/silentrenew" Component={SilentRenew} />
        <PrivateRoute path="/dashboard" Component={PrivatePage} />
        <Route path="/" Component={PublicPage}  />
    </Outlet>
);