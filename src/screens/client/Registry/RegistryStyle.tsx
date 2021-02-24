import styled from 'styled-components';
import { PageHero } from '../../../components/common';
import { device } from '../../../utils/constants/mediaQueries';

export const Hero = styled(PageHero)`
  div.content {
    padding: 40px 20px;
    width: calc(100% - 40px);
    height: calc(100% - 80px);
    align-items: flex-end;
    @media ${device.tablet} {
      padding: 40px 0;
    }
  }
`

export const Content = styled.div`
  max-width: 400px;
  margin: 0 auto;
  p {
    text-align: center;
    margin-bottom: 50px;
  }
  div {
    display: grid;
    row-gap: 20px;
  }
`