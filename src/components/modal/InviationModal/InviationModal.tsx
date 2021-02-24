import React from 'react'
import { Link } from 'react-router-dom'
import { calenderIcon } from '../../../assets/icons/widgets'
import { CairoIcon } from '../../../assets/navigation/navigation'
import { shower_add_calender, shower_time_until, shower_location, shower_location_link, shower_full_date } from '../../../utils/constants/app'
import { appRoutes } from '../../../utils/routes'

import { PageTitle } from '../../common'
import { CenteredDiv, LinkButton } from '../../widgets'
import { Modal } from '../types'
import { Container, Content, DoneButton, Title, Description, Details, Links } from './InviationStyle'

interface p {
  handleClose: any;
}

export default (p: p) => {
  const { pathname } = window.location
  return (
    <Modal handleClose={p.handleClose}>
      <PageTitle title="Baby shower Confirm">
        <link href="https://fonts.googleapis.com/css2?family=Akaya+Telivigala&display=swap" rel="stylesheet" />
      </PageTitle>
      <Container>
        <Content>
          <DoneButton onClick={p.handleClose}>Close</DoneButton>
          <Title>
            <CenteredDiv>
              <CairoIcon />
            </CenteredDiv>
            <p>We are having a </p>
            <span>Baby boy!</span>
          </Title>
          <Description>
            <p>Thank you for confirming your attendence to our baby shower!</p>
            <span>Here's the details:</span>
          </Description>
          <Details>
            <div>
              <p>When: <br />{shower_full_date}</p>
              <span>{shower_time_until}</span>
            </div>
            <p>Location: <LinkButton to={shower_location_link} newTab>{shower_location}</LinkButton></p>
          </Details>
          <Links>
            <LinkButton to={shower_add_calender} newTab>
              <CenteredDiv>{calenderIcon}</CenteredDiv>
              <span>Add to calender</span>
            </LinkButton>
            {pathname !== appRoutes.rsvp.list && (
              <Link to={appRoutes.rsvp.list} onClick={p.handleClose}>See the list</Link>
            )}
          </Links>
        </Content>
      </Container>
    </Modal>
  )
}