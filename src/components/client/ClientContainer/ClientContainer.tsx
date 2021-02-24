import React, { useEffect, useState } from 'react';

import { PageTitle } from '../../../components/common'

import useMediaQuery from '@material-ui/core/useMediaQuery';
import { device } from '../../../utils/constants/mediaQueries';

// items
import { ErrorScreen } from '../../../screens/common'
import { ThemeModal, InviationModal } from '../../modal'
import { Navigation, DesktopAction } from '../index'
import { Footer } from '../../common'
import { Container, Content } from './ClientContainerStyle'
import useInvation from '../../../hooks/useInvation';

interface props {
  children: any;
  pageTitle: string;
  hideFooter?: boolean;
  error?: any;
}

export default ({ children, pageTitle, hideFooter, error }: props) => {
  const matches = useMediaQuery(device.laptop);

  const { invationActive, setInvationActive } = useInvation()

  const [themeActive, setThemeActive] = useState(false)
  const [navActive, setNavActive] = useState(false)

  if (error) {
    console.error({
      error,
      from: pageTitle + ' screen'
    })
    return <ErrorScreen />
  }

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <Container>
      <PageTitle title={pageTitle} />
      <Navigation
        navActive={navActive}
        setNavActive={() => setNavActive(prev => !prev)}
        openTheme={() => setThemeActive(true)}
        isDesktop={matches}
      />
      <Content>
        {children}
      </Content>
      { !hideFooter && (
        <Footer closeNav={() => setNavActive(false)} />
      ) }
      {themeActive && !invationActive && (
        <ThemeModal handleClose={() => setThemeActive(false)} />
      )}
      {invationActive && !themeActive && (
        <InviationModal handleClose={() => setInvationActive(false)} />
      )}
      {matches && (
        <DesktopAction />
      )}
    </Container>
  );
}