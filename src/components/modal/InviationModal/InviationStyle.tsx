import styled from 'styled-components'
import { CenteredDiv } from '../../widgets'

export const Container = styled.div`
    position: relative;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    min-height: 30%;
    width: 90%;
    overflow-y: auto;
    background-color: ${props => props.theme.bravo};
    box-shadow: ${props => props.theme.btnShadow};
    z-index: 101;
    border-radius: 10px;
    max-width: 550px;
`

export const Content = styled.div`
    display: grid;
    row-gap: 25px;
    padding: 40px 20px 20px 20px;
    position: relative;
`

export const DoneButton = styled.button`
    background-color: ${props => props.theme.currentThemeColor};
    font-size: ${props => props.theme.fontSize.small};
    color: ${p => p.theme.globalColors.black};
    position: absolute;
    right: 10px;
    top: 10px;
    width: 80px;
    height: 30px;
    border-radius: 50px;
`

export const Title = styled(CenteredDiv)`
    text-transform: uppercase;
    font-family: 'Akaya Telivigala', cursive;
    margin-top: 20px;
    flex-direction: column;
    div {
       width: 50px;
       height: 50px; 
       margin-bottom: 10px;
    }
    p {
      font-size: ${props => props.theme.fontSize.jumbo};  
      font-weight: 500;
      margin-bottom: -15px;
    }
    span {
        font-size: ${props => props.theme.fontSize.xxjumbo};
        font-weight: 700;
        text-shadow: 
        2px 2px 0px ${p => p.theme.alpha},
        5px 5px 0px ${p => p.theme.currentThemeColor},
        10px 10px 0px ${p => p.theme.currentThemeColorHover};
    }
`

export const Description = styled.div`
    opacity: .9;
    font-weight: 500;
    p {
        margin-bottom: 10px;
    }
    span {
        font-size: ${props => props.theme.fontSize.small};  
    }
`

export const Details = styled.div`
    color: ${p => p.theme.currentThemeColor};
    font-size: ${props => props.theme.fontSize.large}; 
    font-weight: bold;
    font-style: italic;
    text-align: center;
    display: grid;
    row-gap: 10px;
`

export const Links = styled(CenteredDiv)`
    font-size: ${props => props.theme.fontSize.small}; 
    font-weight: 700;
    height: 40px;
    justify-content: space-between;
    button {
        display: grid;
        column-gap: 5px;
        grid-template-columns: 25px 1fr;
    }
    a {
        background-color: ${props => props.theme.currentThemeColor};
        color: ${p => p.theme.globalColors.black};
        border-radius: 50px;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        min-width: 120px;
    }
`