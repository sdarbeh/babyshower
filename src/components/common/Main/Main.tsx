import styled from 'styled-components'
import { Navigator } from '../../smart'
import { device, maxWith } from '../../../utils/constants/mediaQueries'
import React from 'react'

interface m {
  hide?: boolean;
}

const Main = styled.main`
  padding: ${(p:m) => p.hide ? '75px 20px 100px 20px' : '0 20px 100px 20px'};
  div.navigator {
    padding: 25px 0 50px 0;
  }
  @media ${device.tablet} { 
    max-width: ${maxWith};
    margin: 0 auto;
  }
  @media ${device.laptopL} {
    padding: ${(p:m) => p.hide ? '75px 0 100px 0' : '0 0 100px 0'};
  }
`

const Nav = styled.div`

`

interface p {
  children: any;
  withNav?: boolean;
  hideNavigator?: boolean;
  whiteNavigatorText?: boolean;
  customNavPaths?: string[];
}

export default (p: p) => {
  const { children, withNav, hideNavigator, whiteNavigatorText, customNavPaths, ...r } = p
  return (
    <Main {...r} hide={hideNavigator}>
      {!hideNavigator && <div className="navigator"><Navigator whiteText={whiteNavigatorText} customPaths={customNavPaths} /></div>}
      { withNav ? <Nav>{children}</Nav> : children}
    </Main>
  )
}