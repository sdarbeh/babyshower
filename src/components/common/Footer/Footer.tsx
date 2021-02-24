import React from 'react'
import Cookies from 'js-cookie';
import { NavLink } from "react-router-dom";

import { useThemeColor } from '../../../hooks/theme'
import useInvation from '../../../hooks/useInvation';
import { rsvp_cookie } from '../../../utils/constants/app';
import { appRoutes } from '../../../utils/routes';
// items
import { Footer, Nav, Copyright } from './FooterStyle'

export default (p: any) => {
    const rsvpId = Cookies.get(rsvp_cookie)
    const { currentThemeColor } = useThemeColor()
    const { setInvationActive } = useInvation()
    return (
        <Footer {...p}>
            <Nav>
                <li>
                    <NavLink to={appRoutes.home} exact activeStyle={{ color: currentThemeColor }}>
                        <span>Home</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to={appRoutes.rsvp.main} activeStyle={{ color: currentThemeColor }}>
                        <span>RSVP</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to={appRoutes.registry} exact activeStyle={{ color: currentThemeColor }}>
                        <span>Registry</span>
                    </NavLink>
                </li>
                {rsvpId && (
                    <li>
                        <button onClick={() => {
                            p.closeNav()
                            setInvationActive(true)
                        }}>
                            <span>Invitation</span>
                        </button>
                    </li>
                )}
            </Nav>
            <Copyright>
                <div>
                    <span>Caroline,&nbsp;Sam&nbsp;&&nbsp;Cairo&nbsp;:)&nbsp;|&nbsp;</span>
                    <span>{new Date().getFullYear().toString()}</span>
                </div>
            </Copyright>
        </Footer>
    )
}