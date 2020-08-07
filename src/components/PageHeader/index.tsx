import React from 'react';
import { Link } from 'react-router-dom';

import { PageHeaderContainer, TopBarContainer, HeaderContent } from './styles';

import logoImg from '../../assets/images/logo.svg';
import backIcon from '../../assets/images/icons/back.svg';

interface IProps {
  title: string;
  description?: string;
}

const PageHeader: React.FC<IProps> = ({ title, children, description }) => {
  return (
    <PageHeaderContainer>
      <TopBarContainer>
        <Link to="/">
          <img src={backIcon} alt="Voltar" />
        </Link>
        <img src={logoImg} alt="Proffy" />
      </TopBarContainer>

      <HeaderContent className="header-content">
        <strong>{title}</strong>
        {description && <p>{description}</p>}

        {children}
      </HeaderContent>
    </PageHeaderContainer>
  );
};

export default PageHeader;
