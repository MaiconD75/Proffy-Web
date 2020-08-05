import React from 'react';

import {
  TeacherItemContainer,
  TeacherItemHeader,
  TeacherItemFooter,
} from './styles';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

const TeacherItem: React.FC = () => {
  return (
    <TeacherItemContainer>
      <TeacherItemHeader>
        <img
          src="https://avatars2.githubusercontent.com/u/43152315?s=460&u=cfafd96957394d5ba8cf655c440e39c2ec56cdbc&v=4"
          alt="Maicon Douglas"
        />
        <div>
          <strong>Maicon Douglas</strong>
          <span>Matemática</span>
        </div>
      </TeacherItemHeader>

      <p>
        Entusiasta das melhores tecnologias de matemática avançada.
        <br />
        <br />
        Apaixonado por inventar coisas em fórmulas e por mudar a vida das
        pessoas através de cálculos. Mais de 200.000 pessoas já passaram por uma
        das minhas fórmulas revolucionárias. Que objetiva ser tão F#!@ quanto
        Ciquinho!
      </p>

      <TeacherItemFooter>
        <p>
          Preço/hora
          <strong>R$ 64,00</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="Whatsapp" />
          Entrar em contato.
        </button>
      </TeacherItemFooter>
    </TeacherItemContainer>
  );
};

export default TeacherItem;
