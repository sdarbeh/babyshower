import React from 'react'
import styled from 'styled-components';
import Cookies from 'js-cookie';
import { NavLink, Redirect, Route, Switch } from 'react-router-dom'
import { appRoutes } from '../../../utils/routes'
import { bearImg } from '../../../assets/public';
import { rsvp_cookie, shower_full_date } from '../../../utils/constants/app';

import { RegisterRoute } from '../../../gaurds';
// pages
import { Register, List } from './pages'

// items
import { ClientContainer } from '../../../components/client'
import { Main, PageHero } from '../../../components/common'

const { main, register, list } = appRoutes.rsvp

export default ({ location: { pathname } }: any) => {
    const rsvpId = Cookies.get(rsvp_cookie);
    if (pathname === main) return <Redirect to={register} />

    return (
        <ClientContainer
            pageTitle={'RSVP Babyshower'}
        >
            <Hero
                bg={bearImg}
                title={`Rsvp - ${shower_full_date}`}
                withNav
            >
                {!rsvpId && (
                    <NavLink to={register}><div>Register</div></NavLink>
                )}
                <NavLink to={list}><div>The list</div></NavLink>
            </Hero>
            <Main>
                <Switch>
                    <RegisterRoute path={register} exact component={Register} />
                    <Route path={list} exact component={List} />
                    <Route path={'*'} component={() => <h1>Not found</h1>} />
                </Switch>
            </Main>
        </ClientContainer>
    )
}


const Hero = styled(PageHero)`
  div.content  {
    h1 {
        font-size: ${p => p.theme.fontSize.jumbo};
    }
    a {
        max-width: 150px;
    }
  }
`