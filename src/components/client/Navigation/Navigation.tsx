import React from 'react';
import { withRouter } from "react-router";
import Cookies from 'js-cookie';
import { rsvp_cookie } from '../../../utils/constants/app';
import useInvation from '../../../hooks/useInvation';

import { hamburgerMenuIcon, xIcon } from '../../../assets/icons/widgets'
// items
import { Header, DesktopNav } from '../index'
import { Logo } from '../../common/index'
import { NavModal } from '../../modal'
import { Content, LogoContainer, Hamburger, CloseIcon } from './NavigationStyle'

export default withRouter((props: any) => {
    const rsvpId = Cookies.get(rsvp_cookie)
    const { match: { path }, navActive, setNavActive, openTheme, isDesktop } = props

    const { setInvationActive } = useInvation()
    return (
        <Header>
            <Content>
                <LogoContainer to={'/'}>
                    <Logo />
                </LogoContainer>
                <div />
                <Hamburger onClick={setNavActive} aria-label={'Navigation'}>
                    {navActive && <CloseIcon>{xIcon}</CloseIcon>}
                    {!navActive && hamburgerMenuIcon}
                </Hamburger>

                {navActive && isDesktop && (
                    <DesktopNav
                        path={path}
                        rsvpId={rsvpId}
                        openInvite={() => setInvationActive(true)}
                        handleNavClose={setNavActive}
                        openTheme={() => {
                            openTheme()
                            setNavActive()
                        }}
                    />
                )}
            </Content>
            { navActive && !isDesktop && (
                <NavModal
                    path={path}
                    rsvpId={rsvpId}
                    handleClose={setNavActive}
                    openInvite={() => setInvationActive(true)}
                    openTheme={() => {
                        openTheme()
                        setNavActive()
                    }}
                />
            )}
        </Header>
    )
})