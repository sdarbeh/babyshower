import React from 'react'
import { NavLink } from "react-router-dom";
import { appRoutes } from '../../../utils/routes';

import { routeActive } from '../../../utils/helpers/methods'

import { HomeIcon, RsvpIcon, GiftIcon, invitationIcon } from '../../../assets/navigation/navigation'
import { themeIcon } from '../../../assets/icons/theme';
import { useThemeMode } from '../../../hooks/theme'

// items
import { SideModal } from '../types'
import { CenteredDiv } from '../../widgets'
import { Navigation, Title, ItemContent, NavItem, RegisteredItem, ThemeItem } from './NavModalStyle'

export default ({ path, handleClose, rsvpId, openTheme, openInvite }: any) => {
    const { home, rsvp, registry } = appRoutes

    const { currentThemeMode } = useThemeMode();

    return (
        <SideModal handleClose={handleClose}>
            <Navigation>
                <Title>Navigation</Title>
                <ItemContent onClick={handleClose}>
                    <NavItem active={routeActive(home, path)}>
                        <NavLink to={home}>
                            <CenteredDiv>
                                <HomeIcon active={routeActive(home, path)} />
                            </CenteredDiv>
                            <CenteredDiv>Home</CenteredDiv>
                        </NavLink>
                    </NavItem>
                    <NavItem active={routeActive(rsvp.main, path)}>
                        <NavLink to={rsvp.main}>
                            <RsvpIcon active={routeActive(rsvp.main, path)} />
                            <CenteredDiv>RSVP</CenteredDiv>
                        </NavLink>
                    </NavItem>
                    <NavItem active={routeActive(registry, path)}>
                        <NavLink to={registry}>
                            <CenteredDiv>
                                <GiftIcon active={routeActive(registry, path)} />
                            </CenteredDiv>
                            <CenteredDiv>Registry</CenteredDiv>
                        </NavLink>
                    </NavItem>
                    {rsvpId && (
                        <RegisteredItem>
                            <button onClick={openInvite}>
                                <CenteredDiv>
                                    {invitationIcon}
                                </CenteredDiv>
                                <CenteredDiv>Invitation</CenteredDiv>
                            </button>
                        </RegisteredItem>
                    )}
                </ItemContent>
                <ThemeItem>
                    <button onClick={openTheme}>
                        <CenteredDiv>{themeIcon(currentThemeMode)}</CenteredDiv>
                        <CenteredDiv>Display</CenteredDiv>
                    </button>
                </ThemeItem>
            </Navigation>
        </SideModal>
    )
}