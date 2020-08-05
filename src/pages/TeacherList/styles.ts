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

  @media (min-width: 700px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    column-gap: 16px;
    position: absolute;
    bottom: -2.8rem;
  }
`;

export const Inputblok = styled.div`
  position: relative;

  label {
    font-size: 1.4rem;
  }

  input {
    width: 100%;
    height: 5.6rem;
    margin-top: 0.8rem;
    border-radius: 0.8rem;
    background-color: ${colors.inputBackground};
    border: 1px solid ${colors.lineInWhite};
    outline: 0;
    padding: 0 1.6rem;
    font: 1.6rem Archivo;
  }

  & + div {
    margin-top: 1.4rem;
    @media (min-width: 700px) {
      margin-top: 0;
    }
  }

  &:focus-within::after {
    width: calc(100% - 3.2rem);
    height: 2px;
    content: '';
    background: ${colors.primaryLight};
    position: absolute;
    right: 1.6rem;
    left: 1.6rem;
    bottom: 0;
  }
`;

export const SubjectInput = styled.input``;

export const WeekDayInput = styled.input``;

export const TimeInput = styled.input``;
