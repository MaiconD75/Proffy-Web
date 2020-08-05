import React from 'react';

import {
  PageTeacherList,
  SearchTeachers,
  Inputblok,
  SubjectInput,
  WeekDayInput,
  TimeInput,
} from './styles';

import PageHeader from '../../components/PageHeader';
import TeacherItem from '../../components/TeacherItem';

const TeacherList: React.FC = () => (
  <PageTeacherList>
    <PageHeader title="Estes são os proffys disponíveis.">
      <SearchTeachers>
        <Inputblok>
          <label htmlFor="subject">Material</label>
          <SubjectInput type="text" />
        </Inputblok>

        <Inputblok>
          <label htmlFor="week_day">Dia da semana</label>
          <WeekDayInput type="text" />
        </Inputblok>

        <Inputblok>
          <label htmlFor="time">Hora</label>
          <TimeInput type="text" />
        </Inputblok>
      </SearchTeachers>
    </PageHeader>

    <main>
      <TeacherItem />
      <TeacherItem />
      <TeacherItem />
    </main>
  </PageTeacherList>
);

export default TeacherList;
