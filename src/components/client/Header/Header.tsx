import React from 'react'
// items
import { Container } from './HeaderStyle'

export default ({ children, ...rest }: any) => (
    <Container {...rest}>
        {children}
    </Container>
)