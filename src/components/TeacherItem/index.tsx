import React from 'react';

import {
  TeacherItemContainer,
  TeacherItemHeader,
  TeacherItemFooter,
} from './styles';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';
import api from '../../services/api';

export interface ITeacher {
  avatar: string;
  bio: string;
  cost: number;
  id: number;
  name: string;
  subject: string;
  whatsapp: string;
}

interface ITeacherItemProps {
  teacher: ITeacher;
}

const TeacherItem: React.FC<ITeacherItemProps> = ({ teacher }) => {
  function createNewConnection() {
    api.post('connections', {
      user_id: teacher.id,
    });
  }

  return (
    <TeacherItemContainer>
      <TeacherItemHeader>
        <img src={teacher.avatar} alt={teacher.name} />
        <div>
          <strong>{teacher.name}</strong>
          <span>{teacher.subject}</span>
        </div>
      </TeacherItemHeader>

      <p>{teacher.bio}</p>

      <TeacherItemFooter>
        <p>
          Preço/hora
          <strong>
            R$
            {teacher.cost}
          </strong>
        </p>
        <a
          target="blank"
          onClick={createNewConnection}
          href={`https://wa.me/${teacher.whatsapp}`}
        >
          <img src={whatsappIcon} alt="Whatsapp" />
          Entrar em contato.
        </a>
      </TeacherItemFooter>
    </TeacherItemContainer>
  );
};

export default TeacherItem;
