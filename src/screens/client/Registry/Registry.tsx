import React from 'react'
import { amazonImg, giftsImg, targetImg } from '../../../assets/public'

// items
import { ClientContainer } from '../../../components/client'
import { Main, RegistryCard } from '../../../components/common'

import { Hero, Content } from './RegistryStyle'

export default () => {
    return (
        <ClientContainer
            pageTitle={'Our Registry'}
        >
            <Hero bg={giftsImg} border>
                <h1>Registry</h1>
            </Hero>
            <Main>
                <Content>
                    <p>We appreciate you so much for supporting us through this new adventure!</p>
                    <div>
                        <RegistryCard
                            name="Amazon"
                            url="https://www.amazon.com/baby-reg/samuel-darbeh-april-2021-tulsa/1U75UG0C4Q40P?ref=cm_sw_em_r_px_DESKTOP_q1m419zP51YKs"
                            img={amazonImg}
                        />
                        <RegistryCard
                            name="Target"
                            url="https://www.target.com/gift-registry/giftgiver?registryId=1856afdec30749a3ba6eea148403de0c"
                            img={targetImg}
                        />
                    </div>
                </Content>
            </Main>
        </ClientContainer>
    )
}