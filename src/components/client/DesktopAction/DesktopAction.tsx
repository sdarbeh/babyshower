import React, { useState } from "react";
// import { useQuery } from '@apollo/client'

import { leftArrowIcon } from '../../../assets/icons/widgets'
// items
import { Left, Right, SocialContainer } from './DesktopActionStyle'
import { Link } from "react-router-dom";
import { appRoutes } from "../../../utils/routes";

export default () => {
    const [expanded, setExpanded] = useState(true)
    const [registry] = useState<[]>([])
    let error = false

    return (
        <>
            <Left>
                <Link to={appRoutes.rsvp.register}>Baby Cairo - Sat, March 13th</Link>
            </Left>
            <Right expanded={expanded}>
                <SocialContainer
                    expanded={expanded}
                    length={registry.length}
                >
                    {registry.map((s: any, i) => (
                        <span key={i}>registry</span>
                    ))}
                </SocialContainer>
                {!error && registry.length > 0 && (
                    <button onClick={() => setExpanded(prev => !prev)}>
                        {leftArrowIcon}
                    </button>
                )}
            </Right>
        </>
    )
}