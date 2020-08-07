import styled from 'styled-components';

import colors from '../../styles/colors';

export const PageTeacherForm = styled.div`
  width: 100vw;
  height: 100vh;
  max-width: 700px;

  & .header-content {
    margin-bottom: 6.4rem;
  }

  main {
    background: ${colors.boxBase};
    width: 100%;
    max-width: 74rem;
    border-radius: 0.8rem;
    margin: -3.2rem auto 3.2rem;
    padding-top: 6.4rem;
    overflow: hidden;

    label {
      color: ${colors.textComplement};
    }
  }

  @media (min-width: 700px) {
    max-width: 100vw;

    & .header-content {
      margin-bottom: 0;
    }
  }
`;

export const DataField = styled.fieldset`
  border: 0;
  padding: 0 2.4rem;

  legend {
    font: 700 2.4rem Archivo;
    color: ${colors.textTitle};
    margin-bottom: 2.4rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding-bottom: 1.6rem;
    border-bottom: 1px solid ${colors.lineInWhite};

    button {
      background: none;
      border: 0;
      color: ${colors.primary};
      font: 700 1.6rem Archivo;
      cursor: pointer;
      transition: color 0.2s;

      &:hover {
        color: ${colors.primaryDark};
      }
    }
  }

  & + fieldset {
    margin-top: 6.4rem;
  }

  div + div {
    margin-top: 2.4rem;
  }

  @media (min-width: 700px) {
    padding: 0 6.4rem;
  }
`;

export const PageFooter = styled.footer`
  padding: 4rem 2.4rem;
  background: ${colors.boxFooter};
  border-top: 1px solid ${colors.lineInWhite};
  margin-top: 6.4rem;

  p {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.4rem;
    line-height: 2.4rem;
    color: ${colors.textComplement};

    img {
      margin-right: 2rem;
    }
  }
  button {
    width: 100%;
    height: 5.6rem;
    background: ${colors.secundary};
    color: ${colors.buttonText};
    border: 0;
    border-radius: 0.8rem;
    cursor: pointer;
    font: 700 1.6rem Archivo;
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    transition: background-color 0.2s;
    margin-top: 3.2rem;

    &:hover {
      background: ${colors.secundaryDark};
    }
  }

  @media (min-width: 700px) {
    padding: 4rem 6.4rem;
    display: flex;
    align-items: center;
    justify-content: space-between;

    p {
      justify-content: space-between;
    }

    button {
      width: 20rem;
      margin-top: 0;
    }
  }
`;

export const ScheduleItem = styled.div`
  @media (min-width: 700px) {
    display: grid;
    grid-template-columns: 2fr 1fr 1fr;
    column-gap: 1.6rem;

    & > div {
      margin: 0 !important;
    }
  }
`;
