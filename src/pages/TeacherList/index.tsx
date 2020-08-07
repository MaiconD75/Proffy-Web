import React, { useState, FormEvent } from 'react';

import api from '../../services/api';

import { PageTeacherList, SearchTeachers } from './styles';

import PageHeader from '../../components/PageHeader';
import TeacherItem, { ITeacher } from '../../components/TeacherItem';
import InputField from '../../components/InputField';
import SelectField from '../../components/SelectField';

const TeacherList: React.FC = () => {
  const [teachers, setTeachers] = useState([]);

  const [subject, setSubject] = useState('');
  const [week_day, setWeekDay] = useState('');
  const [time, setTime] = useState('');

  async function searchTeachers(e: FormEvent) {
    e.preventDefault();

    const response = await api.get('classes', {
      params: {
        subject,
        week_day,
        time,
      },
    });

    setTeachers(response.data);
  }

  return (
    <PageTeacherList>
      <PageHeader title="Estes são os proffys disponíveis.">
        <SearchTeachers onSubmit={searchTeachers}>
          <SelectField
            name="subject"
            labelText="Matéria"
            value={subject}
            onChange={e => {
              setSubject(e.target.value);
            }}
            options={[
              { value: 'Artes', label: 'Artes' },
              { value: 'Biologia', label: 'Biologia' },
              { value: 'Ciências', label: 'Ciências' },
              { value: 'Educação Fisica', label: 'Educação Fisica' },
              { value: 'Espanhol', label: 'Espanhol' },
              { value: 'Filosofia', label: 'Filosofia' },
              { value: 'Física', label: 'Física' },
              { value: 'Geografia', label: 'Geografia' },
              { value: 'História', label: 'História' },
              { value: 'Inglês', label: 'Inglês' },
              { value: 'Matemática', label: 'Matemática' },
              { value: 'Português', label: 'Português' },
              { value: 'Química', label: 'Química' },
              { value: 'Sociologia', label: 'Sociologia' },
            ]}
          />
          <SelectField
            name="week_day"
            labelText="Dia da semana"
            value={week_day}
            onChange={e => {
              setWeekDay(e.target.value);
            }}
            options={[
              { value: '0', label: 'Domingo' },
              { value: '1', label: 'Segunda-feira' },
              { value: '2', label: 'Terça-feira' },
              { value: '3', label: 'Quarta-feira' },
              { value: '4 ', label: 'Quinta-feira' },
              { value: '5', label: 'Sexta-feira' },
              { value: '6', label: 'Sábado' },
            ]}
          />
          <InputField
            type="time"
            name="time"
            labelText="Hora"
            value={time}
            onChange={e => {
              setTime(e.target.value);
            }}
          />

          <button type="submit">Buscar</button>
        </SearchTeachers>
      </PageHeader>

      <main>
        {teachers.map((teacher: ITeacher) => {
          return <TeacherItem key={teacher.id} teacher={teacher} />;
        })}
      </main>
    </PageTeacherList>
  );
};

export default TeacherList;
