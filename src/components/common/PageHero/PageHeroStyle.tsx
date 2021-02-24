import styled from 'styled-components'
import { device, maxWith } from '../../../utils/constants/mediaQueries'

interface h {
  bg: string;
  theme: any;
  border?: any;
  withNav?: any;
}

export const Hero = styled.div`
  color: ${p => p.theme.globalColors.white};
  border-bottom: 5px solid ${(p: h) => p.border ? p.theme.currentThemeColor : p.theme.alpha};
  background:
  linear-gradient(
  rgba(0, 0, 0, 0.3), 
  rgba(0, 0, 0, 0.3)
  ),
  url(${(p: h) => p.bg});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  align-items: center;
  justify-content: center;
  height: calc(300px - 5px);
  &, div.content {
    display: flex;
  }
  // with naviagtion
  div.content {
    padding: ${(p:h) => p.withNav ? '40px 20px 0 20px' : null};
    height: ${(p:h) => p.withNav ? 'calc(100% - 40px)' : null};
    width: ${(p:h) => p.withNav ? 'calc(100% - 40px)' : null};
    align-items: ${(p:h) => p.withNav ? 'flex-end' : null};
    flex-direction: ${(p:h) => p.withNav ? 'column' : null};
  }
  div.hero-nav {
    height: 35px;
    width: 100%;
    margin: auto 0 5px 0;
    display: flex;
    text-transform: uppercase;
    a {
      height: 100%;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      border-bottom: 5px solid transparent;
      margin-right: 5px;
      border-radius: 10px 10px 0 0;
      div {
        margin-bottom: -5px;
      }
    }
    a:hover {
      border-color: ${p => p.theme.currentThemeColor};
    }
    a.active {
      box-shadow: 0px -12px 30px -10px ${p => p.theme.bravo};
      background: ${p => p.theme.currentThemeColor};
      color: ${p => p.theme.globalColors.black};
    }
  }
  // end with naviagtion
  h1 {
    font-size: ${p => p.theme.fontSize.xxjumbo};
    line-height: 50px;
    text-transform: uppercase;
    text-shadow: 2px 2px 3px rgb(0 0 0 / 23%);
    margin: ${(p:h) => p.withNav ? 'auto auto -25px 0!important' : null}
  }
  p, h1 {
    margin: 0;
  }
  @media ${device.tablet} { 
    background-size: 100%;
    div.content {
      max-width: ${maxWith};
    }
    div.hero-nav {
      max-width: 400px;
      margin: auto auto 5px 0;
    }
  }
`