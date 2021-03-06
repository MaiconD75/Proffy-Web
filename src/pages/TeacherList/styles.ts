import styled from 'styled-components';
import colors from '../../styles/colors';

export const PageTeacherList = styled.div`
  width: 100vw;
  height: 100vh;
  max-width: 700px;

  main {
    margin: 3.2rem auto;
    width: 90%;

    @media (min-width: 700px) {
      padding: 3.2rem 0;
      max-width: 740px;
      margin: 0 auto;
    }
  }

  @media (min-width: 700px) {
    max-width: 100%;
  }
`;

export const SearchTeachers = styled.form`
  margin-top: 3.2rem;

  label {
    color: ${colors.textInPrimary};
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
    div + div {
      margin-top: 0;
    }
  }

  @media (min-width: 700px) {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    column-gap: 16px;
    position: absolute;
    bottom: -2.8rem;
  }
`;
