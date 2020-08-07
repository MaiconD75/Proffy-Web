import React, { useState, FormEvent } from 'react';
import { useHistory } from 'react-router-dom';

import { PageTeacherForm, PageFooter, DataField, ScheduleItem } from './styles';

import InputField from '../../components/InputField';
import PageHeader from '../../components/PageHeader';
import TextareaField from '../../components/TextAreaField ';
import SelectField from '../../components/SelectField';

import warningIcon from '../../assets/images/icons/warning.svg';
import api from '../../services/api';

interface IScheduleItem {
  week_day: number;
  from: string;
  to: string;
}

const TeacherForm: React.FC = () => {
  const history = useHistory();

  const [name, setName] = useState('');
  const [avatar, setAvatar] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [bio, setBio] = useState('');

  const [subject, setSubject] = useState('');
  const [cost, setCost] = useState('');

  const [scheduleItems, setScheduleItems] = useState([
    { week_day: 1, from: '', to: '' },
  ]);

  function addNewScheduleItem() {
    setScheduleItems([...scheduleItems, { week_day: 1, from: '', to: '' }]);
  }

  function setScheduleItemValue(
    position: number,
    field: string,
    value: string,
  ) {
    const updatedScheduleItems = scheduleItems.map((scheduleItem, index) => {
      if (index === position) {
        return { ...scheduleItem, [field]: value };
      }

      return scheduleItem;
    });

    setScheduleItems(updatedScheduleItems);
  }

  function handleCreateClass(e: FormEvent) {
    e.preventDefault();

    api
      .post('classes', {
        name,
        avatar,
        whatsapp,
        bio,
        subject,
        cost: Number(cost),
        schedule: scheduleItems,
      })
      .then(() => {
        alert('Cadastro realizado com sucesso!');

        history.push('/');
      })
      .catch(() => {
        alert('Erro no cadastro!');
      });
  }

  return (
    <PageTeacherForm>
      <PageHeader
        title="Que incrível que você quer dar aulas."
        description="O primeiro passo, é preencher esse
      formulário de inscrição."
      />

      <main>
        <form onSubmit={handleCreateClass}>
          <DataField>
            <legend>Seus dados</legend>

            <InputField
              name="name"
              labelText="Nome Completo"
              value={name}
              onChange={e => {
                setName(e.target.value);
              }}
            />
            <InputField
              name="avatar"
              labelText="Avatar"
              value={avatar}
              onChange={e => {
                setAvatar(e.target.value);
              }}
            />
            <InputField
              name="whatsapp"
              labelText="WhatsApp"
              value={whatsapp}
              onChange={e => {
                setWhatsapp(e.target.value);
              }}
            />
            <TextareaField
              name="bio"
              labelText="Biorgrafia"
              value={bio}
              onChange={e => {
                setBio(e.target.value);
              }}
            />
          </DataField>

          <DataField>
            <legend>Sobre a aula</legend>

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
            <InputField
              name="cost"
              labelText="Custo da sua hora por aula"
              value={cost}
              onChange={e => {
                setCost(e.target.value);
              }}
            />
          </DataField>

          <DataField>
            <legend>
              Horários disponíveis
              <button type="button" onClick={() => addNewScheduleItem()}>
                + Novo Horário
              </button>
            </legend>
            {scheduleItems.map((scheduleItem, index) => {
              return (
                <ScheduleItem key={scheduleItem.week_day}>
                  <SelectField
                    name="week_day"
                    labelText="Dia da semana"
                    value={scheduleItem.week_day}
                    onChange={e =>
                      setScheduleItemValue(index, 'week_day', e.target.value)}
                    options={[
                      { value: '0', label: 'Domingo' },
                      { value: '1', label: 'Segunda-feira' },
                      { value: '2', label: 'Terça-feira' },
                      { value: '3', label: 'Quarta-feira' },
                      { value: '4', label: 'Quinta-feira' },
                      { value: '5', label: 'Sexta-feira' },
                      { value: '6', label: 'Sábado' },
                    ]}
                  />
                  <InputField
                    type="time"
                    name="from"
                    labelText="Das"
                    value={scheduleItem.from}
                    onChange={e =>
                      setScheduleItemValue(index, 'from', e.target.value)}
                  />
                  <InputField
                    type="time"
                    name="to"
                    labelText="Até"
                    value={scheduleItem.to}
                    onChange={e =>
                      setScheduleItemValue(index, 'to', e.target.value)}
                  />
                </ScheduleItem>
              );
            })}
          </DataField>

          <PageFooter>
            <p>
              <img src={warningIcon} alt="Aviso importante" />
              Importante!
              <br />
              Preencha todos os dados
            </p>
            <button type="submit">Salvar cadastro</button>
          </PageFooter>
        </form>
      </main>
    </PageTeacherForm>
  );
};

export default TeacherForm;
