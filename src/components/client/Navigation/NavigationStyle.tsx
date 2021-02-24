import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

export const Content = styled.div`
    display: grid;
    grid-template-columns: 45px 1fr 40px;
    column-gap: 10px;
    position: relative;
    width: 100%;
`

export const LogoContainer = styled(NavLink)`
    div {
        width: 40px;
        height: 40px;
    }
`

export const CloseIcon = styled.div`
    color: ${props => props.theme.currentThemeColor};
    svg {
       transform: scale(.8);
        left: 0;
        top: 0; 
    }
`

export const Hamburger = styled.button`
    height: 100%;
    width: 40px;
    height: 40px;
    position: relative;
    & svg {
        position: absolute;
        height: 40px;
        width: 40px;
    }
`