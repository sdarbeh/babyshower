import React from "react";
import { Route, Redirect } from 'react-router-dom';
import Cookies from "js-cookie";
import { rsvp_cookie } from "../utils/constants/app";
import { appRoutes } from '../utils/routes'

// Contact protected route
export default ({ component: Component, ...rest }: any) => {
    const rsvpId = Cookies.get(rsvp_cookie)
    return (
        <Route {...rest} render={
            (props: any) => {
                if (rsvpId) {
                    return <Redirect to={appRoutes.rsvp.list} />
                } else {
                    return <Component {...rest} {...props} />
                }
            }
        } />
      )
}