import React from 'react'
import { Link } from 'react-router-dom'
import { GiftIcon, RsvpIcon } from '../../../assets/navigation/navigation'

// items
import { ClientContainer } from '../../../components/client'
import { appRoutes } from '../../../utils/routes'
import { HomeHero } from './HomeStyle'

export default () => {
    return (
        <ClientContainer
            pageTitle={'Home Page'}
        >
            <HomeHero>
                <div className='hero-c'>
                    <h1>Sam, Caroline, & Baby Cairo</h1>
                    <div>
                        <Link to={appRoutes.rsvp.register}>
                            <RsvpIcon active={0} />
                            <span>Baby shower RSVP</span>
                        </Link>
                        <Link to={appRoutes.registry}>
                            <GiftIcon active={0} />
                            <span>Our Registry</span>
                        </Link>
                    </div>
                </div>
            </HomeHero>
        </ClientContainer>
    )
}