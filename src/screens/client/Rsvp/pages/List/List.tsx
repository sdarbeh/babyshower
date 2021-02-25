import React, { useState } from 'react'
import styled from 'styled-components';
import Cookies from 'js-cookie';
import { rsvp_cookie } from '../../../../../utils/constants/app';

import { useQuery } from '@apollo/client';
import { GET_RSVPS } from '../../../../../graghql/rsvp';
import { timeAgo } from '../../../../../utils/helpers/date';
import { familyIcon } from '../../../../../assets/icons/family';

import { CenteredDiv, Ellipsis } from '../../../../../components/widgets';
import { InfiniteScroll } from '../../../../../components/smart';
import { appRoutes } from '../../../../../utils/routes';
import { Link } from 'react-router-dom';

export default () => {
  const rsvpId = Cookies.get(rsvp_cookie)
  const [families, setFamilies] = useState()
  const [rsvps, setRsvps] = useState<[]>([])
  const [paginate, setPaginate] = useState({
    offset: 0,
    limit: 5,
    hasMore: true,
  })

  const { loading, refetch, fetchMore } = useQuery(GET_RSVPS, {
    notifyOnNetworkStatusChange: true,
    onCompleted: (data: any) => {
      const { length } = data.rsvp
      const { count } = data.rsvp_aggregate.aggregate
      setPaginate({
        ...paginate,
        offset: length,
        hasMore: length !== 0 && length < count
      })
      setRsvps(data.rsvp)
      setFamilies(count)
    },
  });

  const handleFetch = () => {
    if (!paginate.hasMore) return
    fetchMore({})
  }

  const handleRefresh = () => {
    setPaginate({ ...paginate, offset: 0, hasMore: true })
    refetch()
  }

  return (
    <Container>
      <div className="list-title">
        <p>All of our Family and Friends who confirmed to celebrate this special occasion with us!</p>
        {!loading && rsvps.length !== 0 && (
          <p>So far, <span>{families}</span> parties are attending.</p>
        )}
      </div>
      {loading && (
        <CenteredDiv className="rsvp-loading">
          <Ellipsis />
        </CenteredDiv>
      )}
      {!loading && rsvps.length !== 0 && (
        <InfiniteScroll
          length={rsvps.length}
          onNext={handleFetch}
          hasMore={paginate.hasMore}
          onRefresh={handleRefresh}
          hideEndMessage={rsvps.length < paginate.limit}
          items={rsvps.map((r: any) => (
            <Card key={r.id} active={r.id === rsvpId}>
              <div className="rsvp-card-title">
                <CenteredDiv>
                  {familyIcon(r.people ? r.people.length + 1 : 1)}
                </CenteredDiv>
                <p>{r.people.length > 0 ? `The ${r.houshold}` : r.head}</p>
              </div>
              <div className="rsvp-card-content">
                {r.people.length > 0 && (
                  <ul>
                    {r.people?.map((p: string, i: number) => (
                      <li key={i}>{p},&nbsp;</li>
                    ))}
                    <li>{r.head}</li>
                  </ul>
                )}
              </div>
              <span>{`Confirmed ${timeAgo(r.created_at)}`}</span>
            </Card>
          ))}
        />
      )}
      {!loading && rsvps.length === 0 && (
        <CenteredDiv className="empty-rsvps">
          <p>No RSVPS yet :(</p>
          <Link to={appRoutes.rsvp.register}>
            <CenteredDiv>Register</CenteredDiv>
          </Link>
        </CenteredDiv>
      )}
    </Container>
  )
}

const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
  display: grid;
  row-gap: 25px;
  div.list-title {
    border-bottom: 1px solid ${p => p.theme.bravo};
    padding-bottom: 10px;
    display: grid;
    row-gap: 10px;
    span {
      color: ${p => p.theme.currentThemeColor};
      font-weight: 700;
    }
  }
  div.rsvp-loading {
    height: 30px;
  }
  div.empty-rsvps {
    display: grid;
    row-gap: 15px;
    margin-top: 20px;
    p {
      text-align: center;
    }
    a {
      background-color: ${p => p.theme.currentThemeColor};
      color: ${p => p.theme.globalColors.black};
      width: 150px;
      height: 40px;
      border-radius: 52px;
    }
  }
`

interface c {
  active: any;
  theme: any;
}

const Card = styled.div`
  background-color: ${p => p.theme.bravo};
  box-shadow: ${p => p.theme.btnShadow};
  border: 1px solid ${(p: c) => p.active ? p.theme.currentThemeColor : p.theme.currentThemeColorHover};
  border-radius: 10px;
  padding: 10px 20px;
  margin-bottom: 30px;
  transition: .2s ease-in;
  div {
    text-transform: capitalize;
  }
  div.rsvp-card-title {
    display: grid;
    grid-template-columns: 25px 1fr;
    column-gap: 10px;
    p {
      font-size: ${p => p.theme.fontSize.xlarge};
      font-weight: 700;
    }
  }
  div.rsvp-card-content {
    margin: 10px 0 5px 0;
    opacity: .8;
    ul {
      font-size: ${p => p.theme.fontSize.small};
      display: flex;
      align-items: center;
      flex-wrap: wrap;
    }
  }
  span {
    font-size: ${p => p.theme.fontSize.xsmall};
    font-style: italic;
    opacity: .3;
  }
`