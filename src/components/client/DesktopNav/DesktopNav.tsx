import React from 'react'
import { NavLink } from "react-router-dom";

import { routeActive } from '../../../utils/helpers/methods'

import { HomeIcon, RsvpIcon, GiftIcon, invitationIcon } from '../../../assets/navigation/navigation'
import { themeIcon } from '../../../assets/icons/theme';
import { useThemeMode } from '../../../hooks/theme'

// items
import { Navigation, NavItem } from './DesktopNavStyle'
import { appRoutes } from '../../../utils/routes';

export default ({ path, rsvpId, openTheme, openInvite, handleNavClose }: any) => {
    const { home, rsvp, registry } = appRoutes

    const { currentThemeMode } = useThemeMode();

    return (
        <Navigation>
            <NavItem active={routeActive(home, path)}>
                <NavLink to={home}>
                    <span>Home</span>
                    <HomeIcon active={routeActive(home, path)} />
                </NavLink>
            </NavItem>
            <NavItem active={routeActive(rsvp.main, path)}>
                <NavLink to={rsvp.main}>
                    <span>RSVP</span>
                    <RsvpIcon active={routeActive(rsvp.main, path)} />
                </NavLink>
            </NavItem>
            <NavItem active={routeActive(registry, path)}>
                <NavLink to={registry}>
                    <span>Registry</span>
                    <GiftIcon active={routeActive(registry, path)} />
                </NavLink>
            </NavItem>
            {rsvpId && (
                <NavItem active={0}>
                    <button onClick={() => {
                        handleNavClose()
                        openInvite()
                    }}>
                        <span>Invitation</span>
                        {invitationIcon}
                    </button>
                </NavItem>
            )}
            <NavItem active={0}>
                <button onClick={openTheme}>
                    <span>Theme</span>
                    {themeIcon(currentThemeMode)}
                </button>
            </NavItem>
        </Navigation>
    )
}