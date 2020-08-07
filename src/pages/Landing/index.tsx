/* eslint-disable react/jsx-one-expression-per-line */
import React, { useEffect, useState } from 'react';

import {
  PageLanding,
  PageLandingContent,
  LogoContainer,
  HeroImage,
  ButtonsContainer,
  StudyBtn,
  GiveClassesBtn,
  TotalConnections,
} from './styles';

import logoImg from '../../assets/images/logo.svg';
import landingImg from '../../assets/images/landing.svg';
import studyIcon from '../../assets/images/icons/study.svg';
import giveClassesIcon from '../../assets/images/icons/give-classes.svg';
import PurpleHeartIcon from '../../assets/images/icons/purple-heart.svg';

import api from '../../services/api';

const Landing: React.FC = () => {
  const [totalConnections, setTotalConnections] = useState(0);

  useEffect(() => {
    api.get('connections').then(response => {
      const { total } = response.data;

      setTotalConnections(total);
    });
  }, []);

  return (
    <PageLanding>
      <PageLandingContent>
        <LogoContainer>
          <img src={logoImg} alt="Proffy" />
          <h2>Sua plataforma de estudos online.</h2>
        </LogoContainer>

        <HeroImage src={landingImg} alt="Plataforma de estudos" />

        <ButtonsContainer>
          <StudyBtn to="/study">
            <img src={studyIcon} alt="Estudar" />
            Estudar
          </StudyBtn>

          <GiveClassesBtn to="/give-classes">
            <img src={giveClassesIcon} alt="Dar aulas" />
            Dar aulas
          </GiveClassesBtn>
        </ButtonsContainer>

        <TotalConnections>
          Total de {totalConnections} conexões já realizadas
          <img src={PurpleHeartIcon} alt="Coração roxo" />
        </TotalConnections>
      </PageLandingContent>
    </PageLanding>
  );
};

export default Landing;
