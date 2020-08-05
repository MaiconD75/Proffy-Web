import styled from 'styled-components';
import { Link } from 'react-router-dom';

import colors from '../../styles/colors';

export const PageLanding = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;

  color: ${colors.textInPrimary};
  background: ${colors.primary};
`;

export const PageLandingContent = styled.div`
  width: 90vw;
  max-width: 700px;

  @media (min-width: 1100px) {
    max-width: 1100px;

    display: grid;
    grid-template-rows: 350px 1fr;
    grid-template-columns: 2fr 1fr 1fr;
    grid-template-areas:
    "logo hero hero"
    "buttons buttons total"

  }
`;

export const LogoContainer = styled.div`
  text-align: center;
  margin-bottom: 3.2rem;

  img {
    height: 10rem;
  }

  h2{
    font-weight: 500;
    font-size: 2.4rem;
    line-height: 4.6rem;
    margin-top: 0.8rem;
  }

  @media (min-width: 1100px) {
    grid-area: logo;

    align-self: center;
    text-align: left;
    margin: 0;

    img {
      height: 100%;
    }

    h2 {
      font-size: 3.6rem;
    }
  }
`;

export const HeroImage = styled.img`
  width: 100%;

  @media (min-width: 1100px) {
    grid-area: hero;

    justify-self: end;
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 3.2rem 0;

  a {
    width: 30rem;
    height: 10.4rem;
    border-radius: 0.8rem;
    margin-right: 1.6rem;
    font-weight: 700;
    font-size: 2.0rem;
    font-family: Archivo;

    display: flex;
    align-items: center;
    justify-content: center;

    text-decoration: none;
    color: ${colors.buttonText};

    transition: background-color 0.2s;

    &:first-child {
      margin-right: 1.6rem;
    }

    img {
      width: 4rem;
      margin-right: 2.4rem;
    }
  }

  @media (min-width: 1100px) {
    grid-area: buttons;

    justify-content: flex-start;

    a {
      font-size: 2.4rem;
    }
  }
`;

export const StudyBtn = styled(Link)`
  background: ${colors.primaryLighter};

  &:hover{
    background: ${colors.primaryLight};
  }
`;

export const GiveClassesBtn = styled(Link)`
  background: ${colors.secundary};

  &:hover{
    background: ${colors.secundaryDark};
  }
`;

export const TotalConnections = styled.span`
  font-size: 1.4rem;

  display: flex;
  align-items: center;
  justify-content: center;

  img{
    margin-left: 0.8rem;
  }

  @media (min-width: 1100px) {
    grid-area: total;

    justify-self: end
  }
`;
