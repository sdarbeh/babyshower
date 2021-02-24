import styled from 'styled-components';
import { cnsImg } from '../../../assets/public'
import { device } from '../../../utils/constants/mediaQueries';

export const HomeHero = styled.div`
  background:
  linear-gradient(
  rgba(0, 0, 0, 0.3), 
  rgba(0, 0, 0, 0.3)
  ),
  url(${cnsImg(Math.floor(Math.random() * 4) + 1)});
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
  width: 100%;
  height: calc(100vh - 60px); // 60px header
  text-transform: uppercase;
  position: relative;
  font-weight: 700;
  &, a {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  div.hero-c {
    padding: 20px 30px;
    border-radius: 3px;
    max-width: calc(400px - 60px);
    div {
      display: grid;
      row-gap: 20px;
    }
  }
  h1 {
    font-size: ${p => p.theme.fontSize.xjumbo};
    margin: 0 0 20px 0;
    text-align: center;
  }
  a {
    background-color: ${p => p.theme.alpha};
    border: 2px solid ${p => p.theme.alpha};
    color: ${p => p.theme.currentThemeColor};
    display: grid;
    grid-template-columns: 30px 1fr;
    column-gap: 20px;
    height: 65px;
    padding: 0 20px;
    border-radius: 10px;
  }
  @media ${device.tablet} { 
    background-size: 100%;
    height: calc(100vh - 60px); // 60px header
  }
`