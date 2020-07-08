import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="Github Explorer" />
      <Title>Explore repositórios no Github</Title>

      <Form>
        <input placeholder="Digite o nome do repositório" />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="teste">
          <img
            src="https://avatars2.githubusercontent.com/u/32583709?s=460&u=235fdc983594d25ebe9d7aa02be92fef5f2f3147&v=4"
            alt="Cleyson Diego"
          />

          <div>
            <strong>cleysondiego/veteritec-mobile</strong>
            <p>
              Repositorio destinado a um software de gerenciamento de clínicas
              veterinárias
            </p>
          </div>

          <FiChevronRight size={20} />
        </a>

        <a href="teste">
          <img
            src="https://avatars2.githubusercontent.com/u/32583709?s=460&u=235fdc983594d25ebe9d7aa02be92fef5f2f3147&v=4"
            alt="Cleyson Diego"
          />

          <div>
            <strong>cleysondiego/veteritec-mobile</strong>
            <p>
              Repositorio destinado a um software de gerenciamento de clínicas
              veterinárias
            </p>
          </div>

          <FiChevronRight size={20} />
        </a>

        <a href="teste">
          <img
            src="https://avatars2.githubusercontent.com/u/32583709?s=460&u=235fdc983594d25ebe9d7aa02be92fef5f2f3147&v=4"
            alt="Cleyson Diego"
          />

          <div>
            <strong>cleysondiego/veteritec-mobile</strong>
            <p>
              Repositorio destinado a um software de gerenciamento de clínicas
              veterinárias
            </p>
          </div>

          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
