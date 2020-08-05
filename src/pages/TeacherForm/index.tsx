import React from 'react';
import PageHeader from '../../components/PageHeader';

import { PageTeacherList } from './styles';


const TeacherForm: React.FC = () => {
  return (
    <PageTeacherList>
      <PageHeader title="Que incrível que você quer dar aulas."/>
    </PageTeacherList>
  );
}

export default TeacherForm;
