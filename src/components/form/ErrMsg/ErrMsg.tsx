import React from 'react'

import { errorIcon } from '../../../assets/icons/widgets'
import { CenteredDiv } from '../../../components/widgets'
// items
import { Msg } from './ErrMsgStyle'

interface prop {
    msg: string;
}

export default ({ msg, ...rest }: prop) => (
    <Msg {...rest}>
        <CenteredDiv>{errorIcon}</CenteredDiv>
        <span>{msg}</span>  
    </Msg>
)